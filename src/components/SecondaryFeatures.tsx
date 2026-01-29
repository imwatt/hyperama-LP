import { useState, useRef, useEffect } from 'react';
import { Newspaper, Trophy, Sparkles, TrendingUp } from 'lucide-react';

// =============================================================================
// SECONDARY FEATURES - Feed, Ranking, Energy System
// =============================================================================

const features = [
    {
        icon: <Newspaper className="w-10 h-10" />,
        title: "Feed com IA",
        description: "Acompanhe notícias, tweets e posts sobre o BBB 26 em tempo real, com análise de sentimento feita por Inteligência Artificial.",
        gradient: "from-blue-500 to-cyan-600",
        emoji: "📰"
    },
    {
        icon: <Trophy className="w-10 h-10" />,
        title: "Ranking de Jogadores",
        description: "Dispute com fãs do BBB de todo Brasil. Acerte previsões, ganhe pontos e vire um Top Hyper!",
        gradient: "from-yellow-500 to-orange-600",
        emoji: "🏆"
    },
    {
        icon: <TrendingUp className="w-10 h-10" />,
        title: "Análise em Tempo Real",
        description: "IA monitora redes sociais 24/7 e atualiza as estatísticas dos participantes instantaneamente.",
        gradient: "from-green-500 to-emerald-600",
        emoji: "📊"
    }
];

const SecondaryFeatures = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(features.length).fill(false));

    // Intersection Observer for staggered card animations
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
                        }, index * 100);
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
        <section ref={containerRef} className="relative z-10 py-16 sm:py-32 bg-gradient-to-b from-black via-gray-900/30 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold mb-6">
                        <Sparkles size={14} />
                        FUNCIONALIDADES
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
                        Muito Mais que um Jogo
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Acompanhe o BBB 26 de forma completa
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const isVisible = visibleCards[index];

                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`
                                    feature-card relative group overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/90
                                    border border-white/10 p-8 backdrop-blur-sm cursor-pointer
                                    hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
                                    transition-all duration-500
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                                `}
                            >
                                {/* Background gradient on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                />

                                {/* Floating emoji background */}
                                <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                                    {feature.emoji}
                                </div>

                                <div className="relative z-10">
                                    {/* Icon with pulse */}
                                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 mb-6`}>
                                        {feature.icon}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-50 animate-ping`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom shine effect */}
                                <div
                                    className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* CTA Below */}
                <div className="text-center mt-16 fade-in-up">
                    <p className="text-gray-400 mb-6 text-lg">Explore todas as funcionalidades</p>
                    <a
                        href="https://app.hyperama.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.05] active:scale-[0.98]"
                    >
                        <span>Começar Agora</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SecondaryFeatures;
