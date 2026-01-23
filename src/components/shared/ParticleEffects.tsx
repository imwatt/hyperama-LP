import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// =============================================================================
// SHARED PARTICLE TYPES
// =============================================================================

interface ParticleProps {
    delay: number;
    yPercent: number;
    size: number;
    viewportWidth: number;
}

// =============================================================================
// SCREEN-EDGE PARTICLE COMPONENTS
// =============================================================================

/**
 * Fire particle that animates from the LEFT edge of the SCREEN
 */
const ScreenFireParticle = ({ delay, yPercent, size, viewportWidth }: ParticleProps) => {
    const travelDistance = viewportWidth * 0.25;

    return (
        <motion.div
            className="pointer-events-none"
            style={{
                position: 'fixed',
                left: 0,
                top: `${yPercent}vh`,
                zIndex: 9999
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{
                x: [0, travelDistance * 0.4, travelDistance],
                y: [0, -60, -120],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.3, 0.3]
            }}
            transition={{
                duration: 2,
                delay,
                ease: 'easeOut',
                times: [0, 0.2, 0.6, 1]
            }}
        >
            <div
                className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full"
                style={{
                    width: size,
                    height: size,
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
                }}
            />
        </motion.div>
    );
};

/**
 * Skull particle that animates from the RIGHT edge of the SCREEN
 */
const ScreenSkullParticle = ({ delay, yPercent, size, viewportWidth }: ParticleProps) => {
    const travelDistance = viewportWidth * 0.25;

    return (
        <motion.div
            className="pointer-events-none"
            style={{
                position: 'fixed',
                right: 0,
                top: `${yPercent}vh`,
                zIndex: 9999
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{
                x: [0, -travelDistance * 0.4, -travelDistance],
                y: [0, -60, -120],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.3, 0.3]
            }}
            transition={{
                duration: 2,
                delay,
                ease: 'easeOut',
                times: [0, 0.2, 0.6, 1]
            }}
        >
            <span
                style={{
                    fontSize: size,
                    filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))'
                }}
            >
                💀
            </span>
        </motion.div>
    );
};

// =============================================================================
// PORTAL CONTAINER FOR PARTICLES
// Renders particles directly to document.body to escape transformed parents
// =============================================================================

interface ParticlePortalProps {
    isActive: boolean;
    particles: Particle[];
    viewportWidth: number;
}

const ParticlePortal = ({ isActive, particles, viewportWidth }: ParticlePortalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted || typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isActive && particles.map((p) => (
                <ScreenFireParticle
                    key={`fire-${p.id}`}
                    delay={p.delay}
                    yPercent={p.yPercent}
                    size={p.size}
                    viewportWidth={viewportWidth}
                />
            ))}
            {isActive && particles.map((p) => (
                <ScreenSkullParticle
                    key={`skull-${p.id}`}
                    delay={p.delay}
                    yPercent={p.yPercent}
                    size={p.size * 1.2}
                    viewportWidth={viewportWidth}
                />
            ))}
        </AnimatePresence>,
        document.body
    );
};

// =============================================================================
// PARTICLE GENERATION UTILITY
// =============================================================================

interface Particle {
    id: number;
    delay: number;
    yPercent: number;
    size: number;
}

export const generateParticles = (count: number = 35): Particle[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        delay: Math.random() * 0.6,
        yPercent: 5 + Math.random() * 90,
        size: 20 + Math.random() * 30
    }));
};

// =============================================================================
// JOGAR AGORA BUTTON COMPONENT
// =============================================================================

interface JogarAgoraButtonProps {
    className?: string;
    size?: 'large' | 'medium';
}

export const JogarAgoraButton = ({
    className = '',
    size = 'large'
}: JogarAgoraButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setViewportWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setParticles(generateParticles(35));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const sizeClasses = size === 'large'
        ? 'px-10 py-5 text-xl'
        : 'px-8 py-4 text-lg';

    return (
        <>
            {/* Particles rendered via Portal to document.body - escapes all transforms */}
            <ParticlePortal
                isActive={isHovered && viewportWidth > 0}
                particles={particles}
                viewportWidth={viewportWidth}
            />

            <motion.a
                href="https://hyperama.app"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white ${sizeClasses} rounded-2xl font-black overflow-visible shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-shadow ${className}`}
                aria-label="Jogar agora no Hyperama"
            >
                <span className="relative z-10">JOGAR AGORA</span>
                <ArrowRight
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                    aria-hidden="true"
                />
            </motion.a>
        </>
    );
};
