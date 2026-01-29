import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';

// =============================================================================
// ANIMATED CARD COMPONENT
// =============================================================================

type CardState = 'neutral' | 'hypar' | 'zikar';

const AnimatedCard = () => {
    const [state, setState] = useState<CardState>('neutral');

    useEffect(() => {
        const interval = setInterval(() => {
            setState((current) => {
                if (current === 'neutral') return 'hypar';
                if (current === 'hypar') return 'zikar';
                return 'neutral';
            });
        }, 2000); // Muda a cada 2 segundos

        return () => clearInterval(interval);
    }, []);

    // Define transformação e label baseado no estado
    const getTransform = () => {
        if (state === 'hypar') return 'translateX(30px) rotate(8deg)';
        if (state === 'zikar') return 'translateX(-30px) rotate(-8deg)';
        return 'translateX(0) rotate(0deg)';
    };

    const showHypar = state === 'hypar';
    const showZikar = state === 'zikar';

    return (
        <div className="relative w-full max-w-[280px] h-[400px] mx-auto">
            {/* Main Card */}
            <div
                className="relative w-full h-full transition-all duration-500 ease-out"
                style={{ transform: getTransform() }}
            >
                <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 rounded-3xl shadow-2xl border-2 border-white/30 overflow-hidden">
                    {/* Glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />

                    {/* Card Content */}
                    <div className="h-full flex flex-col justify-between p-4 relative z-10">
                        {/* Top Badge */}
                        <div className="flex items-center justify-between">
                            <div className="px-3 py-1.5 bg-white/20 text-white rounded-lg text-xs font-bold border border-white/30 backdrop-blur-sm">
                                BBB 26
                            </div>
                            <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center text-sm border border-purple-400/30">
                                🤖
                            </div>
                        </div>

                        {/* Center - Participant Photo */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-center">
                                {/* Silhueta circular como foto */}
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 border-4 border-white/30 flex items-center justify-center shadow-2xl">
                                    <div className="text-6xl text-white/80">👤</div>
                                </div>
                                <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-2 border border-white/30">
                                    <div className="text-white text-lg font-black">Participante</div>
                                    <div className="text-white/70 text-sm">BBB 26</div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom - AI Analysis */}
                        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                            <div className="text-white/70 text-xs mb-1">🤖 Análise IA</div>
                            <div className="text-white text-sm font-semibold">Repercussão média</div>
                        </div>
                    </div>

                    {/* HYPAR Label */}
                    {showHypar && (
                        <div className="absolute top-10 left-8 z-20 pointer-events-none transform -rotate-12 animate-pulse">
                            <div className="border-4 border-green-500 text-green-500 font-black text-2xl px-6 py-3 rounded-xl bg-black/60 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.9)]">
                                HYPAR
                            </div>
                        </div>
                    )}

                    {/* ZIK4R Label */}
                    {showZikar && (
                        <div className="absolute top-10 right-8 z-20 pointer-events-none transform rotate-12 animate-pulse">
                            <div className="border-4 border-purple-500 text-purple-500 font-black text-2xl px-6 py-3 rounded-xl bg-black/60 backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.9)]">
                                ZIK4R
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Swipe Hint Arrows */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-purple-400 opacity-50 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-4xl animate-pulse">←</div>
                    <div className="text-xs font-bold text-center">ZIK4R<br />vai furar</div>
                </div>
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-green-400 opacity-50 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-4xl animate-pulse">→</div>
                    <div className="text-xs font-bold text-center">HYPAR<br />vai bombar</div>
                </div>
            </div>
        </div>
    );
};

// =============================================================================
// MAIN HERO COMPONENT
// =============================================================================

const Hero = () => {
    return (
        <section
            className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden z-10 pt-20 pb-12 px-4"
            aria-label="Hero section"
        >
            {/* Decorative glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                {/* Left Side - Text Content */}
                <div className="text-center lg:text-left z-20">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 backdrop-blur-md fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-green-500">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                        </span>
                        <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1">
                            <Sparkles size={14} className="text-yellow-400" aria-hidden="true" />
                            BBB 26 • AO VIVO
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1] fade-in-up delay-100">
                        <span className="text-white block mb-2">Deslize Cards.</span>
                        <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                            Vote no Hype.
                        </span>
                        <span className="text-white block mb-2">Suba no Ranking.</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed fade-in-up delay-200">
                        O jogo do <span className="text-purple-400 font-semibold">BBB 26</span>.<br />
                        IA analisa participantes em tempo real.<br />
                        Você desliza para direita para <span className="text-green-400 font-semibold">HYPAR</span> ou esquerda para <span className="text-purple-400 font-semibold">ZIK4R</span>
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 fade-in-up delay-300">
                        <a
                            href="https://app.hyperama.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/50 active:scale-[0.98] min-h-[48px]"
                        >
                            <Flame className="w-5 h-5" />
                            <span>Jogar Agora</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#como-jogar"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20 hover:border-white/40 backdrop-blur-md min-h-[48px]"
                        >
                            Como Funciona
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm fade-in-up delay-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-gray-400">Online agora</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold">3000+</span>
                            <span className="text-gray-400">jogadores online</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Card Demo */}
                <div className="relative z-10 flex items-center justify-center fade-in-scale delay-400">
                    <AnimatedCard />
                </div>
            </div>
        </section>
    );
};

export default Hero;
