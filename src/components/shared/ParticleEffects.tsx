import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight } from 'lucide-react';

// =============================================================================
// LIGHTWEIGHT CSS PARTICLE SYSTEM (replaces heavy framer-motion particles)
// =============================================================================

interface Particle {
    id: number;
    delay: number;
    yPercent: number;
    size: number;
    isLeft: boolean;
}

const generateParticles = (count: number = 20): Particle[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        delay: Math.random() * 0.4,
        yPercent: 10 + Math.random() * 80,
        size: 15 + Math.random() * 20,
        isLeft: i % 2 === 0
    }));
};

// CSS-based particle component
const CSSParticle = ({ particle }: { particle: Particle }) => {
    return (
        <div
            className={`fixed pointer-events-none z-[9999] ${particle.isLeft ? 'particle-fly-right' : 'particle-fly-left'}`}
            style={{
                left: particle.isLeft ? 0 : 'auto',
                right: particle.isLeft ? 'auto' : 0,
                top: `${particle.yPercent}vh`,
                animationDelay: `${particle.delay}s`,
            }}
        >
            {particle.isLeft ? (
                <div
                    className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)'
                    }}
                />
            ) : (
                <span
                    style={{
                        fontSize: particle.size,
                        filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))'
                    }}
                >
                    💀
                </span>
            )}
        </div>
    );
};

// Portal for particles
const ParticlePortal = ({ isActive, particles }: { isActive: boolean; particles: Particle[] }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted || typeof document === 'undefined' || !isActive) return null;

    return createPortal(
        <div className="particle-container">
            {particles.map((p) => (
                <CSSParticle key={p.id} particle={p} />
            ))}
        </div>,
        document.body
    );
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

    const handleMouseEnter = () => {
        setIsHovered(true);
        setParticles(generateParticles(20));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Clear particles after animation
    useEffect(() => {
        if (isHovered) {
            const timer = setTimeout(() => {
                setParticles([]);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isHovered, particles]);

    const sizeClasses = size === 'large'
        ? 'px-10 py-5 text-xl'
        : 'px-8 py-4 text-lg';

    return (
        <>
            <ParticlePortal isActive={isHovered && particles.length > 0} particles={particles} />

            <a
                href="https://app.hyperama.app"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`
                    group relative inline-flex items-center justify-center gap-3 
                    bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                    ${sizeClasses} rounded-2xl font-black overflow-visible 
                    shadow-[0_0_40px_rgba(168,85,247,0.4)] 
                    hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] 
                    hover:scale-105 active:scale-98
                    transition-all duration-200
                    ${className}
                `}
                aria-label="Jogar agora no Hyperama"
            >
                <span className="relative z-10">JOGAR AGORA</span>
                <ArrowRight
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                    strokeWidth={3}
                    aria-hidden="true"
                />
            </a>
        </>
    );
};

// Export generateParticles for external use if needed
export { generateParticles };
