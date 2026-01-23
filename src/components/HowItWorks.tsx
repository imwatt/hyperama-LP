import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "IA Analisa o BBB",
        desc: "Nossa IA monitora redes sociais em tempo real, analisa sentimentos sobre os participantes do BBB 26 e resume o que está bombando.",
        emoji: "🤖",
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "02",
        title: "HYPAR ou ZiKAR",
        desc: "Viu a análise? Agora decida: HYPAR ⚡ se o participante vai crescer ou ZiKAR 💀 se vai cair. Use sua energia!",
        emoji: "🎯",
        color: "from-orange-500 to-yellow-500"
    },
    {
        number: "03",
        title: "Seja Top Hyper",
        desc: "Acertou a previsão? Ganhe pontos, suba de nível e seja o maior expert do BBB 26!",
        emoji: "🏆",
        color: "from-yellow-500 to-green-500"
    }
];

const HowItWorks = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="how-it-works" className="relative z-10 py-24 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-block px-4 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-bold mb-4"
                    >
                        🎮 PASSO A PASSO
                    </motion.span>
                    <motion.h2 className="text-4xl md:text-5xl font-black text-white">
                        3 passos para dominar 🔥
                    </motion.h2>
                </motion.div>

                {/* Cards with WAVE animation, stops on hover */}
                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => {
                        const isHovered = hoveredIndex === index;
                        const anyHovered = hoveredIndex !== null;
                        const isFaded = anyHovered && !isHovered;

                        return (
                            <motion.div
                                key={index}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                animate={
                                    isHovered
                                        ? { y: -15, scale: 1.08, rotate: 0 }
                                        : isFaded
                                            ? { opacity: 0.5, scale: 0.95 }
                                            : {
                                                y: [0, -12, 0],
                                                rotate: [0, index % 2 === 0 ? 2 : -2, 0]
                                            }
                                }
                                style={{
                                    animationDelay: `${index * 0.2}s`
                                }}
                                className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border p-8 rounded-3xl text-center cursor-pointer transition-all duration-300 ${isHovered ? 'border-purple-500/70 shadow-[0_0_60px_rgba(168,85,247,0.5)] z-20' : 'border-white/10'}`}
                            >
                                {/* Continuous wave animation when not hovered */}
                                {!anyHovered && (
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl pointer-events-none"
                                        animate={{
                                            background: [
                                                'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)',
                                                'radial-gradient(circle at 30% 70%, rgba(168,85,247,0.15) 0%, transparent 70%)',
                                                'radial-gradient(circle at 70% 30%, rgba(168,85,247,0.1) 0%, transparent 70%)',
                                                'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)'
                                            ]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5
                                        }}
                                    />
                                )}

                                {/* Number Badge */}
                                <motion.div
                                    animate={isHovered ? { scale: 1.2, rotate: 360 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl font-black text-white mx-auto mb-6 shadow-lg`}
                                >
                                    <motion.span
                                        className="absolute -top-4 text-2xl"
                                        animate={isHovered ? { y: -10, scale: 1.3 } : { y: [0, -5, 0] }}
                                        transition={isHovered ? { duration: 0.3 } : { duration: 2, repeat: Infinity }}
                                    >
                                        {step.emoji}
                                    </motion.span>
                                    {step.number}

                                    {/* Pulse ring on hover */}
                                    {isHovered && (
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl border-2 border-white/50`}
                                            initial={{ scale: 1, opacity: 0.5 }}
                                            animate={{ scale: 1.5, opacity: 0 }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        />
                                    )}
                                </motion.div>

                                <h3 className={`text-xl font-bold mb-3 transition-colors ${isHovered ? 'text-purple-300' : 'text-white'}`}>
                                    {step.title}
                                </h3>
                                <p className={`leading-relaxed text-sm transition-colors ${isHovered ? 'text-gray-200' : 'text-gray-400'}`}>
                                    {step.desc}
                                </p>

                                {/* Arrow to next */}
                                {index < 2 && (
                                    <motion.div
                                        className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-2xl text-purple-500/50 z-10"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        →
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
