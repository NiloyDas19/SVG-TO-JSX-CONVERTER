import { useState, useEffect } from 'react';

function ConversionAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12 overflow-hidden">
      <div className="relative bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 sm:p-12">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-pulse"></div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* SVG Code Block */}
          <div className={`transition-all duration-700 ${step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-purple-400 font-mono">input.svg</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-blue-400">&lt;svg</div>
                  <div className="text-purple-300 pl-4">width=<span className="text-green-400">"24"</span></div>
                  <div className="text-purple-300 pl-4">class=<span className="text-green-400">"icon"</span></div>
                  <div className="text-blue-400">&gt;</div>
                  <div className="text-gray-500 pl-4">...</div>
                  <div className="text-blue-400">&lt;/svg&gt;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Arrow/Process */}
          <div className="flex flex-col items-center justify-center py-6 lg:py-0">
            <div className="relative">
              {/* Rotating Gear */}
              <div className={`w-16 h-16 mb-4 transition-transform duration-1000 ${step === 1 ? 'rotate-180 scale-110' : 'rotate-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Animated Particles */}
              <div className="flex gap-1 justify-center">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      step === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* JSX Output Block */}
          <div className={`transition-all duration-700 delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-blue-400 font-mono">Icon.jsx</span>
                  <div className="ml-auto">
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] text-green-400 font-semibold">Ready</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-pink-400">const <span className="text-purple-300">Icon</span> = (</div>
                  <div className="text-blue-400 pl-4">&lt;svg</div>
                  <div className="text-purple-300 pl-8">width=<span className="text-yellow-400">{'{24}'}</span></div>
                  <div className="text-purple-300 pl-8">className=<span className="text-green-400">"icon"</span></div>
                  <div className="text-blue-400 pl-4">&gt;</div>
                  <div className="text-gray-500 pl-8">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                step >= i ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500' : 'w-1.5 bg-purple-500/30'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConversionAnimation;
