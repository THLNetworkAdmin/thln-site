"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/game-reviews", label: "Game Reviews" },
    { href: "/standings", label: "Standings" },
    { href: "/rankings", label: "Rankings" },
  ];

  return (
    <nav>
      <Link href="/" className="nav-logo">
        <svg className="nav-logo-svg" width="44" height="44" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="98" fill="#0B1D3A" stroke="#7BAFD4" strokeWidth="4"/>
          <g transform="translate(100,100) rotate(-35) translate(-100,-100)">
            <rect x="92" y="45" width="16" height="130" rx="3" fill="#7BAFD4"/>
            <path d="M76 52 L76 18 Q76 2 92 2 L108 2 Q124 2 124 18 L124 52 Z" fill="#7BAFD4"/>
            <path d="M82 48 L82 20 Q82 8 92 8 L108 8 Q118 8 118 20 L118 48 Z" fill="#0B1D3A"/>
            <path d="M88 12 L88 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M94 10 L94 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M100 8 L100 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M106 10 L106 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M112 12 L112 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M82 18 L118 18" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.35"/>
            <path d="M82 28 L118 28" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.35"/>
            <path d="M82 38 L118 38" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.35"/>
          </g>
          <g transform="translate(100,100) rotate(35) translate(-100,-100)">
            <rect x="92" y="45" width="16" height="130" rx="3" fill="#7BAFD4"/>
            <path d="M76 52 L76 18 Q76 2 92 2 L108 2 Q124 2 124 18 L124 52 Z" fill="#7BAFD4"/>
            <path d="M82 48 L82 20 Q82 8 92 8 L108 8 Q118 8 118 20 L118 48 Z" fill="#0B1D3A"/>
            <path d="M88 12 L88 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M94 10 L94 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M100 8 L100 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M106 10 L106 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M112 12 L112 46" stroke="#7BAFD4" strokeWidth="1" opacity="0.4"/>
            <path d="M82 18 L118 18" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.35"/>
            <path d="M82 28 L118 28" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.35"/>
            <path d="M82 38 L118 38" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.35"/>
          </g>
          <circle cx="100" cy="82" r="12" fill="#7BAFD4"/>
          <circle cx="100" cy="82" r="10" fill="#0B1D3A"/>
          <circle cx="100" cy="82" r="8" fill="none" stroke="#7BAFD4" strokeWidth="1.5"/>
          <line x1="92" y1="82" x2="108" y2="82" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.5"/>
          <line x1="100" y1="74" x2="100" y2="90" stroke="#7BAFD4" strokeWidth="0.8" opacity="0.5"/>
        </svg>
        <div className="nav-logo-text">
          <span className="name">Tar Heel Lax Network</span>
          <span className="tagline">NC High School Lacrosse</span>
        </div>
      </Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
