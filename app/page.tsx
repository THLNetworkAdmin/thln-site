import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* Scores Ticker */}
      <div className="scores-bar">
        <div className="scores-label">Recent Scores</div>
        <div className="score-chip">
          <div className="chip-teams">
            <div className="chip-team winner"><span>Cardinal Gibbons</span><span className="chip-score">14</span></div>
            <div className="chip-team"><span>Broughton</span><span className="chip-score">6</span></div>
          </div>
          <div className="chip-status">Final</div>
        </div>
        <div className="score-chip">
          <div className="chip-teams">
            <div className="chip-team winner"><span>Charlotte Catholic</span><span className="chip-score">11</span></div>
            <div className="chip-team"><span>Providence Day</span><span className="chip-score">9</span></div>
          </div>
          <div className="chip-status">Final</div>
        </div>
        <div className="score-chip">
          <div className="chip-teams">
            <div className="chip-team winner"><span>Myers Park</span><span className="chip-score">10</span></div>
            <div className="chip-team"><span>Ardrey Kell</span><span className="chip-score">7</span></div>
          </div>
          <div className="chip-status">Final</div>
        </div>
        <div className="score-chip">
          <div className="chip-teams">
            <div className="chip-team"><span>Green Hope</span><span className="chip-score">—</span></div>
            <div className="chip-team"><span>Apex Friendship</span><span className="chip-score">—</span></div>
          </div>
          <div className="chip-status upcoming">Tue 7pm</div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-field-lines"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-label">Featured Article</div>
            <h1>Cardinal Gibbons <span className="hl">dominates</span> in conference opener</h1>
            <p className="hero-desc">
              The Crusaders put on a clinic with a suffocating ride and elite ball movement, dismantling Broughton 14–6 in a game that wasn&apos;t as close as the final score suggests.
            </p>
            <div className="hero-meta">
              <span><span className="dot"></span> Game Review</span>
              <span>March 14, 2026</span>
              <span>8 min read</span>
            </div>
          </div>
          <div className="hero-featured">
            <div className="hero-featured-img">
              <div className="overlay-text">LAX</div>
            </div>
            <div className="hero-featured-body">
              <div className="tag">Up Next</div>
              <h3>Early-season power rankings: Who&apos;s for real in the Triangle?</h3>
              <p>Breaking down the top 10 teams in the Triangle after two weeks of play.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <main>
          <div className="section-header">
            <h2>Latest Articles</h2>
            <Link href="/game-reviews">View All →</Link>
          </div>

          <article className="article-card">
            <div className="article-thumb"><div className="thumb-inner">GR</div></div>
            <div className="article-info">
              <span className="article-tag tag-review">Game Review</span>
              <h3>Charlotte Catholic edges Providence Day in overtime thriller</h3>
              <p>An instant classic in the SPC as the Cougars rally from two down in the fourth to steal one in OT.</p>
              <span className="meta">March 13, 2026 · 6 min read</span>
            </div>
          </article>

          <article className="article-card">
            <div className="article-thumb"><div className="thumb-inner">RK</div></div>
            <div className="article-info">
              <span className="article-tag tag-rankings">Rankings</span>
              <h3>Week 3 statewide power rankings</h3>
              <p>New No. 1 after last week&apos;s upsets? We break down movement across all classifications.</p>
              <span className="meta">March 12, 2026 · 10 min read</span>
            </div>
          </article>

          <article className="article-card">
            <div className="article-thumb"><div className="thumb-inner">FT</div></div>
            <div className="article-info">
              <span className="article-tag tag-feature">Feature</span>
              <h3>The rise of lacrosse in the 910: Fayetteville&apos;s growing scene</h3>
              <p>How programs in the Sandhills are building from the ground up and competing with the big-city schools.</p>
              <span className="meta">March 10, 2026 · 12 min read</span>
            </div>
          </article>

          <article className="article-card">
            <div className="article-thumb"><div className="thumb-inner">OP</div></div>
            <div className="article-info">
              <span className="article-tag tag-opinion">Opinion</span>
              <h3>Why the NCHSAA needs to add a 5th classification for lacrosse</h3>
              <p>The gap between the haves and have-nots is growing. A fifth class would level the playing field.</p>
              <span className="meta">March 8, 2026 · 7 min read</span>
            </div>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-block">
            <div className="sb-header">
              <span>WLC-4 Standings</span>
              <span className="source">via THLN</span>
            </div>
            <table className="standings-mini">
              <thead>
                <tr><th></th><th>Team</th><th>W</th><th>L</th><th>Pct</th></tr>
              </thead>
              <tbody>
                <tr><td className="rank">1</td><td className="team-name">Cardinal Gibbons</td><td>6</td><td>0</td><td>1.000</td></tr>
                <tr><td className="rank">2</td><td className="team-name">Sanderson</td><td>5</td><td>1</td><td>.833</td></tr>
                <tr><td className="rank">3</td><td className="team-name">Middle Creek</td><td>4</td><td>2</td><td>.667</td></tr>
                <tr><td className="rank">4</td><td className="team-name">Cary</td><td>3</td><td>2</td><td>.600</td></tr>
                <tr><td className="rank">5</td><td className="team-name">Holly Springs</td><td>2</td><td>3</td><td>.400</td></tr>
              </tbody>
            </table>
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
