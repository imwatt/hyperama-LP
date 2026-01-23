import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Zap, Flame, Sparkles } from 'lucide-react';

const features = [
    {
        icon: <Sparkles className="w-10 h-10" />,
        title: "IA Analisa o BBB 26",
        description: "Inteligência Artificial monitora redes sociais, analisa sentimentos sobre os participantes e resume tudo em tempo real.",
        gradient: "from-purple-500 to-pink-600",
        emoji: "🤖"
    },
    {
        icon: <Flame className="w-10 h-10" />,
        title: "HYPAR ou ZiKAR",
        description: "Baseado na análise, você decide: vai bombar ou vai furar? Gaste energia e faça sua previsão sobre os participantes.",
        gradient: "from-orange-500 to-yellow-600",
        emoji: "🔥"
    },
    {
        icon: <Trophy className="w-10 h-10" />,
        title: "Top Hypers",
        description: "Acertou a previsão? Suba de nível, vire Top Hyper e compita com fãs do BBB 26 de todo Brasil.",
        gradient: "from-yellow-500 to-orange-600",
        emoji: "🏆"
    },
    {
        icon: <Zap className="w-10 h-10" />,
        title: "BBB 26 e Muito Mais",
        description: "Além do Big Brother, aposte em reality shows, eleições, esportes... Se está gerando buzz, você pode jogar.",
        gradient: "from-blue-500 to-cyan-600",
        emoji: "⚡"
    }
];

const Features = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Serpentine X transforms - alternating left/right entry
    const x1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [-300, 0, 0]);
    const x2 = useTransform(scrollYProgress, [0.1, 0.25, 0.35], [300, 0, 0]);
    const x3 = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [-300, 0, 0]);
    const x4 = useTransform(scrollYProgress, [0.3, 0.45, 0.55], [300, 0, 0]);

    const rotate1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [-10, 0, 0]);
    const rotate2 = useTransform(scrollYProgress, [0.1, 0.25, 0.35], [10, 0, 0]);
    const rotate3 = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [-10, 0, 0]);
    const rotate4 = useTransform(scrollYProgress, [0.3, 0.45, 0.55], [10, 0, 0]);

    const scale1 = useTransform(scrollYProgress, [0.12, 0.2, 0.28], [0.9, 1.05, 1]);
    const scale2 = useTransform(scrollYProgress, [0.22, 0.3, 0.38], [0.9, 1.05, 1]);
    const scale3 = useTransform(scrollYProgress, [0.32, 0.4, 0.48], [0.9, 1.05, 1]);
    const scale4 = useTransform(scrollYProgress, [0.42, 0.5, 0.58], [0.9, 1.05, 1]);

    const opacity1 = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

    const transforms = [
        { x: x1, rotate: rotate1, scale: scale1, opacity: opacity1 },
        { x: x2, rotate: rotate2, scale: scale2, opacity: opacity2 },
        { x: x3, rotate: rotate3, scale: scale3, opacity: opacity3 },
        { x: x4, rotate: rotate4, scale: scale4, opacity: opacity4 },
    ];

    return (
        <section ref={containerRef} id="features" className="relative z-10 py-32 bg-black/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold mb-4"
                    >
                        🤖 COMO FUNCIONA
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4"
                    >
                        IA + Você = 🔥
                    </motion.h2>
                </motion.div>

                {/* ZIG-ZAG Layout - Stacked vertically, alternating sides */}
                <div className="flex flex-col gap-12">
                    {features.map((feature, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    x: transforms[index].x,
                                    rotate: transforms[index].rotate,
                                    scale: transforms[index].scale,
                                    opacity: transforms[index].opacity
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 0,
                                    boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
                                }}
                                className={`relative w-full md:w-[80%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 p-8 backdrop-blur-sm cursor-pointer group`}
                            >
                                {/* Direction indicator */}
                                <motion.div
                                    className={`absolute top-1/2 -translate-y-1/2 text-6xl opacity-10 ${isLeft ? '-left-4' : '-right-4'}`}
                                    animate={{ x: isLeft ? [0, 10, 0] : [0, -10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    {isLeft ? '→' : '←'}
                                </motion.div>

                                {/* Animated background gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                />

                                {/* Floating emoji */}
                                <motion.div
                                    className="absolute top-4 right-4 text-5xl opacity-20 group-hover:opacity-60 transition-opacity"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    {feature.emoji}
                                </motion.div>

                                <div className="flex items-start gap-6">
                                    {/* Icon with pulse */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}
                                    >
                                        {feature.icon}
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </motion.div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom shine effect */}
                                <motion.div
                                    className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-1/2 h-1 bg-gradient-to-r ${isLeft ? 'from-purple-500 to-transparent' : 'from-transparent to-purple-500'} opacity-0 group-hover:opacity-100`}
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
