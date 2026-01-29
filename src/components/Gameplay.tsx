import { useState, useEffect, useRef } from 'react';
import { Trophy, Zap, House } from 'lucide-react';

// Hook para detectar viewport mobile
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const screens = [
    {
        id: "swipe",
        title: "Jogo de Swipe",
        desc: "Deslize cards dos participantes. DIREITA para HYPAR (vai bombar), ESQUERDA para ZIK4R (vai furar). Simples assim!",
        color: "from-orange-500 to-yellow-500",
        icon: <img src="/icon.svg" alt="Hyperama" width={24} height={24} className="object-contain" />,
        navIcon: <Zap size={24} />,
        mockContent: (
            <div className="p-3 flex flex-col items-center justify-center h-full fade-in-scale relative overflow-visible">
                {/* Swipe Card Stack with Motion Effect */}
                <div className="relative w-full max-w-[200px] h-[280px]">
                    {/* Third Card - Far back */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-15 scale-85 -translate-y-4 blur-[2px]">
                        <div className="h-full flex items-center justify-center">
                            <div className="text-4xl opacity-50">💎</div>
                        </div>
                    </div>

                    {/* Second Card - Behind, slight left position */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg border-2 border-white/10 overflow-hidden scale-92 -translate-y-2 -translate-x-1 -rotate-2 opacity-50">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20" />
                        <div className="h-full flex items-center justify-center">
                            <div className="text-5xl">⭐</div>
                        </div>
                    </div>

                    {/* Main Card - Tilted right with swipe effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-2xl border-2 border-white/30 overflow-hidden transform translate-x-4 rotate-8 transition-transform animate-swipe-card">
                        {/* Glass effect */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent" />

                        {/* Card Content */}
                        <div className="h-full flex flex-col justify-between p-3 relative z-10">
                            {/* Top Badge */}
                            <div className="flex items-center justify-between">
                                <div className="px-2 py-1 bg-green-500/30 text-green-300 rounded-lg text-[8px] font-bold border border-green-400/50">
                                    🔥 HOT
                                </div>
                                <div className="w-6 h-6 bg-purple-500/30 rounded-lg flex items-center justify-center text-xs">
                                    🤖
                                </div>
                            </div>

                            {/* Center - Participant */}
                            <div className="flex-1 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-2 drop-shadow-lg">🔥</div>
                                    <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                                        <div className="text-white text-[10px] font-bold">Participante</div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom - AI Analysis */}
                            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                                <div className="text-white/70 text-[7px]">IA: Alta repercussão</div>
                                <div className="text-white text-[9px] font-semibold">📈 78% positivo</div>
                            </div>
                        </div>

                        {/* HYPAR Label (visible on the tilted card) */}
                        <div className="absolute top-8 left-6 z-20 pointer-events-none transform -rotate-8">
                            <div className="border-[3px] border-green-500 text-green-500 font-black text-base px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.9)]">
                                HYPAR
                            </div>
                        </div>
                    </div>

                    {/* Motion Trail Effect 1 - Multiple ghosts for blur */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl opacity-8 scale-[0.98] translate-x-2 rotate-5 blur-[3px] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl opacity-5 scale-[0.96] translate-x-1 rotate-3 blur-[4px] pointer-events-none" />

                    {/* Curved Arrow for direction */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-purple-400/30 text-xl opacity-60">
                        ←
                    </div>
                    <div className="absolute -right-10 top-1/2 -translate-y-1/2">
                        <div className="flex flex-col items-center">
                            <div className="text-green-400 text-2xl font-black animate-pulse">→</div>
                            <div className="text-green-400/60 text-[8px] font-bold mt-1">SWIPE</div>
                        </div>
                    </div>
                </div>

                {/* Swipe Instructions */}
                <div className="mt-4 flex items-center gap-3 text-[9px]">
                    <div className="text-purple-400/50 flex items-center gap-1">
                        <span>←</span>
                        <span>ZIK4R</span>
                    </div>
                    <div className="text-gray-600">•</div>
                    <div className="text-green-400 flex items-center gap-1 font-bold">
                        <span>HYPAR</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "feed",
        title: "Feed BBB 26",
        desc: "IA monitora redes sociais em tempo real. Notícias, tweets e posts sobre os participantes - tudo com análise de sentimento.",
        color: "from-purple-600 to-indigo-600",
        icon: <img src="/icon.svg" alt="Hyperama" width={24} height={24} className="object-contain" />,
        navIcon: <House size={24} />,
        mockContent: (
            <div className="space-y-2 p-2 relative overflow-visible">
                {/* News Post 1 */}
                <div className="bg-gray-900/80 rounded-xl border border-white/10 p-2 fade-in-up">
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-pink-500 text-white text-[7px] font-bold mb-1.5">🎀 FOFOCA</span>
                    <div className="text-white/90 text-[8px] leading-relaxed mb-2">
                        Participante comenta sobre brother, gerando polêmica nas redes.
                    </div>
                    <div className="bg-[#15202b] rounded-lg p-2 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold">X</div>
                            <span className="text-white text-[8px] font-bold">Twitter</span>
                        </div>
                        <div className="text-white/80 text-[7px]">"Nossa, não acredito que ele disse isso! 😱"</div>
                    </div>
                </div>

                {/* News Post 2 */}
                <div className="bg-gray-900/80 rounded-xl border border-white/10 p-2 fade-in-up delay-100">
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-green-500 text-white text-[7px] font-bold mb-1.5">📺 ESTRATÉGIA</span>
                    <div className="text-white/90 text-[8px] leading-relaxed">
                        Líder define imunidade e casa fica agitada.
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "ranking",
        title: "Top Hypers",
        desc: "Acertou a previsão? Suba de nível e entre para o Top Hypers. Compita com fãs do BBB 26 de todo Brasil!",
        color: "from-yellow-500 to-orange-600",
        icon: <img src="/icon.svg" alt="Hyperama" width={24} height={24} className="object-contain" />,
        navIcon: <Trophy size={24} />,
        mockContent: (
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-3 rounded-xl border border-yellow-500/30 fade-in-up">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black text-sm">1</div>
                        <div>
                            <div className="font-bold text-white text-sm flex items-center gap-1">Você 👑</div>
                            <div className="text-xs text-yellow-400">Lv 5 • Top Hyper</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-mono font-bold text-yellow-400 text-sm">12.450</div>
                        <div className="text-xs text-green-400">+320 hoje</div>
                    </div>
                </div>
                {[2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between bg-white/5 p-2 rounded-xl fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">{i}</div>
                            <div className="text-white/70 text-sm">Player {i}</div>
                        </div>
                        <div className="text-white/50 text-sm font-mono">{12000 - i * 1000}</div>
                    </div>
                ))}
            </div>
        )
    }
];

// ============================================================================
// PHONE MOCKUP COMPONENT
// ============================================================================

interface PhoneMockupProps {
    activeScreen: number;
}

const PhoneMockup = ({ activeScreen }: PhoneMockupProps) => (
    <div className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] bg-black border-[5px] sm:border-[6px] border-gray-700 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden fade-in-scale">
        {/* Glass Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent rounded-t-[2.5rem] pointer-events-none z-40" />

        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-700" />
            <div className="w-8 h-3 rounded-full bg-gray-800" />
        </div>

        {/* Screen */}
        <div className="h-full w-full bg-gray-900 flex flex-col">
            {/* App Header */}
            <div className={`h-20 pt-8 bg-gradient-to-r ${screens[activeScreen].color} px-4 flex items-end pb-2 justify-between transition-all duration-500`}>
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    {screens[activeScreen].icon}
                    <span>Hyperama</span>
                </div>
            </div>

            {/* App Content */}
            <div className="flex-1 overflow-hidden">
                <div key={activeScreen} className="h-full">
                    {screens[activeScreen].mockContent}
                </div>
            </div>

            {/* App Nav */}
            <div className="h-16 bg-black/60 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-4 pb-2">
                {screens.map((s, idx) => (
                    <div
                        key={idx}
                        className={`p-2 rounded-xl transition-all duration-300 ${idx === activeScreen ? 'bg-white/20 text-white scale-110 -translate-y-0.5' : 'text-gray-600'}`}
                    >
                        {s.navIcon}
                    </div>
                ))}
            </div>

            {/* Home Indicator */}
            <div className="h-6 flex items-center justify-center">
                <div className="w-28 h-1 bg-white/30 rounded-full" />
            </div>
        </div>
    </div>
);

// ============================================================================
// MOBILE VERSION - Tab-based with labels and swipe gesture
// ============================================================================

const GameplayMobile = () => {
    const [activeScreen, setActiveScreen] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeScreen < screens.length - 1) {
            setActiveScreen(prev => prev + 1);
        }
        if (isRightSwipe && activeScreen > 0) {
            setActiveScreen(prev => prev - 1);
        }
    };

    // Short labels for tabs
    const tabLabels = ['Jogar', 'Feed', 'Ranking'];

    return (
        <section id="gameplay" className="relative z-10 bg-black py-16 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-6 fade-in-up">
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold mb-4">
                        📱 GAMEPLAY
                    </span>
                    <h2 className="text-3xl font-black text-white">
                        Veja como funciona
                    </h2>
                </div>

                {/* Tab Buttons with Labels */}
                <div className="flex gap-2 mb-4 justify-center">
                    {screens.map((screen, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveScreen(idx)}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 flex flex-col items-center gap-1 min-w-[70px] ${idx === activeScreen
                                ? `bg-gradient-to-r ${screen.color} text-white shadow-lg shadow-purple-500/20`
                                : 'bg-white/10 text-white/60'
                                }`}
                        >
                            <span className="text-lg">{screen.navIcon}</span>
                            <span>{tabLabels[idx]}</span>
                        </button>
                    ))}
                </div>

                {/* Phone Mockup with Navigation Arrows */}
                <div
                    className="flex justify-center items-center mb-6 gap-2 sm:gap-4"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Left Arrow */}
                    <button
                        onClick={() => activeScreen > 0 && setActiveScreen(prev => prev - 1)}
                        className={`text-4xl sm:text-5xl transition-all duration-300 p-2 ${activeScreen > 0
                            ? 'text-purple-400 hover:text-purple-300 hover:scale-110 active:scale-95 arrow-bounce-left'
                            : 'text-gray-700 cursor-not-allowed'
                            }`}
                        disabled={activeScreen === 0}
                        aria-label="Tela anterior"
                    >
                        ‹
                    </button>

                    {/* Phone Mockup */}
                    <div className="relative scale-[0.70] sm:scale-[0.80] md:scale-[0.85]">
                        <PhoneMockup activeScreen={activeScreen} />
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] bg-gradient-to-tr ${screens[activeScreen].color} opacity-30 blur-[80px] -z-10 transition-all duration-700`} />
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => activeScreen < screens.length - 1 && setActiveScreen(prev => prev + 1)}
                        className={`text-4xl sm:text-5xl transition-all duration-300 p-2 ${activeScreen < screens.length - 1
                            ? 'text-purple-400 hover:text-purple-300 hover:scale-110 active:scale-95 arrow-bounce-right'
                            : 'text-gray-700 cursor-not-allowed'
                            }`}
                        disabled={activeScreen === screens.length - 1}
                        aria-label="Próxima tela"
                    >
                        ›
                    </button>
                </div>

                {/* Content */}
                <div key={activeScreen} className="text-center fade-in-up">
                    <h3 className="text-2xl font-black text-white mb-2">
                        {screens[activeScreen].title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed px-4">
                        {screens[activeScreen].desc}
                    </p>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-3 mt-6 justify-center">
                    {screens.map((screen, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveScreen(idx)}
                            aria-label={`Ir para ${tabLabels[idx]}`}
                            className={`h-3 rounded-full bg-gradient-to-r ${screen.color} transition-all duration-300 ${idx === activeScreen ? 'w-10 opacity-100' : 'w-3 opacity-30'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============================================================================
// DESKTOP VERSION - Scroll-based with Intersection Observer (optimized)
// ============================================================================

const GameplayDesktop = () => {
    const [activeScreen, setActiveScreen] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Use Intersection Observer instead of Framer Motion useScroll
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionRefs.current.forEach((ref, idx) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveScreen(idx);
                        }
                    });
                },
                {
                    threshold: 0.5, // Trigger when 50% visible
                    rootMargin: '-20% 0px -20% 0px'
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    return (
        <section id="gameplay" className="relative z-10 bg-black">
            {/* Sticky Phone Container */}
            <div className="sticky top-0 z-20 h-screen flex items-center pointer-events-none">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-row items-center gap-16">
                    {/* Phone Mockup - Fixed position while scrolling */}
                    <div className="relative flex-shrink-0 pointer-events-auto">
                        <PhoneMockup activeScreen={activeScreen} />
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[650px] bg-gradient-to-tr ${screens[activeScreen].color} opacity-30 blur-[100px] -z-10 transition-all duration-700`} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-left pointer-events-auto">
                        <div key={activeScreen} className="fade-in-up">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
                                {activeScreen + 1} / 3
                            </span>
                            <h3 className="text-5xl font-black text-white mb-4">
                                {screens[activeScreen].title}
                            </h3>
                            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                                {screens[activeScreen].desc}
                            </p>
                        </div>

                        {/* Progress Dots */}
                        <div className="flex gap-3 mt-8">
                            {screens.map((screen, idx) => (
                                <div
                                    key={idx}
                                    className={`h-3 rounded-full bg-gradient-to-r ${screen.color} transition-all duration-300 ${idx === activeScreen ? 'w-10 opacity-100' : 'w-3 opacity-30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Sections - These trigger the screen changes */}
            <div className="relative" style={{ marginTop: '-100vh' }}>
                {screens.map((screen, idx) => (
                    <div
                        key={idx}
                        ref={(el) => { sectionRefs.current[idx] = el; }}
                        className="h-screen flex items-center justify-center"
                        aria-label={`Section ${idx + 1}: ${screen.title}`}
                    >
                        {/* Invisible scroll trigger zones */}
                    </div>
                ))}
            </div>
        </section>
    );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const Gameplay = () => {
    const isMobile = useIsMobile();
    return isMobile ? <GameplayMobile /> : <GameplayDesktop />;
};

export default Gameplay;
