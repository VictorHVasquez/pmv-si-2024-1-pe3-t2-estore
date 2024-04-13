import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-white-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between w-full">
          <a className="flex-none text-xl font-semibold dark:text-black" href="/">
            <Link to="/">Zabbix Store</Link>
          </a>
          <div className="sm:hidden">
            <button type="button" className="" onClick={toggleCollapse} aria-expanded={!isCollapsed} aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`sm:flex flex-col p-2 display flex sm:flex-row sm:items-center sm:justify-end w-full ${isCollapsed ? "hidden" : "sm:flex"}`}>
          <a
            className="font-medium
            font-medium text-black-600 mr-5 link-mobile-margin link-with-underline"
          >
            <Link to="/">Produtos</Link>
          </a>
          <a className="font-medium text-black-600 mr-5 link-mobile-margin link-with-underline">
            <Link to="/aboutus">Sobre nós</Link>
          </a>
          <a className="font-medium text-black-600 mr-5 link-mobile-margin link-with-underline">
            <Link to="/cart">Carrinho</Link>
          </a>
          <a className="font-medium text-black-600 mr-5 link-mobile-margin link-with-underline">
            <Link to="/account">Conta</Link>
          </a>
          <a className="font-medium text-white bg-black mr-5 px-4 py-2 link-no-hover link-mobile-margin">
            <Link to="/register">Cadastrar</Link>
          </a>
          <a className="font-medium text-white bg-black mr-5 px-4 py-2 link-no-hover link-mobile-margin">
            <Link to="/login">Login</Link>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
