import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import BackgroundElements from './components/BackgroundElements';
import FileUpload from './components/FileUpload';
import ComponentOptions from './components/ComponentOptions';
import ActionButtons from './components/ActionButtons';
import CodeEditor from './components/CodeEditor';
import FeatureCards from './components/FeatureCards';
import ConversionInfo from './components/ConversionInfo';
import Footer from './components/Footer';
import ConversionAnimation from './components/ConversionAnimation';

function SvgToJsxConverter() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [svgInput, setSvgInput] = useState('');
  const [jsxOutput, setJsxOutput] = useState('');
  const [fileName, setFileName] = useState('SVGComponent');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const convertSvgToJsx = (svg) => {
    if (!svg.trim()) {
      setJsxOutput('');
      return;
    }

    try {
      let jsx = svg;

      // Convert common SVG attributes to JSX format
      const attributeMap = {
        'class': 'className',
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'stroke-dasharray': 'strokeDasharray',
        'stroke-dashoffset': 'strokeDashoffset',
        'fill-opacity': 'fillOpacity',
        'stroke-opacity': 'strokeOpacity',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'clip-path': 'clipPath',
        'font-family': 'fontFamily',
        'font-size': 'fontSize',
        'font-weight': 'fontWeight',
        'text-anchor': 'textAnchor',
        'stop-color': 'stopColor',
        'stop-opacity': 'stopOpacity',
        'xmlns:xlink': 'xmlnsXlink',
        'xlink:href': 'xlinkHref'
      };

      // Replace attributes
      Object.entries(attributeMap).forEach(([svgAttr, jsxAttr]) => {
        const regex = new RegExp(`\\b${svgAttr}=`, 'g');
        jsx = jsx.replace(regex, `${jsxAttr}=`);
      });

      // Convert numeric attributes to JSX expression format
      jsx = jsx.replace(/(\b(?:width|height|cx|cy|r|x|y|x1|x2|y1|y2|rx|ry|opacity)\s*=\s*)"(\d+(?:\.\d+)?)"/g, (match, attr, value) => {
        return `${attr}{${value}}`;
      });

      // Convert style attributes to JSX style objects
      jsx = jsx.replace(/style="([^"]*)"/g, (match, styleContent) => {
        const styles = styleContent.split(';')
          .filter(s => s.trim())
          .map(s => {
            const [key, value] = s.split(':').map(part => part.trim());
            const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            return `${camelKey}: '${value}'`;
          })
          .join(', ');
        return `style={{${styles}}}`;
      });

      // Extract the SVG element and add props spread
      const svgMatch = jsx.match(/(<svg[^>]*)(>)/);
      if (svgMatch) {
        jsx = jsx.replace(/(<svg[^>]*)(>)/, '$1\n    {...props}\n  $2');
      }

      // Format as React component with dynamic name
      const componentName = fileName.replace(/[^a-zA-Z0-9]/g, '') || 'SVGComponent';
      
      const formattedJsx = `import * as React from "react";

const ${componentName} = (props) => (
  ${jsx.replace(/\n/g, '\n  ')}
);

export default ${componentName};`;

      setJsxOutput(formattedJsx);
    } catch (error) {
      setJsxOutput('Error converting SVG. Please check your input.');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSvgInput(value);
    convertSvgToJsx(value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsxOutput);
  };

  const downloadJSX = () => {
    const componentName = fileName.replace(/[^a-zA-Z0-9]/g, '') || 'SVGComponent';
    const extension = '.jsx';
    const blob = new Blob([jsxOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = componentName + extension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const regenerateWithNewName = () => {
    if (svgInput.trim()) {
      convertSvgToJsx(svgInput);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.svg')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const svgContent = event.target.result;
        
        // Extract component name from file name
        const nameWithoutExt = file.name.replace('.svg', '');
        const componentName = nameWithoutExt
          .split(/[-_\s]+/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
        
        setFileName(componentName);
        setUploadedFileName(file.name);
        setSvgInput(svgContent);
        
        // Convert after state is set
        setTimeout(() => {
          convertSvgToJsx(svgContent);
        }, 0);
        
        // Reset file input to allow uploading the same file again
        setFileInputKey(Date.now());
      };
      reader.readAsText(file);
    }
  };

  const clearAll = () => {
    setSvgInput('');
    setJsxOutput('');
    setUploadedFileName('');
    setFileInputKey(Date.now());
  };

  const loadExample = () => {
    const example = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  <rect x="10" y="10" width="30" height="30" fill-opacity="0.5" class="my-rect" />
</svg>`;
    setSvgInput(example);
    setUploadedFileName('');
    convertSvgToJsx(example);
    setFileInputKey(Date.now());
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${isDark ? 'from-gray-900 via-purple-900 to-blue-900' : 'from-white via-purple-50/30 to-blue-50/30'} relative overflow-hidden transition-colors duration-500`}>
      {/* Continuous Shining Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -inset-full bg-gradient-to-br ${isDark ? 'from-transparent via-purple-500/10 to-transparent' : 'from-transparent via-purple-400/15 to-transparent'} animate-shine`}></div>
      </div>
      
      <BackgroundElements />
      <Header />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-12 relative">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${isDark ? 'from-purple-500/10 to-pink-500/10 border-purple-500/30' : 'from-purple-500/20 to-pink-500/20 border-purple-500/50'} border rounded-full mb-6 backdrop-blur-sm animate-bounce-subtle hover:scale-105 transition-transform duration-300`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Free • No Sign-up Required</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 leading-tight animate-slide-up`}>
            Transform SVG to{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
              React Components
            </span>
          </h2>
          
          <p className={`${isDark ? 'text-purple-200/90' : 'text-gray-700'} text-base sm:text-lg lg:text-xl mb-6 max-w-3xl mx-auto leading-relaxed`}>
            Convert SVG markup to production-ready React JSX components instantly. 
            <span className={`block mt-2 ${isDark ? 'text-purple-300/70' : 'text-gray-600'}`}>
              Perfect attribute conversion • Props support • Clean code output
            </span>
          </p>
          
          {uploadedFileName && (
            <div className={`inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r ${isDark ? 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30' : 'from-emerald-500/20 to-teal-500/20 border-emerald-500/50'} border rounded-xl backdrop-blur-sm animate-slide-in hover:scale-105 transition-transform duration-300`}>
              <div className={`flex items-center justify-center w-8 h-8 ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-500/30'} rounded-lg animate-pulse`}>
                <svg className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>{uploadedFileName}</p>
                <p className={`text-xs ${isDark ? 'text-emerald-400/70' : 'text-emerald-700/80'}`}>Component: {fileName}</p>
              </div>
            </div>
          )}
        </div>
{/* Animated Conversion Demo */}
        <ConversionAnimation />

        
        <FileUpload onFileUpload={handleFileUpload} key={fileInputKey} />

        {svgInput && (
          <ComponentOptions
            fileName={fileName}
            setFileName={setFileName}
            regenerateWithNewName={regenerateWithNewName}
            showPreview={showPreview}
            setShowPreview={setShowPreview}
          />
        )}

        <ActionButtons
          loadExample={loadExample}
          clearAll={clearAll}
          copyToClipboard={copyToClipboard}
          downloadJSX={downloadJSX}
          hasOutput={!!jsxOutput}
        />

        <CodeEditor
          svgInput={svgInput}
          jsxOutput={jsxOutput}
          showPreview={showPreview}
          onInputChange={handleInputChange}
        />

        <FeatureCards />
        <ConversionInfo />
      </div>

      <Footer />
    </div>
  );
}

export default SvgToJsxConverter;
