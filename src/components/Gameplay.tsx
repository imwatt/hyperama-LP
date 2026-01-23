import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Trophy, User, Zap, Sparkles } from 'lucide-react';

// Hook para detectar viewport mobile
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
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
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-900/80 rounded-xl border border-white/10 p-2"
                >
                    {/* Category badge */}
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-pink-500 text-white text-[7px] font-bold mb-1.5">🎀 FOFOCA</span>

                    {/* IA Summary */}
                    <div className="text-white/90 text-[8px] leading-relaxed mb-2">
                        Sarah comenta sobre Jordana, gerando polêmica.
                    </div>

                    {/* Embedded Tweet */}
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
                        <div className="flex gap-1 mt-1">
                            <span className="text-blue-400 text-[6px]">#bbb26</span>
                            <span className="text-blue-400 text-[6px]">#redebbb</span>
                        </div>
                    </div>

                    {/* HYPAR/ZIKAR mini buttons */}
                    <div className="flex gap-1.5 mt-2">
                        <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-1.5 rounded-lg text-[8px] flex items-center justify-center gap-0.5">
                            ⚡ HYPAR
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-violet-700 text-white font-bold py-1.5 rounded-lg text-[8px] flex items-center justify-center gap-0.5">
                            💀 ZiKAR
                        </button>
                    </div>
                </motion.div>

                {/* POST 2: Instagram/News Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="bg-gray-900/80 rounded-xl border border-white/10 p-2 relative"
                >
                    {/* Category badge */}
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-green-500 text-white text-[7px] font-bold mb-1.5">📺 ESTRATÉGIA</span>

                    {/* IA Summary */}
                    <div className="text-white/90 text-[8px] leading-relaxed mb-2">
                        Babu lidera sorteio de compras; Xepa debate valores.
                    </div>

                    {/* Instagram embed */}
                    <div className="bg-black rounded-lg overflow-hidden border border-white/5">
                        {/* IG Header */}
                        <div className="flex items-center gap-1.5 p-1.5 bg-gray-900">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                                <span className="text-[6px]">📰</span>
                            </div>
                            <div>
                                <span className="text-white text-[7px] font-bold">defatoonline</span>
                                <span className="text-blue-400 text-[6px] ml-0.5">✓</span>
                            </div>
                            <span className="text-white/30 text-[7px] ml-auto">📷</span>
                        </div>
                        {/* Image placeholder */}
                        <div className="h-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="text-center z-10">
                                <span className="text-white/80 text-[8px] font-bold block">BBB 26</span>
                                <span className="text-yellow-400 text-[6px]">XEPA DEBATE VALORES</span>
                            </div>
                        </div>
                        {/* Caption preview */}
                        <div className="p-1.5 text-white/60 text-[6px]">
                            Sorteio define compras da semana...
                        </div>
                    </div>
                </motion.div>
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
            <div className="p-4 flex flex-col items-center justify-center h-full">
                {/* Topic */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-3 flex items-center justify-center text-2xl ring-4 ring-white/20">
                    🔥
                </div>
                <div className="text-white font-bold text-sm mb-1">Trending Topic</div>
                <div className="text-white/50 text-xs mb-4 flex items-center gap-1">
                    <Sparkles size={12} className="text-purple-400" /> IA: Alta probabilidade
                </div>

                <div className="flex gap-3 w-full">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-orange-500/30 flex flex-col items-center"
                    >
                        <span className="text-lg">🔥</span>
                        <span>HYPAR</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-violet-700 text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-purple-500/30 flex flex-col items-center"
                    >
                        <span className="text-lg">💀</span>
                        <span>ZiKAR</span>
                    </motion.button>
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
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-3 rounded-xl border border-yellow-500/30"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-black text-sm">
                            1
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm flex items-center gap-1">
                                Você 👑
                            </div>
                            <div className="text-xs text-yellow-400">Lv 5 • Top Hyper</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-mono font-bold text-yellow-400 text-sm">12.450</div>
                        <div className="text-xs text-green-400">+320 hoje</div>
                    </div>
                </motion.div>
                {[2, 3].map(i => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center justify-between bg-white/5 p-2 rounded-xl"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                                {i}
                            </div>
                            <div className="text-white/70 text-sm">Player {i}</div>
                        </div>
                        <div className="text-white/50 text-sm font-mono">{12000 - i * 1000}</div>
                    </motion.div>
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
    <motion.div
        className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] bg-black border-[5px] sm:border-[6px] border-gray-700 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
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
            <div
                className={`h-20 pt-8 bg-gradient-to-r ${screens[activeScreen].color} px-4 flex items-end pb-2 justify-between transition-all duration-500`}
            >
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    {screens[activeScreen].icon}
                    <span>Hyperama</span>
                </div>
                <User className="text-white/70" size={18} />
            </div>

            {/* App Content */}
            <div className="flex-1 overflow-hidden">
                <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                >
                    {screens[activeScreen].mockContent}
                </motion.div>
            </div>

            {/* App Nav */}
            <div className="h-16 bg-black/60 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-4 pb-2">
                {screens.map((s, idx) => (
                    <motion.div
                        key={idx}
                        animate={{
                            scale: idx === activeScreen ? 1.1 : 1,
                            y: idx === activeScreen ? -2 : 0
                        }}
                        className={`p-2 rounded-xl transition-colors ${idx === activeScreen ? 'bg-white/20 text-white' : 'text-gray-600'}`}
                    >
                        {s.icon}
                    </motion.div>
                ))}
            </div>

            {/* Home Indicator */}
            <div className="h-6 flex items-center justify-center">
                <div className="w-28 h-1 bg-white/30 rounded-full" />
            </div>
        </div>
    </motion.div>
);

// ============================================================================
// MOBILE VERSION - Tabs com clique
// ============================================================================

const GameplayMobile = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    return (
        <section id="gameplay" className="relative z-10 bg-black py-16 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold mb-4">
                        📱 GAMEPLAY
                    </span>
                    <h2 className="text-3xl font-black text-white">
                        Veja como funciona
                    </h2>
                </motion.div>

                {/* Tab Buttons */}
                <div className="flex gap-2 mb-6 justify-center">
                    {screens.map((screen, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setActiveScreen(idx)}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${idx === activeScreen
                                    ? `bg-gradient-to-r ${screen.color} text-white shadow-lg`
                                    : 'bg-white/10 text-white/60'
                                }`}
                        >
                            {screen.icon}
                        </motion.button>
                    ))}
                </div>

                {/* Phone Mockup */}
                <div className="flex justify-center mb-6">
                    <div className="relative scale-[0.9]">
                        <PhoneMockup activeScreen={activeScreen} />

                        {/* Glow */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[400px] bg-gradient-to-tr ${screens[activeScreen].color} opacity-30 blur-[80px] -z-10`}
                        />
                    </div>
                </div>

                {/* Content */}
                <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-black text-white mb-2">
                        {screens[activeScreen].title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed px-4">
                        {screens[activeScreen].desc}
                    </p>
                </motion.div>

                {/* Progress Dots */}
                <div className="flex gap-3 mt-6 justify-center">
                    {screens.map((screen, idx) => (
                        <motion.button
                            key={idx}
                            onClick={() => setActiveScreen(idx)}
                            animate={{
                                width: idx === activeScreen ? 40 : 12,
                                opacity: idx === activeScreen ? 1 : 0.3
                            }}
                            className={`h-3 rounded-full bg-gradient-to-r ${screen.color} transition-all duration-300`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============================================================================
// DESKTOP VERSION - Sticky scroll original
// ============================================================================

const GameplayDesktop = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeScreen, setActiveScreen] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.25) {
            if (activeScreen !== 0) setActiveScreen(0);
        } else if (latest < 0.55) {
            if (activeScreen !== 1) setActiveScreen(1);
        } else {
            if (activeScreen !== 2) setActiveScreen(2);
        }
    });

    return (
        <section
            ref={containerRef}
            id="gameplay"
            className="relative z-10 bg-black"
            style={{ height: '280vh' }}
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-row items-center gap-16">

                    {/* Phone Mockup */}
                    <div className="relative flex-shrink-0">
                        <PhoneMockup activeScreen={activeScreen} />

                        {/* Dynamic Glow */}
                        <motion.div
                            animate={{ opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[650px] bg-gradient-to-tr ${screens[activeScreen].color} opacity-30 blur-[100px] -z-10 transition-all duration-700`}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-left">
                        <motion.div
                            key={activeScreen}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
                                {activeScreen + 1} / 3
                            </span>
                            <h3 className="text-5xl font-black text-white mb-4">
                                {screens[activeScreen].title}
                            </h3>
                            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                                {screens[activeScreen].desc}
                            </p>
                        </motion.div>

                        {/* Progress Dots */}
                        <div className="flex gap-3 mt-8">
                            {screens.map((screen, idx) => (
                                <motion.div
                                    key={idx}
                                    animate={{
                                        width: idx === activeScreen ? 40 : 12,
                                        opacity: idx === activeScreen ? 1 : 0.3
                                    }}
                                    className={`h-3 rounded-full bg-gradient-to-r ${screen.color} transition-all duration-300`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ============================================================================
// MAIN COMPONENT - Chooses based on viewport
// ============================================================================

const Gameplay = () => {
    const isMobile = useIsMobile();

    // Renderiza versão apropriada baseado no viewport
    return isMobile ? <GameplayMobile /> : <GameplayDesktop />;
};

export default Gameplay;
