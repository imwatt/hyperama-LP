import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Zap } from 'lucide-react';

// =============================================================================
// SWIPE DEMO COMPONENT - Interactive tutorial showing swipe gestures
// =============================================================================

const gestures = [
    {
        id: 'right',
        title: 'HYPAR',
        subtitle: 'Vai Bombar!',
        description: 'Deslize para a DIREITA quando achar que o participante vai crescer no jogo',
        icon: <ArrowRight className="w-8 h-8" />,
        emoji: '🔥',
        color: 'from-green-500 to-emerald-600',
        borderColor: 'border-green-500',
        glowColor: 'shadow-[0_0_30px_rgba(34,197,94,0.5)]',
        direction: 'right' as const,
    },
    {
        id: 'left',
        title: 'ZIK4R',
        subtitle: 'Vai Furar!',
        description: 'Deslize para a ESQUERDA quando achar que o participante vai cair no jogo',
        icon: <ArrowLeft className="w-8 h-8" />,
        emoji: '💀',
        color: 'from-purple-500 to-pink-600',
        borderColor: 'border-purple-500',
        glowColor: 'shadow-[0_0_30px_rgba(168,85,247,0.5)]',
        direction: 'left' as const,
    },
    {
        id: 'up',
        title: 'VER DETALHES',
        subtitle: 'Saiba Mais',
        description: 'Deslize para CIMA para ver análise completa, notícias e estatísticas',
        icon: <ArrowUp className="w-8 h-8" />,
        emoji: '📊',
        color: 'from-blue-500 to-cyan-600',
        borderColor: 'border-blue-500',
        glowColor: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]',
        direction: 'up' as const,
    },
];

const SwipeDemo = () => {
    const [activeGesture, setActiveGesture] = useState(0);

    // Auto-rotate through gestures
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveGesture((prev) => (prev + 1) % gestures.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentGesture = gestures[activeGesture];

    return (
        <section id="como-jogar" className="relative z-10 py-16 sm:py-32 bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r ${currentGesture.color} opacity-10 blur-[120px] transition-all duration-1000`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold mb-6">
                        🎮 TUTORIAL
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
                        Como Jogar?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        3 gestos simples para dominar o jogo
                    </p>
                </div>

                {/* Main Demo Area */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left - Visual Demo Card */}
                    <div className="relative flex items-center justify-center">
                        {/* Demo Card with Animation */}
                        <div className="relative w-full max-w-[320px] h-[450px]">
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${currentGesture.color} rounded-3xl shadow-2xl border-4 ${currentGesture.borderColor} ${currentGesture.glowColor} transition-all duration-700 transform`}
                                style={{
                                    transform:
                                        currentGesture.direction === 'right'
                                            ? 'translateX(50px) rotate(15deg)'
                                            : currentGesture.direction === 'left'
                                            ? 'translateX(-50px) rotate(-15deg)'
                                            : 'translateY(-30px) scale(1.05)',
                                }}
                            >
                                {/* Card Content */}
                                <div className="h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                                    {/* Glass effect */}
                                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                                    {/* Large Emoji */}
                                    <div className="text-9xl mb-6 animate-bounce">{currentGesture.emoji}</div>

                                    {/* Action Label */}
                                    <div className="bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30">
                                        <div className="text-white font-black text-3xl mb-1">{currentGesture.title}</div>
                                        <div className="text-white/80 text-sm">{currentGesture.subtitle}</div>
                                    </div>

                                    {/* Direction Indicator */}
                                    <div className="absolute bottom-8 flex items-center gap-2 text-white/80">
                                        {currentGesture.icon}
                                        <span className="text-sm font-semibold">Deslize aqui</span>
                                    </div>
                                </div>
                            </div>

                            {/* Background glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${currentGesture.color} rounded-3xl blur-3xl opacity-30 -z-10 scale-110 transition-all duration-700`} />
                        </div>
                    </div>

                    {/* Right - Gesture List */}
                    <div className="space-y-4">
                        {gestures.map((gesture, index) => {
                            const isActive = index === activeGesture;
                            return (
                                <div
                                    key={gesture.id}
                                    onClick={() => setActiveGesture(index)}
                                    className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-500 ${
                                        isActive
                                            ? `bg-gradient-to-r ${gesture.color} scale-[1.02] ${gesture.glowColor}`
                                            : 'bg-gray-800/50 hover:bg-gray-800/80'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div
                                            className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 ${
                                                isActive ? 'bg-white/20 scale-110' : 'bg-white/10'
                                            }`}
                                        >
                                            {gesture.emoji}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className={`font-black text-xl transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                                    {gesture.title}
                                                </h3>
                                                {gesture.id === 'right'}
                                                {gesture.id === 'left'}
                                            </div>
                                            <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-white/90' : 'text-gray-400'}`}>
                                                {gesture.description}
                                            </p>
                                        </div>

                                        {/* Arrow indicator */}
                                        <div className={`flex-shrink-0 transition-all duration-300 ${isActive ? 'opacity-100 scale-110' : 'opacity-30'}`}>
                                            {gesture.icon}
                                        </div>
                                    </div>

                                    {/* Active indicator bar */}
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full animate-pulse" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-3 justify-center">
                    {gestures.map((gesture, index) => (
                        <button
                            key={gesture.id}
                            onClick={() => setActiveGesture(index)}
                            aria-label={`Mostrar ${gesture.title}`}
                            className={`h-3 rounded-full bg-gradient-to-r ${gesture.color} transition-all duration-300 ${
                                index === activeGesture ? 'w-12 opacity-100' : 'w-3 opacity-30'
                            }`}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 fade-in-up">
                    <p className="text-gray-400 mb-6 text-lg">Pronto para testar suas habilidades?</p>
                    <a
                        href="https://app.hyperama.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.05] active:scale-[0.98]"
                    >
                        <span>🔥</span>
                        <span>Começar a Jogar</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SwipeDemo;
