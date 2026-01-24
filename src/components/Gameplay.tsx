import { useState, useEffect, useRef } from 'react';
import { Trophy, User, Zap, Sparkles } from 'lucide-react';

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
        id: "feed",
        title: "Feed BBB 26",
        desc: "IA monitora as redes sociais em tempo real. Notícias, tweets e posts sobre os participantes do BBB 26 - tudo resumido com análise de sentimento.",
        color: "from-purple-600 to-indigo-600",
        icon: <Sparkles size={24} />,
        mockContent: (
            <div className="space-y-2 p-2 relative overflow-visible">
                {/* POST 1: Twitter/X Card */}
                <div className="bg-gray-900/80 rounded-xl border border-white/10 p-2 fade-in-up">
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-pink-500 text-white text-[7px] font-bold mb-1.5">🎀 FOFOCA</span>
                    <div className="text-white/90 text-[8px] leading-relaxed mb-2">
                        Sarah comenta sobre Jordana, gerando polêmica.
                    </div>
                    <div className="bg-[#15202b] rounded-lg p-2 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold">B</div>
                            <div>
                                <span className="text-white text-[8px] font-bold">Bruno</span>
                                <span className="text-blue-400 text-[6px] ml-0.5">✓</span>
                            </div>
                            <span className="text-white/30 text-[8px] ml-auto">𝕏</span>
                        </div>
                        <div className="text-white/80 text-[7px]">Imagina a Sarah falando isso da Jordana 😂</div>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                        <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-1.5 rounded-lg text-[8px]">⚡ HYPAR</button>
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-violet-700 text-white font-bold py-1.5 rounded-lg text-[8px]">💀 ZiKAR</button>
                    </div>
                </div>

                {/* POST 2 */}
                <div className="bg-gray-900/80 rounded-xl border border-white/10 p-2 fade-in-up delay-100">
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-green-500 text-white text-[7px] font-bold mb-1.5">📺 ESTRATÉGIA</span>
                    <div className="text-white/90 text-[8px] leading-relaxed mb-2">
                        Babu lidera sorteio de compras; Xepa debate valores.
                    </div>
                    <div className="bg-black rounded-lg overflow-hidden border border-white/5">
                        <div className="flex items-center gap-1.5 p-1.5 bg-gray-900">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                                <span className="text-[6px]">📰</span>
                            </div>
                            <span className="text-white text-[7px] font-bold">defatoonline</span>
                        </div>
                        <div className="h-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="text-center z-10">
                                <span className="text-white/80 text-[8px] font-bold block">BBB 26</span>
                                <span className="text-yellow-400 text-[6px]">XEPA DEBATE VALORES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "hype",
        title: "Aposte no Participante",
        desc: "Viu a análise da IA sobre o participante? Agora é sua vez. HYPAR se vai bombar, ZIK4R se vai furar. Gaste sua energia com sabedoria!",
        color: "from-orange-500 to-yellow-500",
        icon: <Zap size={24} />,
        mockContent: (
            <div className="p-4 flex flex-col items-center justify-center h-full fade-in-scale">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-3 flex items-center justify-center text-2xl ring-4 ring-white/20">
                    🔥
                </div>
                <div className="text-white font-bold text-sm mb-1">Trending Topic</div>
                <div className="text-white/50 text-xs mb-4 flex items-center gap-1">
                    <Sparkles size={12} className="text-purple-400" /> IA: Alta probabilidade
                </div>
                <div className="flex gap-3 w-full">
                    <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-orange-500/30 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform">
                        <span className="text-lg">🔥</span>
                        <span>HYPAR</span>
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-violet-700 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-purple-500/30 flex flex-col items-center hover:scale-105 active:scale-95 transition-transform">
                        <span className="text-lg">💀</span>
                        <span>ZiKAR</span>
                    </button>
                </div>
            </div>
        )
    },
    {
        id: "ranking",
        title: "Top Hypers",
        desc: "Acertou a previsão? Suba de nível e entre para o Top Hypers. Compita com fãs do BBB 26 de todo Brasil!",
        color: "from-yellow-500 to-orange-600",
        icon: <Trophy size={24} />,
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
                <User className="text-white/70" size={18} />
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
                        {s.icon}
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
// MOBILE VERSION - Tab-based
// ============================================================================

const GameplayMobile = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    return (
        <section id="gameplay" className="relative z-10 bg-black py-16 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-8 fade-in-up">
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold mb-4">
                        📱 GAMEPLAY
                    </span>
                    <h2 className="text-3xl font-black text-white">
                        Veja como funciona
                    </h2>
                </div>

                {/* Tab Buttons */}
                <div className="flex gap-2 mb-6 justify-center">
                    {screens.map((screen, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveScreen(idx)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 ${idx === activeScreen
                                ? `bg-gradient-to-r ${screen.color} text-white shadow-lg`
                                : 'bg-white/10 text-white/60'
                                }`}
                        >
                            {screen.icon}
                        </button>
                    ))}
                </div>

                {/* Phone Mockup */}
                <div className="flex justify-center mb-6">
                    <div className="relative scale-[0.9]">
                        <PhoneMockup activeScreen={activeScreen} />
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] bg-gradient-to-tr ${screens[activeScreen].color} opacity-30 blur-[80px] -z-10 transition-all duration-700`} />
                    </div>
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
            <div className="sticky top-0 h-screen flex items-center pointer-events-none">
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
