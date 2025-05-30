import { Slot } from "@wordpress/components";
import * as React from "react";
import { useSettings } from "../context";
import { useState } from "react";
import { LogOut, User } from "lucide-react";

const Header = () => {
  const settings = useSettings();

  const menus = settings.menuData.slice(0, 5);

  return (
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <div className="w-max h-10 bg-gradient-to-br from-purple-400 px-3 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <span style={ { textDecoration: 'none' } } className="text-white font-bold text-xl">Wordpress Jorbug</span>
              </div>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
              {
                menus.map( ( menu: { title: string; url: string }, index: number ) => (
                  <a key={ index } href={ menu.url } className="text-sm/6 font-semibold text-gray-900">
                    { menu.title }
                  </a>
                ) )
              }
          </div>
          <LoginButton />
        </nav>
      </header>
    )
}

export default Header;

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
      <div className="hidden lg:flex gap-4 lg:flex-1 lg:justify-end">
        <Slot name="MyFrontendSlot" />

        {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-3">
                <User size={14} className="text-black" />
                <span className="hidden sm:block text-sm font-medium">Welcome back!</span>
              </div>
              <button
                  className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 transition-all duration-200 transform hover:scale-105 hover:to-red-700 justify-center gap-2 cursor-pointer px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent  shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
                  onClick={handleAuthToggle}
              >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
            </div>

        ) : (
            <button onClick={handleAuthToggle} className="inline-flex items-center justify-center gap-2 cursor-pointer px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800">
              <span>Log in</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
        )}
    </div>
  )
}
