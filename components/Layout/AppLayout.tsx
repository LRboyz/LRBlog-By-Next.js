import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LightLogo from '/public/logo/logo_light.png'
import cn from "classnames";
import { useTheme } from "next-themes";

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};
const AppLayout: React.FC = (props) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head children />
      <header className="flex flex-col justify-center">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-3 sm:pb-3  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="text-bold skip-nav">
            <Image src={LightLogo} width={150} height={40}/>
          </a>
          <div className="ml-[-0.60rem]">
            {/* <MobileMenu /> */}
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/project" text="Project" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>
      <main className="flex flex-col justify-center  min-h-screen bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto">
            {props.children}
        </div>
      </main>
      <footer className="p-5 text-black text-center">
        LRBlog powered by Next.js
      </footer>
    </div>
  );
};

export default AppLayout;
