import { useTheme } from '../context/ThemeContext';

function FileUpload({ onFileUpload }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="mb-10 animate-fade-in-up">
      <div className="max-w-2xl mx-auto">
        <label className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed ${isDark ? 'border-purple-500/40 hover:border-purple-400/60 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 hover:bg-purple-500/10' : 'border-purple-400/60 hover:border-purple-500/80 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 hover:bg-purple-500/15'} rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-md group overflow-hidden animate-pulse-border`}>
          {/* Animated gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8">
            {/* Upload Icon with Animation */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
              <div className={`relative w-16 h-16 bg-gradient-to-br ${isDark ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30' : 'from-purple-600/30 to-pink-600/30 border-purple-500/50'} rounded-2xl flex items-center justify-center border group-hover:border-pink-500/50 transition-all group-hover:scale-110 group-hover:rotate-6 duration-300`}>
                <svg className={`w-8 h-8 ${isDark ? 'text-purple-400 group-hover:text-pink-400' : 'text-purple-600 group-hover:text-pink-600'} transition-colors group-hover:-translate-y-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-center space-y-2">
              <p className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all`}>
                Drop your SVG file here
              </p>
              <p className={`text-sm ${isDark ? 'text-purple-300/80' : 'text-gray-700'}`}>
                or <span className={`${isDark ? 'text-purple-400' : 'text-purple-700'} font-semibold underline underline-offset-2 group-hover:text-pink-400 transition-colors`}>browse files</span>
              </p>
              <div className={`flex items-center justify-center gap-4 pt-3 text-xs ${isDark ? 'text-purple-400/70' : 'text-gray-600'}`}>
                <span className="flex items-center gap-1 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  .svg files supported
                </span>
                <span className="flex items-center gap-1 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Instant conversion
                </span>
              </div>
            </div>
          </div>
          
          <input type="file" className="hidden" accept=".svg" onChange={onFileUpload} />
        </label>
        
        {/* Helper Text */}
        <p className={`mt-4 text-center text-sm ${isDark ? 'text-purple-300/60' : 'text-gray-600'} animate-fade-in`}>
          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your files are processed locally in your browser. We don't store any data.
        </p>
      </div>
    </div>
  );
}

export default FileUpload;
