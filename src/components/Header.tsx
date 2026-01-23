import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                            Hyperama
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Como funciona</a>
                            <a href="#gameplay" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Gameplay</a>
                            <a
                                href="https://app.hyperama.app"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                            >
                                Jogar Agora
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
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
                        <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Como funciona</a>
                        <a href="#gameplay" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gameplay</a>
                        <a
                            href="https://app.hyperama.app"
                            className="mt-4 w-full block text-center bg-purple-600 text-white px-4 py-3 rounded-xl font-bold"
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
