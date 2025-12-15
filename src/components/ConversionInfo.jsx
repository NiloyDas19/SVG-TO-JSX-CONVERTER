import { useTheme } from '../context/ThemeContext';

function ConversionInfo() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`mt-8 backdrop-blur-xl ${isDark ? 'bg-purple-900/20' : 'bg-white/60'} rounded-2xl border ${isDark ? 'border-purple-500/30' : 'border-gray-300'} shadow-2xl p-4 sm:p-6 ${isDark ? 'hover:border-pink-500/50' : 'hover:border-purple-400'} transition-all duration-300 animate-fade-in-up`}>
      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 flex items-center gap-2`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Conversions Applied:
      </h3>
      <ul className={`grid sm:grid-cols-2 gap-3 ${isDark ? 'text-purple-200' : 'text-gray-700'} text-xs sm:text-sm`}>
        <li className={`flex items-start gap-2 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          <span className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>✓</span>
          <span>
            <code className={`${isDark ? 'bg-gray-900/50 text-pink-300 border-purple-500/30' : 'bg-gray-100 text-purple-700 border-gray-300'} px-2 py-1 rounded border`}>class</code>
            {' → '}
            <code className={`${isDark ? 'bg-gray-900/50 text-pink-300 border-purple-500/30' : 'bg-gray-100 text-purple-700 border-gray-300'} px-2 py-1 rounded border`}>className</code>
          </span>
        </li>
        <li className={`flex items-start gap-2 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          <span className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>✓</span>
          <span>Kebab-case → camelCase attributes</span>
        </li>
        <li className={`flex items-start gap-2 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          <span className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>✓</span>
          <span>Style strings → Style objects</span>
        </li>
        <li className={`flex items-start gap-2 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          <span className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>✓</span>
          <span>Numeric values in curly braces</span>
        </li>
        <li className={`flex items-start gap-2 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          <span className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>✓</span>
          <span>Full React component wrapper</span>
        </li>
        <li className={`flex items-start gap-2 ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}>
          <span className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} mt-1`}>✓</span>
          <span>Props spread support included</span>
        </li>
      </ul>
    </div>
  );
}

export default ConversionInfo;
