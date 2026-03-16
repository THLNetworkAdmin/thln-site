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
            <h1>Week 4: Hough &amp; Topsail <span className="hl">lead the way</span></h1>
            <p className="hero-desc">
              The Huskies claim the top spot after a dominant home win over Charlotte Catholic, while the unbeaten Topsail Pirates keep rolling with a statement win at Crosse Out Cancer 2026. Charlotte Country Day leads the NCISAA. Here&apos;s our full Week 4 breakdown.
            </p>
            <div className="hero-meta">
              <span><span className="dot"></span> Power Rankings</span>
              <span>March 16, 2026</span>
              <span>5 min read</span>
            </div>
          </div>
          <div className="hero-featured">
            <div className="hero-featured-img">
              <div className="overlay-text">WEEK 4</div>
            </div>
            <div className="hero-featured-body">
              <div className="tag">Rankings</div>
              <h3>THLN Week 4 Power Rankings are live</h3>
              <p>New No. 1, a 7A sleeper, and an NCISAA shakeup. See who made the top 10.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <main>
          <div className="section-header">
            <h2>Latest</h2>
            <Link href="/rankings">View Rankings →</Link>
          </div>

          <div className="no-articles">
            <p className="no-articles-text">Articles and game reviews are coming soon. Stay tuned for in-depth coverage of NC high school lacrosse.</p>
          </div>
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
                <a href="#" className="social-btn">Twitter/X</a>
                <a href="#" className="social-btn">Instagram</a>
                <a href="#" className="social-btn">Subscribe</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
