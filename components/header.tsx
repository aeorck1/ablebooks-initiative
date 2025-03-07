"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import "./header.css";
// import "../styles.scss"
import "../src/app/styles.scss";
export default function Header() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Function to track scroll position and hide/show header
  useEffect(() => {
    const scrollPosition = () => {
      const scrollPosition = window.scrollY;
      const hideHeaderTrigger = 200;

      if (scrollPosition > hideHeaderTrigger) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", scrollPosition);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []);

  // Function to open mobile navigation
  const openNav = () => {
    setIsNavOpen(true);
  };

  // Function to close mobile navigation
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header 
      id="header" 
      ref={headerRef} 
      className={`header ${isHeaderHidden ? "header_hide" : ""}`}
    >
      <div className="heading head logo-head">
   <div className="logo-image">
    <div className="logo_background">
    <div>
          <Link href="/" className="toph">
            <img
              src="/image/logo.png" 
              alt="ABLEBOOKS AFRICA Logo" 
              className="logo"
             
            />
          </Link>
        </div>
    </div>
    <nav className="desktop">
          <ul>
            <li><Link href="/" className="a">Home</Link></li>
            <li><Link href="/books" className="a">Books</Link></li>
            <li><Link href="/gallery" className="a">Gallery</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
   </div>

        {/* Desktop Navigation */}
      

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={openNav} style={{ display: isNavOpen ? "none" : "block" }}>
          <Menu size={24} />
        </div>

        {/* Mobile Navigation Overlay */}
        <div id="myNav" className="menu_curtain" style={{ width: isNavOpen ? "100%" : "0%" }}>
          <div className="overlay-content">
            <div className="closebtn" onClick={closeNav}>
              <X size={24} />
            </div>
            <Link href="/" onClick={closeNav}>Home</Link>
            <Link href="/books" onClick={closeNav}>Books</Link>
            <Link href="/gallery" onClick={closeNav}>Gallery</Link>
            <Link href="/about-us" onClick={closeNav}>About</Link>
            <Link href="/contact" onClick={closeNav}>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
