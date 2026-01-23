import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Zap, Sparkles, Flame } from 'lucide-react';
import { JogarAgoraButton } from './shared/ParticleEffects';

// =============================================================================
// SCROLL FIRE PARTICLE
// =============================================================================

interface BigFireParticleProps {
    delay: number;
    x: number;
    size: number;
}

/**
 * Large fire particle for scroll-triggered effect
 */
const BigFireParticle = ({ delay, x, size }: BigFireParticleProps) => (
    <motion.div
        className="absolute bottom-0 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full"
        style={{
            left: `${x}%`,
            width: size,
            height: size,
            filter: 'blur(2px)'
        }}
        initial={{ y: 0, opacity: 0 }}
        animate={{
            y: [0, -window.innerHeight * 0.8],
            opacity: [0, 0.9, 0.9, 0.5, 0]
        }}
        transition={{
            duration: 2.5,
            delay,
            ease: 'easeOut',
            times: [0, 0.1, 0.5, 0.8, 1]
        }}
        aria-hidden="true"
    />
);

// =============================================================================
// FLOATING EMOJIS
// =============================================================================

const FLOATING_EMOJIS = ['🔥', '⚡', '🏆', '🤖', '🎮', '📊'];

const FloatingEmojis = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {FLOATING_EMOJIS.map((emoji, i) => (
            <motion.div
                key={i}
                className="absolute text-4xl"
                initial={{ opacity: 0.15 }}
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                }}
                style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`
                }}
            >
                {emoji}
            </motion.div>
        ))}
    </div>
);

// =============================================================================
// HERO CARD COMPONENT
// =============================================================================

interface HeroCardProps {
    showHypeEffect: boolean;
    buttonScale: any;
}

const HeroCard = ({ showHypeEffect, buttonScale }: HeroCardProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, type: "spring" }}
        className="relative z-10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl"
    >
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
            <motion.div style={{ scale: buttonScale }} className="relative">
                <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-xl flex flex-col items-center shadow-lg transition-shadow ${showHypeEffect ? 'shadow-[0_0_40px_rgba(251,191,36,0.6)]' : 'shadow-orange-500/30'}`}
                    aria-label="Hypar - Apostar que vai bombar"
                >
                    <motion.span
                        className="text-2xl mb-1"
                        animate={showHypeEffect ? { rotate: [-5, 5, -5], scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3, repeat: showHypeEffect ? Infinity : 0 }}
                        role="img"
                        aria-label="fire"
                    >
                        🔥
                    </motion.span>
                    <span className="text-white font-black">HYPAR</span>
                    <span className="text-white/70 text-xs">Vai bombar!</span>
                </motion.button>

                {showHypeEffect && (
                    <motion.div
                        className="absolute inset-0 border-2 border-yellow-400/50 rounded-xl pointer-events-none"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        aria-hidden="true"
                    />
                )}
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-purple-600 to-violet-700 p-4 rounded-xl flex flex-col items-center shadow-lg shadow-purple-500/30"
                aria-label="ZiKAR - Apostar que vai furar"
            >
                <span className="text-2xl mb-1" role="img" aria-label="skull">💀</span>
                <span className="text-white font-black">ZiKAR</span>
                <span className="text-white/70 text-xs">Vai furar!</span>
            </motion.button>
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

        {/* Scroll hint */}
        <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
        >
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-gray-500 text-xs flex items-center justify-center gap-1"
            >
                <span aria-hidden="true">↓</span>
                <span>Role para ver a mágica</span>
            </motion.div>
        </motion.div>
    </motion.div>
);

// =============================================================================
// HYPE TOAST COMPONENT
// =============================================================================

const HypeToast = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.4 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] pointer-events-none"
        role="alert"
        aria-live="polite"
    >
        <motion.div
            className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-3xl p-6 shadow-[0_0_60px_rgba(251,191,36,0.5)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
        >
            <div className="flex items-center gap-3">
                <motion.div
                    className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                >
                    <Flame className="w-8 h-8 text-white" aria-hidden="true" />
                </motion.div>
                <div>
                    <div className="text-2xl font-black text-white">HYPADO! 🔥</div>
                    <div className="text-white/80 text-sm flex items-center gap-1">
                        <Zap size={14} aria-hidden="true" />
                        <span>-10 energia</span>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

// =============================================================================
// MAIN HERO COMPONENT
// =============================================================================

const Hero = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [showHypeEffect, setShowHypeEffect] = useState(false);
    const [bigParticles, setBigParticles] = useState<Array<{ id: number; x: number; delay: number; size: number }>>([]);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const yVisual = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const cardRotate = useTransform(scrollYProgress, [0, 0.3], [0, 5]);
    const buttonScale = useTransform(scrollYProgress, [0.1, 0.2, 0.25], [1, 1.2, 1]);

    const smoothYText = useSpring(yText, { stiffness: 100, damping: 30 });
    const smoothYVisual = useSpring(yVisual, { stiffness: 100, damping: 30 });

    // Trigger HYPE effect on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.1 && latest < 0.4 && !showHypeEffect) {
            setShowHypeEffect(true);
            setBigParticles(Array.from({ length: 40 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 1.5,
                size: 12 + Math.random() * 30
            })));
        } else if (latest <= 0.08 || latest >= 0.45) {
            setShowHypeEffect(false);
        }
    });

    return (
        <section
            ref={targetRef}
            className="relative min-h-[100vh] lg:min-h-[130vh] flex items-center justify-center overflow-hidden z-10 pt-20 sm:pt-32 pb-12 sm:pb-24 px-4"
            aria-label="Hero section"
        >
            <FloatingEmojis />

            {/* Big Fire Particles on scroll */}
            <AnimatePresence>
                {showHypeEffect && (
                    <motion.div
                        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        aria-hidden="true"
                    >
                        {bigParticles.map((p) => (
                            <BigFireParticle key={p.id} x={p.x} delay={p.delay} size={p.size} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                style={{ opacity }}
                className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full"
            >
                {/* Left Side - Text Content */}
                <motion.div
                    style={{ y: smoothYText }}
                    className="text-center lg:text-left z-20 pt-8 sm:pt-20"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-md"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex h-2 w-2 rounded-full bg-green-500"
                            aria-hidden="true"
                        />
                        <span className="text-sm font-bold text-white tracking-wide flex items-center gap-1">
                            <Sparkles size={14} className="text-yellow-400" aria-hidden="true" />
                            BBB 26 • POWERED BY AI
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 sm:mb-8 leading-[0.9]"
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                            HYPERAMA
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed px-2 sm:px-0"
                    >
                        O <span className="text-purple-400 font-semibold">jogo do BBB 26</span>.
                        IA analisa os participantes. Você faz sua jogada.
                        <span className="text-pink-400 font-semibold"> Domine o ranking!</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <JogarAgoraButton size="large" />

                        <a
                            href="#gameplay"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20 hover:border-white/40 backdrop-blur-md"
                        >
                            Como Funciona
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side - Card */}
                <motion.div
                    style={{ y: smoothYVisual, rotate: cardRotate }}
                    className="relative z-10 hidden lg:block"
                >
                    <HeroCard showHypeEffect={showHypeEffect} buttonScale={buttonScale} />

                    {/* Background Glows */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            scale: showHypeEffect ? [1, 1.3, 1] : 1,
                            opacity: showHypeEffect ? [0.4, 0.7, 0.4] : 0.4
                        }}
                        transition={{ duration: showHypeEffect ? 0.5 : 6, repeat: Infinity }}
                        className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/40 rounded-2xl blur-xl"
                        aria-hidden="true"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            scale: showHypeEffect ? [1, 1.4, 1] : 1
                        }}
                        transition={{ duration: showHypeEffect ? 0.5 : 8, repeat: Infinity, delay: 1 }}
                        className={`absolute -bottom-8 -left-8 w-40 h-40 rounded-full blur-xl transition-colors duration-500 ${showHypeEffect ? 'bg-orange-500/50' : 'bg-pink-500/30'}`}
                        aria-hidden="true"
                    />
                </motion.div>
            </motion.div>

            {/* HYPE Toast */}
            <AnimatePresence>
                {showHypeEffect && <HypeToast />}
            </AnimatePresence>
        </section>
    );
};

export default Hero;

// Re-export for backwards compatibility
export { JogarAgoraButton };
