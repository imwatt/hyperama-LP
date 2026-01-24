import { Instagram } from 'lucide-react';
import { JogarAgoraButton } from './shared/ParticleEffects';

// =============================================================================
// FINAL CTA SECTION
// =============================================================================

const FinalCTA = () => (
    <section
        className="relative z-20 py-12 sm:py-20 bg-gradient-to-t from-purple-950/30 to-transparent"
        aria-labelledby="final-cta-heading"
    >
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="fade-in-up">
                <span className="text-5xl sm:text-6xl mb-4 sm:mb-6 block" role="img" aria-label="game controller">🎮</span>
                <h2
                    id="final-cta-heading"
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6"
                >
                    Pronto para mostrar que <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        você entende de BBB 26?
                    </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
                    Entre no Hyperama. IA analisa os participantes, você joga, e o ranking decide quem é o expert do BBB.
                </p>
                <JogarAgoraButton size="large" />
            </div>
        </div>
    </section>
);

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <FinalCTA />

            <footer
                className="relative z-20 bg-black border-t border-white/10 py-8 sm:py-12"
                role="contentinfo"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Brand */}
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                                Hyperama
                            </span>
                            <p className="text-gray-500 text-sm">
                                &copy; {currentYear} Hyperama. Todos os direitos reservados.
                            </p>
                        </div>

                        {/* Social Links */}
                        <nav aria-label="Redes sociais">
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://www.instagram.com/hyperama.app?igsh=eDl3NDY5cHptMTUw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-pink-500 hover:scale-110 hover:rotate-6 transition-all duration-200"
                                    aria-label="Siga-nos no Instagram"
                                >
                                    <Instagram size={28} aria-hidden="true" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

