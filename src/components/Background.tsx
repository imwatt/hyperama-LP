import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Deep Space Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#050505] to-[#0a0510]" />

            {/* Animated Orbs - More vibrant */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-30%] left-[-20%] w-[1200px] h-[1200px] bg-purple-500/40 rounded-full blur-[180px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 150, 0],
                    opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-30%] right-[-20%] w-[1000px] h-[1000px] bg-pink-500/35 rounded-full blur-[150px]"
            />

            <motion.div
                animate={{
                    y: [0, -300, 0],
                    x: [0, 100, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[30%] left-[40%] w-[800px] h-[800px] bg-indigo-500/25 rounded-full blur-[120px]"
            />

            {/* Additional accent orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 10 }}
                className="absolute top-[60%] right-[20%] w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[100px]"
            />

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
