import { useTheme } from '../context/ThemeContext';

function FeatureCards() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const features = [
    {
      front: {
        icon: (
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "Lightning Fast",
        subtitle: "Instant conversion",
        gradient: "from-purple-600/20 to-pink-600/20",
        iconGradient: "from-purple-500 to-pink-500",
        shadowColor: "shadow-purple-500/20"
      },
      back: {
        text: "Convert your SVG files to JSX components in milliseconds. No waiting, no delays - just pure speed and efficiency for your development workflow.",
        gradient: "from-pink-600/20 to-purple-600/20",
        shadowColor: "shadow-pink-500/20"
      }
    },
    {
      front: {
        icon: (
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "100% Accurate",
        subtitle: "Perfect conversions",
        gradient: "from-blue-600/20 to-cyan-600/20",
        iconGradient: "from-blue-500 to-cyan-500",
        shadowColor: "shadow-blue-500/20"
      },
      back: {
        text: "Handles all SVG attributes correctly - from complex paths to style objects. Every conversion is React-ready with proper JSX syntax and naming conventions.",
        gradient: "from-cyan-600/20 to-blue-600/20",
        shadowColor: "shadow-cyan-500/20"
      }
    },
    {
      front: {
        icon: (
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        ),
        title: "File Upload",
        subtitle: "Drag & drop support",
        gradient: "from-emerald-600/20 to-teal-600/20",
        iconGradient: "from-emerald-500 to-teal-500",
        shadowColor: "shadow-emerald-500/20"
      },
      back: {
        text: "Upload SVG files directly or paste code. File names automatically become component names, saving you time and keeping your codebase organized.",
        gradient: "from-teal-600/20 to-emerald-600/20",
        shadowColor: "shadow-teal-500/20"
      }
    }
  ];

  return (
    <div className="mt-12 sm:mt-16 mb-12">
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${isDark ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent' : 'text-gray-900'} animate-fade-in`}>
        Why Choose Our Converter?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flip-card h-64 sm:h-72 animate-fade-in-up" 
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="flip-card-inner">
              <div className={`flip-card-front backdrop-blur-xl bg-gradient-to-br ${isDark ? feature.front.gradient : 'from-white to-gray-50'} rounded-2xl border ${isDark ? 'border-purple-500/30' : 'border-gray-300'} p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg ${isDark ? feature.front.shadowColor : 'shadow-gray-300/50'}`}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.front.iconGradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg ${isDark ? 'shadow-purple-500/50' : 'shadow-gray-400/50'}`}>
                  {feature.front.icon}
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{feature.front.title}</h3>
                <p className={`${isDark ? 'text-purple-200' : 'text-gray-700'} text-sm`}>{feature.front.subtitle}</p>
              </div>
              <div className={`flip-card-back backdrop-blur-xl bg-gradient-to-br ${isDark ? feature.back.gradient : 'from-purple-50 to-pink-50'} rounded-2xl border ${isDark ? 'border-pink-500/30' : 'border-gray-300'} p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg ${isDark ? feature.back.shadowColor : 'shadow-gray-300/50'}`}>
                <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm sm:text-base leading-relaxed`}>{feature.back.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;
