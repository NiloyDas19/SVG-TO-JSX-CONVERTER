import { useTheme } from '../context/ThemeContext';

function BackgroundElements() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r ${isDark ? 'from-blue-500/20 to-cyan-500/20' : 'from-blue-400/10 to-cyan-400/10'} rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-r ${isDark ? 'from-purple-500/20 to-pink-500/20' : 'from-purple-400/10 to-pink-400/10'} rounded-full blur-3xl animate-float-delayed`}></div>
        <div className={`absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-r ${isDark ? 'from-indigo-500/20 to-purple-500/20' : 'from-indigo-400/10 to-purple-400/10'} rounded-full blur-3xl animate-float-slow`}></div>
        <div className={`absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-r ${isDark ? 'from-pink-500/20 to-rose-500/20' : 'from-pink-400/10 to-rose-400/10'} rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r ${isDark ? 'from-teal-500/20 to-emerald-500/20' : 'from-teal-400/10 to-emerald-400/10'} rounded-full blur-3xl animate-float-delayed`}></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-35" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-40" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className={`absolute inset-0 bg-grid-pattern ${isDark ? 'opacity-5' : 'opacity-3'} pointer-events-none`}></div>
      
      {/* Animated gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer"></div>
    </>
  );
}

export default BackgroundElements;
