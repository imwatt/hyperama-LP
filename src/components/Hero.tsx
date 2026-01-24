import { useRef, useState, useEffect } from 'react';
import { Zap, Sparkles, Flame } from 'lucide-react';

// =============================================================================
// HYPE TOAST COMPONENT - Shows when scroll triggers hype peak
// =============================================================================

const HypeToast = ({ show }: { show: boolean }) => {
    if (!show) return null;

    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] pointer-events-none hype-toast-animate">
            <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-3xl p-6 shadow-[0_0_60px_rgba(251,191,36,0.5)] pulse-scale">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center shake-rotate">
                        <Flame className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <div>
                        <div className="text-2xl font-black text-white">HYPADO! 🔥</div>
                        <div className="text-white/80 text-sm flex items-center gap-1">
                            <Zap size={14} aria-hidden="true" />
                            <span>-10 energia</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// =============================================================================
// HERO CARD COMPONENT - With progressive button scale
// =============================================================================

interface HeroCardProps {
    hypeProgress: number; // 0 to 1, controls button expansion
    showHypePeak: boolean; // true at peak for toast
}

const HeroCard = ({ hypeProgress, showHypePeak }: HeroCardProps) => {
    // Button scale: starts at 1, grows to 1.3 at peak
    const buttonScale = 1 + (hypeProgress * 0.3);
    // Glow intensity: 0 to 60px blur
    const glowIntensity = Math.floor(hypeProgress * 60);
    // Emoji rotation based on progress
    const emojiRotation = hypeProgress * 15;

    return (
        <div className={`relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl hero-card-animate ${showHypePeak ? 'hype-active' : ''}`}>
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[2rem] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 ring-2 ring-white/10 flex items-center justify-center text-xl">
                    <span role="img" aria-label="fire">🔥</span>
                </div>
                <div className="flex-1">
                    <div className="text-white font-bold">Participante BBB 26</div>
                    <div className="text-gray-400 text-sm flex items-center gap-1">
                        <Zap size={12} className="text-yellow-400" aria-hidden="true" />
                        IA detectou: Alta repercussão
                    </div>
                </div>
                <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold border border-green-500/30">
                    🔥 HOT
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative">
                    {/* HYPAR Button with progressive scale */}
                    <button
                        className="w-full bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-xl flex flex-col items-center transition-shadow"
                        style={{
                            transform: `scale(${buttonScale})`,
                            boxShadow: hypeProgress > 0
                                ? `0 0 ${glowIntensity}px rgba(251, 191, 36, ${0.3 + hypeProgress * 0.4})`
                                : '0 4px 14px rgba(234, 88, 12, 0.3)',
                            zIndex: hypeProgress > 0.1 ? 10 : 1
                        }}
                        aria-label="Hypar - Apostar que vai bombar"
                    >
                        <span
                            className="text-2xl mb-1"
                            style={{ transform: `rotate(${emojiRotation}deg) scale(${1 + hypeProgress * 0.3})` }}
                            role="img"
                            aria-label="fire"
                        >
                            🔥
                        </span>
                        <span className="text-white font-black">HYPAR</span>
                        <span className="text-white/70 text-xs">Vai bombar!</span>
                    </button>

                    {/* Pulse ring at peak */}
                    {showHypePeak && (
                        <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-xl pointer-events-none pulse-ring" style={{ transform: `scale(${buttonScale})` }} />
                    )}
                </div>

                <button
                    className="bg-gradient-to-br from-purple-600 to-violet-700 p-4 rounded-xl flex flex-col items-center shadow-lg shadow-purple-500/30 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] transition-transform"
                    aria-label="ZiKAR - Apostar que vai furar"
                >
                    <span className="text-2xl mb-1" role="img" aria-label="skull">💀</span>
                    <span className="text-white font-black">ZiKAR</span>
                    <span className="text-white/70 text-xs">Vai furar!</span>
                </button>
            </div>

            {/* AI Analysis */}
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-lg">
                    <span role="img" aria-label="robot">🤖</span>
                </div>
                <div className="flex-1">
                    <div className="text-white/70 text-xs">Análise IA</div>
                    <div className="text-white text-sm font-medium">Em Alta 📈 78% positivo</div>
                </div>
            </div>

            {/* Scroll hint - fades out as hype builds */}
            <div className="mt-4 text-center fade-in-delayed" style={{ opacity: 1 - hypeProgress }}>
                <div className="text-gray-500 text-xs flex items-center justify-center gap-1 bounce-subtle">
                    <span aria-hidden="true">↓</span>
                    <span>Role para ver a mágica</span>
                </div>
            </div>
        </div>
    );
};

// =============================================================================
// MAIN HERO COMPONENT
// =============================================================================

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showHypePeak, setShowHypePeak] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Check if desktop (lg breakpoint = 1024px)
    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);
        return () => window.removeEventListener('resize', checkIsDesktop);
    }, []);

    // Optimized scroll detection - ONLY on desktop for performance
    useEffect(() => {
        // Skip scroll effects entirely on mobile for performance
        if (!isDesktop) {
            setScrollProgress(0);
            setShowHypePeak(false);
            return;
        }

        const heroElement = heroRef.current;
        if (!heroElement) return;

        const handleScroll = () => {
            const rect = heroElement.getBoundingClientRect();
            const heroHeight = heroElement.offsetHeight;

            // Calculate scroll progress (0 to 1) based on how much of hero has scrolled
            // Using 0.9 multiplier to make progress slower (more scroll needed to reach 100%)
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / (heroHeight * 0.9)));
            setScrollProgress(progress);

            // Show peak effect (toast) when reaching 25-70% scroll (much longer visible time)
            if (progress > 0.25 && progress < 0.70) {
                setShowHypePeak(true);
            } else {
                setShowHypePeak(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDesktop]);

    // Calculate hype progress (0-1): starts at 10% scroll, peaks at 40%
    // On mobile: always 0 (no effects)
    const hypeProgress = isDesktop ? (scrollProgress < 0.1 ? 0 : Math.min(1, (scrollProgress - 0.1) / 0.3)) : 0;

    // Parallax values - disabled on mobile (always 0)
    const textY = isDesktop ? scrollProgress * 150 : 0;
    const cardY = isDesktop ? scrollProgress * -90 : 0;
    const opacity = isDesktop ? Math.max(0, 1 - scrollProgress * 1.5) : 1;

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100dvh] lg:min-h-[130vh] flex items-center justify-center overflow-hidden z-10 pt-20 sm:pt-32 pb-12 sm:pb-24 px-4"
            aria-label="Hero section"
        >
            {/* Decorative glows - color shifts with hype progress */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl float-slow transition-all duration-300"
                    style={{
                        backgroundColor: `rgba(${168 + hypeProgress * 87}, ${85 - hypeProgress * 30}, ${247 - hypeProgress * 147}, 0.2)`,
                        transform: `scale(${1 + hypeProgress * 0.25})`
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl float-slow-delayed transition-all duration-300"
                    style={{
                        backgroundColor: `rgba(${236 + hypeProgress * 19}, ${72 + hypeProgress * 119}, ${153 - hypeProgress * 117}, 0.2)`,
                        transform: `scale(${1 + hypeProgress * 0.25})`
                    }}
                />
            </div>

            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full transition-opacity duration-300"
                style={{ opacity }}
            >
                {/* Left Side - Text Content with parallax */}
                <div
                    className="text-center lg:text-left z-20 pt-8 sm:pt-20"
                    style={{ transform: `translateY(${textY}px)` }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-md fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 pulse-dot" aria-hidden="true" />
                        <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1">
                            <Sparkles size={14} className="text-yellow-400" aria-hidden="true" />
                            BBB 26 • POWERED BY AI
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-8 leading-[0.9] fade-in-up delay-100">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                            HYPERAMA
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed px-2 sm:px-0 fade-in-up delay-200">
                        O <span className="text-purple-400 font-semibold">jogo do BBB 26</span>.
                        IA analisa os participantes. Você faz sua jogada.
                        <span className="text-pink-400 font-semibold"> Domine o ranking!</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up delay-300">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.hyperama"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                            style={{
                                boxShadow: showHypePeak
                                    ? '0 0 30px rgba(168,85,247,0.5)'
                                    : '0 4px 14px rgba(168, 85, 247, 0.3)',
                                transform: showHypePeak ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            <span>🔥</span>
                            <span>Jogar Agora</span>
                        </a>

                        <a
                            href="#gameplay"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20 hover:border-white/40 backdrop-blur-md min-h-[48px]"
                        >
                            Como Funciona
                        </a>
                    </div>
                </div>

                {/* Right Side - Card with parallax and progressive button */}
                <div
                    className="relative z-10 hidden lg:block fade-in-scale delay-400"
                    style={{ transform: `translateY(${cardY}px) rotate(${scrollProgress * 5}deg)` }}
                >
                    <HeroCard hypeProgress={hypeProgress} showHypePeak={showHypePeak} />

                    {/* Background Glows - intensity based on hype progress */}
                    <div
                        className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl blur-xl float-slow transition-all duration-300"
                        style={{
                            backgroundColor: `rgba(${168 + hypeProgress * 87}, ${85 + hypeProgress * 106}, ${247 - hypeProgress * 211}, 0.4)`,
                            transform: `scale(${1 + hypeProgress * 0.3})`
                        }}
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full blur-xl float-slow-delayed transition-all duration-300"
                        style={{
                            backgroundColor: `rgba(${236 + hypeProgress * 19}, ${72 + hypeProgress * 119}, ${153 - hypeProgress * 117}, 0.3)`,
                            transform: `scale(${1 + hypeProgress * 0.4})`
                        }}
                        aria-hidden="true"
                    />
                </div>
            </div>

            {/* HYPE Toast - Shows at peak */}
            <HypeToast show={showHypePeak} />
        </section>
    );
};

export default Hero;
