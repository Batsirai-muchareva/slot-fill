import * as React from 'react';
import { Fill } from "@wordpress/components";
import { useState } from "react";
import { Search, X } from "lucide-react";

const SearchComponent = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const openSearchOverlay = () => {
        setIsSearchOpen( true );
    };

    const closeSearchOverlay = () => {
        setIsSearchOpen( false );
    }

    return (
        <div>
            <Fill name="MyFrontendSlot">
                <button
                    onClick={ openSearchOverlay}
                    className="flex cursor-pointer items-center justify-center w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-purple-500/20 rounded-lg transition-all duration-200 transform hover:scale-105">
                    <Search size={18} className="text-gray-300 hover:text-purple-400" />
                </button>
            </Fill>
            { isSearchOpen && ( <SearchOverlay closeSearchOverlay={ closeSearchOverlay } /> ) }
        </div>
    )
}
export default SearchComponent;


const allItems = [
    'React components',
    'Tailwind CSS',
    'UI Design',
    'Next.js guide',
    'JavaScript tips',
    'TypeScript patterns',
    'Design systems',
    'Accessibility',
];

const SearchOverlay = ( { closeSearchOverlay }: { closeSearchOverlay: () => void } ) => {
    const [query, setQuery] = useState('');

    const filteredItems = allItems.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" onClick={closeSearchOverlay} />
            <div className="relative w-full max-w-2xl bg-slate-900/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl p-6 animate-scale-in">
                <button onClick={closeSearchOverlay} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
                    <X size={20} />
                </button>
                <div className="flex items-center space-x-4 mb-4">
                    <Search size={24} className="text-purple-400" />
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="flex-1 bg-transparent text-white text-lg placeholder-gray-400 outline-none"
                        autoFocus
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <p className="text-sm text-gray-400 mb-3">
                        {query ? 'Search results' : 'Popular searches'}
                    </p>

                    <div className="space-y-1">
                        {(query ? filteredItems : allItems.slice(0, 3)).map((item, index) => (
                            <div
                                key={index}
                                className="px-3 py-2 text-gray-300 hover:bg-slate-800/50 rounded-lg cursor-pointer transition-colors duration-200"
                            >
                                {item}
                            </div>
                        ))}

                        {query && filteredItems.length === 0 && (
                            <div className="text-gray-500 px-3 py-2">No results found.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
