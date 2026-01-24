import { useState, useRef, useEffect } from 'react';

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
    const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for staggered entrance
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setTimeout(() => {
                            setVisibleCards(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = sectionRef.current?.querySelectorAll('.step-card');
        cards?.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="how-it-works" className="relative z-10 py-16 sm:py-24 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent overflow-hidden">
            <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <span className="inline-block px-4 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-sm font-bold mb-4 fade-in-scale">
                        🎮 PASSO A PASSO
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                        3 passos para dominar 🔥
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => {
                        const isHovered = hoveredIndex === index;
                        const anyHovered = hoveredIndex !== null;
                        const isFaded = anyHovered && !isHovered;
                        const isVisible = visibleCards[index];

                        return (
                            <div
                                key={index}
                                data-index={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`
                                    step-card relative bg-gradient-to-br from-gray-900/90 to-black/90 
                                    backdrop-blur-sm border p-5 sm:p-8 rounded-3xl text-center cursor-pointer
                                    transition-all duration-500
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                                    ${isHovered ? 'border-purple-500/70 shadow-[0_0_60px_rgba(168,85,247,0.5)] z-20 -translate-y-4 scale-105' : 'border-white/10'}
                                    ${isFaded ? 'opacity-50 scale-95' : ''}
                                    ${!anyHovered && isVisible ? 'step-wave' : ''}
                                `}
                                style={{ animationDelay: `${index * 0.3}s` }}
                            >
                                {/* Number Badge */}
                                <div
                                    className={`
                                        relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl 
                                        flex items-center justify-center text-2xl font-black text-white 
                                        mx-auto mb-6 shadow-lg transition-transform duration-500
                                        ${isHovered ? 'scale-110 rotate-12' : ''}
                                    `}
                                >
                                    <span
                                        className={`
                                            absolute -top-4 text-2xl transition-transform duration-300
                                            ${isHovered ? '-translate-y-2 scale-125' : 'emoji-bounce'}
                                        `}
                                    >
                                        {step.emoji}
                                    </span>
                                    {step.number}

                                    {/* Pulse ring on hover */}
                                    {isHovered && (
                                        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 pulse-ring" />
                                    )}
                                </div>

                                <h3 className={`text-xl font-bold mb-3 transition-colors ${isHovered ? 'text-purple-300' : 'text-white'}`}>
                                    {step.title}
                                </h3>
                                <p className={`leading-relaxed text-sm transition-colors ${isHovered ? 'text-gray-200' : 'text-gray-400'}`}>
                                    {step.desc}
                                </p>

                                {/* Arrow to next */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-2xl text-purple-500/50 z-10 arrow-bounce-right">
                                        →
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
