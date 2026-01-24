import { useRef, useState, useEffect } from 'react';
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
    const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

    // Intersection Observer for staggered card animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        // Stagger the animations
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

        const cards = containerRef.current?.querySelectorAll('.feature-card');
        cards?.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={containerRef} id="features" className="relative z-10 py-16 sm:py-32 bg-black/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20 fade-in-up">
                    <span className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold mb-4 fade-in-scale">
                        🤖 COMO FUNCIONA
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
                        IA + Você = 🔥
                    </h2>
                </div>

                {/* ZIG-ZAG Layout */}
                <div className="flex flex-col gap-6 sm:gap-12">
                    {features.map((feature, index) => {
                        const isLeft = index % 2 === 0;
                        const isVisible = visibleCards[index];

                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`
                                    feature-card relative w-full md:w-[80%] 
                                    ${isLeft ? 'md:mr-auto feature-slide-left' : 'md:ml-auto feature-slide-right'}
                                    ${isVisible ? 'feature-visible' : 'feature-hidden'}
                                    overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90 
                                    border border-white/10 p-5 sm:p-8 backdrop-blur-sm cursor-pointer group
                                    hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] 
                                    transition-all duration-500
                                `}
                            >
                                {/* Direction indicator - hidden on mobile */}
                                <div
                                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-6xl opacity-10 ${isLeft ? '-left-4 arrow-bounce-right' : '-right-4 arrow-bounce-left'}`}
                                >
                                    {isLeft ? '→' : '←'}
                                </div>

                                {/* Background gradient on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                />

                                {/* Floating emoji */}
                                <div className={`absolute top-4 right-4 text-5xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 ${isVisible ? 'emoji-float' : ''}`}>
                                    {feature.emoji}
                                </div>

                                <div className="flex items-start gap-6">
                                    {/* Icon with pulse */}
                                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                        {feature.icon}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} icon-pulse`} />
                                    </div>

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
                                <div
                                    className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-0 group-hover:w-1/2 h-1 bg-gradient-to-r ${isLeft ? 'from-purple-500 to-transparent' : 'from-transparent to-purple-500'} transition-all duration-300`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
