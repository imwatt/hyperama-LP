// =============================================================================
// BACKGROUND COMPONENT - Pure CSS, no JS animations
// =============================================================================

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Deep Space Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#050505] to-[#0a0510]" />

            {/* Animated Orbs - CSS only, no JS */}
            <div className="absolute top-[-30%] left-[-20%] w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] lg:w-[1200px] lg:h-[1200px] bg-purple-500/40 rounded-full blur-[60px] sm:blur-[120px] lg:blur-[180px] orb-animate-1" />
            <div className="absolute bottom-[-30%] right-[-20%] w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] lg:w-[1000px] lg:h-[1000px] bg-pink-500/35 rounded-full blur-[50px] sm:blur-[100px] lg:blur-[150px] orb-animate-2" />
            <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-indigo-500/25 rounded-full blur-[40px] sm:blur-[80px] lg:blur-[120px] orb-animate-3" />
            <div className="absolute top-[60%] right-[20%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-fuchsia-500/20 rounded-full blur-[30px] sm:blur-[60px] lg:blur-[100px] orb-animate-4" />

            {/* Noise/Grain overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />
        </div>
    );
};

export default Background;
