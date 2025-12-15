import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`relative backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-t ${isDark ? 'border-purple-500/30' : 'border-gray-200'} mt-16 shadow-lg ${isDark ? 'shadow-purple-500/10' : 'shadow-gray-200/50'} transition-all duration-300`}>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold mb-3 text-base sm:text-lg`}>About</h4>
            <p className={`${isDark ? 'text-purple-200' : 'text-gray-700'} text-xs sm:text-sm`}>
              A powerful tool to convert SVG markup into React-compatible JSX components with proper formatting and syntax highlighting.
            </p>
          </div>
          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold mb-3 text-base sm:text-lg`}>Features</h4>
            <ul className={`${isDark ? 'text-purple-200' : 'text-gray-700'} text-xs sm:text-sm space-y-2`}>
              <li>• Instant conversion</li>
              <li>• Syntax highlighting</li>
              <li>• Copy to clipboard</li>
              <li>• Dark mode interface</li>
            </ul>
          </div>
          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold mb-3 text-base sm:text-lg`}>Resources</h4>
            <ul className={`${isDark ? 'text-purple-200' : 'text-gray-700'} text-xs sm:text-sm space-y-2`}>
              <li>
                <a href="#" className={`${isDark ? 'hover:text-pink-400' : 'hover:text-purple-600'} transition-all hover:translate-x-1 inline-block cursor-pointer`}>Documentation</a>
              </li>
              <li>
                <a href="#" className={`${isDark ? 'hover:text-pink-400' : 'hover:text-purple-600'} transition-all hover:translate-x-1 inline-block cursor-pointer`}>GitHub</a>
              </li>
              <li>
                <a href="#" className={`${isDark ? 'hover:text-pink-400' : 'hover:text-purple-600'} transition-all hover:translate-x-1 inline-block cursor-pointer`}>Report Issue</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`border-t ${isDark ? 'border-purple-500/30' : 'border-gray-200'} mt-6 sm:mt-8 pt-4 sm:pt-6 text-center`}>
          <p className={`${isDark ? 'text-purple-200' : 'text-gray-700'} text-xs sm:text-sm`}>
            Made with <span className="text-pink-500 animate-pulse inline-block hover:scale-125 transition-transform">❤️</span> by developers, for developers • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
