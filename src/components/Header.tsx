import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/icon.svg" alt="" width={32} height={32} className="object-contain" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500">
                            Hyperama
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Como funciona</a>
                            <a href="#gameplay" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Gameplay</a>
                            <a
                                href="https://app.hyperama.app"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-4 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                            >
                                Jogar Agora
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white p-3 -m-1 min-w-[48px] min-h-[48px] flex items-center justify-center"
                            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#features"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium min-h-[48px] flex items-center"
                        >
                            Como funciona
                        </a>
                        <a
                            href="#gameplay"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium min-h-[48px] flex items-center"
                        >
                            Gameplay
                        </a>
                        <a
                            href="https://app.hyperama.app"
                            className="mt-4 w-full block text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-4 rounded-xl font-bold min-h-[48px]"
                        >
                            Jogar Agora
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
