"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import scoresData from "../data/scores.json";
import "./home.css";

function getRecentGameDates() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const dates: string[] = [];

  if (dayOfWeek === 0) {
    // Sunday: show Friday + Saturday games
    const fri = new Date(today);
    fri.setDate(today.getDate() - 2);
    const sat = new Date(today);
    sat.setDate(today.getDate() - 1);
    dates.push(fri.toISOString().split("T")[0]);
    dates.push(sat.toISOString().split("T")[0]);
  } else if (dayOfWeek === 1) {
    // Monday: show Friday + Saturday + Sunday games (full weekend)
    for (let i = 3; i >= 1; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      dates.push(d.toISOString().split("T")[0]);
    }
  } else {
    // Tue-Sat: show yesterday's games
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    dates.push(yesterday.toISOString().split("T")[0]);
  }

  return dates;
}

function ScoresTicker() {
  const recentDates = getRecentGameDates();
  const recentGames = scoresData.games.filter(
    (g) => g.status === "final" && recentDates.includes(g.date)
  );
  // Fallback: if no games match today's logic, show most recent finished games
  const finishedGames = recentGames.length > 0
    ? recentGames
    : scoresData.games.filter((g) => g.status === "final");

  const [offset, setOffset] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    if (finishedGames.length <= visibleCount) return;
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % finishedGames.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [finishedGames.length]);

  const getVisibleGames = () => {
    const games = [];
    for (let i = 0; i < Math.min(visibleCount, finishedGames.length); i++) {
      const idx = (offset + i) % finishedGames.length;
      games.push(finishedGames[idx]);
    }
    return games;
  };

  return (
    <div className="scores-bar">
      <div className="scores-label">Recent Scores</div>
      <div className="ticker-track">
        {getVisibleGames().map((game, i) => {
          const homeWon = game.winner === game.homeTeam;
          const awayWon = game.winner === game.awayTeam;
          return (
            <div className="score-chip" key={`${game.date}-${game.homeTeam}-${i}`}>
              <div className="chip-teams">
                <div className={`chip-team ${awayWon ? "winner" : ""}`}>
                  <span>{game.awayTeam}</span>
                  <span className="chip-score">{game.awayScore}</span>
                </div>
                <div className={`chip-team ${homeWon ? "winner" : ""}`}>
                  <span>@ {game.homeTeam}</span>
                  <span className="chip-score">{game.homeScore}</span>
                </div>
              </div>
              <div className="chip-meta">
                <div className="chip-status">Final</div>
                <div className="chip-date">{game.dateDisplay}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScoresTicker />

      {/* Hero */}
      <section className="hero">
        <div className="hero-field-lines"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-label">Power Rankings</div>
            <h1>6th Annual <span className="hl">Heroes Bowl</span> Preview</h1>
            <p className="hero-desc">
              6th Annual Heroes Bowl in Charlotte - 8 games featuring 7 Top 10 teams. Read our full game-by-game breakdown.
            </p>
            <div className="hero-meta">
              <span><span className="dot"></span> Power Rankings</span>
              <span>March 27, 2026</span>
              <span>5 min read</span>
            </div>
          </div>
<Link href="/blog/heroes-bowl-preview" className="hero-featured" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="hero-featured-img" style={{ background: "#E8E6E1", padding: "0" }}>
              <svg width="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="500" fill="#E8E6E1"/>
                <line x1="0" y1="100" x2="800" y2="100" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <line x1="0" y1="200" x2="800" y2="200" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <line x1="0" y1="300" x2="800" y2="300" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <line x1="0" y1="400" x2="800" y2="400" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <line x1="200" y1="0" x2="200" y2="500" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <line x1="400" y1="0" x2="400" y2="500" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <line x1="600" y1="0" x2="600" y2="500" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.04"/>
                <circle cx="680" cy="80" r="300" fill="none" stroke="#0B1D3A" strokeWidth="1" opacity="0.04"/>
                <circle cx="120" cy="420" r="250" fill="none" stroke="#0B1D3A" strokeWidth="1" opacity="0.03"/>
                <rect x="0" y="0" width="800" height="6" fill="#0B1D3A"/>
                <rect x="0" y="494" width="800" height="6" fill="#0B1D3A"/>
                <text x="400" y="155" textAnchor="middle" fontFamily="Georgia, serif" fontSize="48" fill="#7BAFD4" fontWeight="700" letterSpacing="2">HEROES BOWL</text>
                <line x1="250" y1="180" x2="550" y2="180" stroke="#0B1D3A" strokeWidth="0.5" opacity="0.15"/>
                <text x="400" y="280" textAnchor="middle" fontFamily="Georgia, serif" fontSize="90" fill="#0B1D3A" fontWeight="700" letterSpacing="4">POWER</text>
                <text x="400" y="380" textAnchor="middle" fontFamily="Georgia, serif" fontSize="90" fill="#7BAFD4" fontWeight="700" letterSpacing="4">RANKINGS</text>
              </svg>
            </div>
            <div className="hero-featured-body">
              <div className="tag">Rankings</div>
              <h3>THLN Heroes Bowl Preview is live</h3>
              <p>New No. 1, a 7A sleeper, and an NCISAA shakeup. See who made the top 10.</p>
            </div>
          </Link></div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <main>
          <div className="section-header">
            <h2>Latest</h2>
            <Link href="/blog/heroes-bowl-preview">Read Preview →</Link>
          </div>

          <article className="article-card" onClick={() => window.location.href='/blog/heroes-bowl-preview'} style={{cursor:'pointer'}}>
            <div className="article-thumb" style={{ background: "#0B1D3A", border: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#7BAFD4", fontWeight: "700", textAlign: "center", lineHeight: "1.2" }}>HEROES<br/>BOWL</span>
            </div>
            <div className="article-info">
              <span className="article-tag tag-feature">Preview</span>
              <h3>6th Annual Heroes Bowl Preview: 8 games, 4 ranked matchups, 1 great cause</h3>
              <p>Our full game-by-game breakdown of Saturday&apos;s Heroes Bowl in Charlotte — featuring #1 Hough vs #4 Cardinal Gibbons and more.</p>
              <span className="meta">March 27, 2026 · 15 min read</span>
            </div>
          </article>
          <article className="article-card" onClick={() => window.location.href='/blog/games-of-the-week'} style={{cursor:'pointer'}}>
            <div className="article-thumb" style={{ background: "#0B1D3A", border: "none", overflow: "hidden" }}>
              <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="500" fill="#0B1D3A"/>
                <g transform="translate(50, 80) scale(1.0, 1.05)"><path d="M0.0,159.4 L2.4,158.3 L18.2,151.3 L28.4,124.5 L34.8,124.5 L51.4,118.7 L64.8,118.7 L84.5,102.4 L95.6,95.4 L106.7,93.1 L112.2,83.8 L121.7,73.3 L135.1,61.7 L150.9,59.3 L165.9,51.2 L180.9,53.5 L190.4,34.9 L204.6,29.1 L208.6,0.0 L235.4,1.2 L270.2,3.5 L299.4,5.8 L318.4,4.7 L339.7,4.7 L364.2,5.8 L380.0,5.8 L402.9,5.8 L423.5,5.8 L459.0,5.8 L498.5,5.8 L519.1,5.8 L546.7,5.8 L565.7,4.7 L584.7,4.7 L602.8,4.7 L618.6,4.7 L632.8,4.7 L644.7,4.7 L667.6,4.7 L677.1,25.6 L684.2,47.7 L693.7,67.5 L699.2,83.8 L695.3,98.9 L692.9,118.7 L692.9,138.5 L687.4,157.1 L681.0,164.1 L679.5,176.9 L673.9,190.8 L659.7,201.3 L651.0,208.3 L636.8,218.8 L624.2,222.3 L618.6,226.9 L606.8,232.7 L592.6,239.7 L577.5,250.2 L570.4,257.2 L552.3,261.8 L535.7,268.8 L524.6,275.8 L513.5,283.9 L504.9,294.4 L503.3,304.9 L497.0,314.2 L473.3,310.7 L455.9,317.7 L448.0,307.2 L414.8,266.5 L384.8,229.2 L367.4,208.3 L335.0,206.0 L316.0,207.1 L297.1,206.0 L279.7,206.0 L278.1,192.0 L274.9,185.0 L267.8,173.4 L259.1,176.9 L259.1,167.6 L233.1,166.4 L202.3,164.1 L180.1,162.9 L165.9,161.7 L152.5,159.4 L139.8,167.6 L121.7,175.7 L103.5,181.5 L95.6,185.0 L79.0,186.2 L55.3,186.2 L30.0,186.2 L24.5,186.2 L15.0,186.2 L0.0,186.2 L0.0,159.4 Z" fill="#7BAFD4" opacity="0.06" stroke="#7BAFD4" strokeWidth="1" strokeOpacity="0.08"/></g>
                <text x="400" y="215" textAnchor="middle" fontFamily="Georgia, serif" fontSize="60" fill="#FFFFFF" fontWeight="700" letterSpacing="2">GOTW</text>
                <text x="400" y="310" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fill="#7BAFD4" fontWeight="700" letterSpacing="3">HEROES BOWL</text>
              </svg>
            </div>
            <div className="article-info">
              <span className="article-tag tag-feature">Games of the Week</span>
              <h3>Week 4 Games of the Week: Hough hosts CSD, Middle Creek battles Green Level</h3>
              <p>Our staff breaks down the top matchups across NC lacrosse this week — plus staff predictions for every game.</p>
              <span className="meta">March 17, 2026 · 5 min read</span>
            </div>
          </article>

        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-block">
            <div className="sb-header">
              <span>Recent Scores</span>
              <span className="source">Latest</span>
            </div>
            {(() => {
              const recentDates = getRecentGameDates();
              const sidebarGames = scoresData.games.filter(
                (g) => g.status === "final" && recentDates.includes(g.date)
              );
              const gamesToShow = sidebarGames.length > 0
                ? sidebarGames.slice(0, 5)
                : scoresData.games.filter((g) => g.status === "final").slice(0, 5);
              return gamesToShow.map((game, i) => {
                const homeWon = game.winner === game.homeTeam;
                const awayWon = game.winner === game.awayTeam;
                return (
                  <div className="sidebar-score" key={i}>
                    <div className={`sidebar-team ${awayWon ? "winner" : ""}`}>
                      <span>{game.awayTeam}</span>
                      <span className="sidebar-pts">{game.awayScore}</span>
                    </div>
                    <div className={`sidebar-team ${homeWon ? "winner" : ""}`}>
                      <span>@ {game.homeTeam}</span>
                      <span className="sidebar-pts">{game.homeScore}</span>
                    </div>
                  </div>
                );
              });
            })()}
          </div>

          <div className="sidebar-block">
            <div className="about-block">
              <h4>About Tar Heel Lax Network</h4>
              <p>
                Your home for North Carolina high school boys lacrosse. Game reviews, scores, standings, power rankings, and everything in between — from the Triangle to the Queen City and beyond.
              </p>
              <div className="social-links">
<a href="https://x.com/TarHeelLaxNet" target="_blank" rel="noopener noreferrer" className="social-btn">Twitter/X</a>                <a href="#" className="social-btn">Instagram</a>
                <a href="#" className="social-btn">Subscribe</a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div style={{ textAlign: "center", padding: "16px 40px 0", fontSize: "11px", color: "var(--text-light)", letterSpacing: "0.5px" }}>
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
      </div>
    </>
  );
}
