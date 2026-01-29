import { useState } from 'react';
import { TrendingUp, TrendingDown, Zap, Trophy, Target } from 'lucide-react';

// =============================================================================
// HYPAR VS ZIK4R COMPARISON COMPONENT
// =============================================================================

const HyparVsZikar = () => {
    const [hoveredSide, setHoveredSide] = useState<'hypar' | 'zikar' | null>(null);

    const hyparFeatures = [
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Participante está crescendo' },
        { icon: <Trophy className="w-5 h-5" />, text: 'Alta repercussão positiva' },
        { icon: <Target className="w-5 h-5" />, text: 'Pode chegar longe no jogo' },
    ];

    const zikarFeatures = [
        { icon: <TrendingDown className="w-5 h-5" />, text: 'Participante está caindo' },
        { icon: <Trophy className="w-5 h-5" />, text: 'Repercussão negativa' },
        { icon: <Target className="w-5 h-5" />, text: 'Pode sair em breve' },
    ];

    return (
        <section className="relative z-10 py-16 sm:py-32 bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                {hoveredSide === 'hypar' && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[150px] transition-all duration-700" />
                )}
                {hoveredSide === 'zikar' && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] transition-all duration-700" />
                )}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 via-gray-500/20 to-purple-500/20 border border-gray-500/30 text-gray-300 text-sm font-bold mb-6">
                        ⚡ DECISÃO
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
                        HYPAR ou ZIK4R?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Cada voto custa <span className="text-yellow-400 font-bold">100 energia</span>. Escolha com sabedoria!
                    </p>
                </div>

                {/* VS Comparison */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                    {/* ZIK4R Card - ESQUERDA */}
                    <div
                        onMouseEnter={() => setHoveredSide('zikar')}
                        onMouseLeave={() => setHoveredSide(null)}
                        className={`relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer group ${
                            hoveredSide === 'zikar'
                                ? 'border-purple-500 scale-105 shadow-[0_0_60px_rgba(168,85,247,0.5)]'
                                : hoveredSide === 'hypar'
                                ? 'border-gray-700/50 opacity-50 scale-95'
                                : 'border-purple-500/50 hover:border-purple-500'
                        }`}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 rounded-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-4xl border-2 border-purple-500/50 group-hover:scale-110 transition-transform">
                                        💀
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-purple-400">ZIK4R</h3>
                                        <p className="text-purple-300/70 text-sm">Vai Furar!</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold border border-yellow-500/30 flex items-center gap-1">
                                    <Zap size={12} />
                                    <span>-100</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Vote <span className="text-purple-400 font-bold">ZIK4R</span> quando acreditar que o participante vai cair, perder força e pode ser eliminado.
                            </p>

                            {/* Features */}
                            <div className="space-y-3">
                                {zikarFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 text-gray-300 group-hover:text-purple-300 transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                            {feature.icon}
                                        </div>
                                        <span className="text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Direction indicator */}
                            <div className="mt-8 pt-6 border-t border-purple-500/20">
                                <div className="flex items-center justify-center gap-2 text-purple-400 font-bold">
                                    <span className="text-2xl">←</span>
                                    <span>Deslize para ESQUERDA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HYPAR Card - DIREITA */}
                    <div
                        onMouseEnter={() => setHoveredSide('hypar')}
                        onMouseLeave={() => setHoveredSide(null)}
                        className={`relative bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer group ${
                            hoveredSide === 'hypar'
                                ? 'border-green-500 scale-105 shadow-[0_0_60px_rgba(34,197,94,0.5)]'
                                : hoveredSide === 'zikar'
                                ? 'border-gray-700/50 opacity-50 scale-95'
                                : 'border-green-500/50 hover:border-green-500'
                        }`}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 rounded-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-4xl border-2 border-green-500/50 group-hover:scale-110 transition-transform">
                                        🔥
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-green-400">HYPAR</h3>
                                        <p className="text-green-300/70 text-sm">Vai Bombar!</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold border border-yellow-500/30 flex items-center gap-1">
                                    <Zap size={12} />
                                    <span>-100</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Vote <span className="text-green-400 font-bold">HYPAR</span> quando acreditar que o participante vai crescer, ganhar destaque e se tornar favorito.
                            </p>

                            {/* Features */}
                            <div className="space-y-3">
                                {hyparFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 text-gray-300 group-hover:text-green-300 transition-colors">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                                            {feature.icon}
                                        </div>
                                        <span className="text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Direction indicator */}
                            <div className="mt-8 pt-6 border-t border-green-500/20">
                                <div className="flex items-center justify-center gap-2 text-green-400 font-bold">
                                    <span className="text-2xl">→</span>
                                    <span>Deslize para DIREITA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VS Badge */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-black border-4 border-gray-600 flex items-center justify-center shadow-2xl">
                        <span className="text-2xl font-black text-gray-400">VS</span>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
                        <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-gray-300">
                            Cada voto custa <span className="text-white font-bold">100 energia</span>
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                        Você pode votar em cada participante 1x por dia
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HyparVsZikar;
