import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeEditor({ svgInput, jsxOutput, showPreview, onInputChange }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [previewBg, setPreviewBg] = useState('white');

  const getBackgroundClass = () => {
    switch (previewBg) {
      case 'white':
        return 'bg-white';
      case 'black':
        return 'bg-gray-900';
      case 'gray':
        return 'bg-gray-400';
      case 'checkerboard':
        return 'bg-checkerboard';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`grid gap-4 sm:gap-6 animate-fade-in-up ${showPreview && svgInput ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
      {/* Input Section */}
      <div className={`backdrop-blur-xl ${isDark ? 'bg-purple-900/20' : 'bg-white/60'} rounded-2xl border ${isDark ? 'border-purple-500/30' : 'border-gray-300'} shadow-2xl overflow-hidden ${isDark ? 'hover:border-pink-500/50' : 'hover:border-purple-400'} transition-all duration-300 ${isDark ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-300/30'} group`}>
        <div className={`bg-gradient-to-r ${isDark ? 'from-purple-600/20 to-pink-600/20' : 'from-purple-100 to-pink-100'} px-4 sm:px-6 py-3 sm:py-4 border-b ${isDark ? 'border-purple-500/30' : 'border-gray-300'}`}>
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            SVG Input
          </h2>
        </div>
        <div className="p-3 sm:p-6">
          <textarea
            value={svgInput}
            onChange={onInputChange}
            placeholder="Paste your SVG code here..."
            className={`w-full h-[400px] sm:h-[500px] p-3 sm:p-4 backdrop-blur-sm ${isDark ? 'bg-gray-900/50 text-purple-100 placeholder-purple-400/50 border-purple-500/20' : 'bg-white/80 text-gray-900 placeholder-gray-500 border-gray-300'} border rounded-lg font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-pink-500/50 focus:border-pink-500/50' : 'focus:ring-purple-400 focus:border-purple-400'} resize-none transition-all`}
          />
        </div>
      </div>

      {/* SVG Preview Section */}
      {showPreview && svgInput && (
        <div className={`backdrop-blur-xl ${isDark ? 'bg-indigo-900/20' : 'bg-white/60'} rounded-2xl border ${isDark ? 'border-indigo-500/30' : 'border-gray-300'} shadow-2xl overflow-hidden ${isDark ? 'hover:border-purple-500/50' : 'hover:border-purple-400'} transition-all duration-300 ${isDark ? 'hover:shadow-indigo-500/20' : 'hover:shadow-purple-300/30'} group animate-slide-in`}>
          <div className={`bg-gradient-to-r ${isDark ? 'from-indigo-600/20 to-purple-600/20' : 'from-indigo-100 to-purple-100'} px-4 sm:px-6 py-3 sm:py-4 border-b ${isDark ? 'border-indigo-500/30' : 'border-gray-300'}`}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                SVG Preview
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewBg('white')}
                  className={`w-6 h-6 rounded border-2 ${previewBg === 'white' ? 'border-purple-500 ring-2 ring-purple-300' : isDark ? 'border-gray-600' : 'border-gray-400'} bg-white transition-all hover:scale-110 cursor-pointer`}
                  title="White background"
                />
                <button
                  onClick={() => setPreviewBg('black')}
                  className={`w-6 h-6 rounded border-2 ${previewBg === 'black' ? 'border-purple-500 ring-2 ring-purple-300' : isDark ? 'border-gray-600' : 'border-gray-400'} bg-gray-900 transition-all hover:scale-110 cursor-pointer`}
                  title="Black background"
                />
                <button
                  onClick={() => setPreviewBg('gray')}
                  className={`w-6 h-6 rounded border-2 ${previewBg === 'gray' ? 'border-purple-500 ring-2 ring-purple-300' : isDark ? 'border-gray-600' : 'border-gray-400'} bg-gray-400 transition-all hover:scale-110 cursor-pointer`}
                  title="Gray background"
                />
                <button
                  onClick={() => setPreviewBg('checkerboard')}
                  className={`w-6 h-6 rounded border-2 ${previewBg === 'checkerboard' ? 'border-purple-500 ring-2 ring-purple-300' : isDark ? 'border-gray-600' : 'border-gray-400'} bg-checkerboard transition-all hover:scale-110 cursor-pointer`}
                  title="Transparent (checkerboard)"
                />
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 flex items-center justify-center h-[440px] sm:h-[564px]">
            <div className={`relative w-full h-full flex items-center justify-center p-4 ${getBackgroundClass()} rounded-lg border ${isDark ? 'border-white/10' : 'border-gray-300'} overflow-auto transition-all duration-300`}>
              <div 
                className="max-w-full max-h-full flex items-center justify-center svg-preview-container"
                dangerouslySetInnerHTML={{ __html: svgInput }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Output Section */}
      <div className={`backdrop-blur-xl ${isDark ? 'bg-blue-900/20' : 'bg-white/60'} rounded-2xl border ${isDark ? 'border-blue-500/30' : 'border-gray-300'} shadow-2xl overflow-hidden ${isDark ? 'hover:border-cyan-500/50' : 'hover:border-purple-400'} transition-all duration-300 ${isDark ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-300/30'} group`}>
        <div className={`bg-gradient-to-r ${isDark ? 'from-blue-600/20 to-cyan-600/20' : 'from-blue-100 to-cyan-100'} px-4 sm:px-6 py-3 sm:py-4 border-b ${isDark ? 'border-blue-500/30' : 'border-gray-300'} flex items-center justify-between`}>
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            JSX Output
          </h2>
        </div>
        <div className="p-3 sm:p-6 overflow-auto h-[440px] sm:h-[564px]">
          {jsxOutput ? (
            <SyntaxHighlighter
              language="jsx"
              style={isDark ? vscDarkPlus : vs}
              customStyle={{
                margin: 0,
                padding: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.875rem',
              }}
              showLineNumbers={true}
            >
              {jsxOutput}
            </SyntaxHighlighter>
          ) : (
            <div className={`flex items-center justify-center h-full ${isDark ? 'text-purple-400' : 'text-gray-500'}`}>
              <div className="text-center animate-pulse">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>JSX output will appear here...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
