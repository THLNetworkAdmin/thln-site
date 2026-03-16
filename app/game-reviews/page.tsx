import type { Metadata } from "next";
import "./game-reviews.css";

export const metadata: Metadata = {
  title: "Game Reviews",
};

export default function GameReviews() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1>Game <span className="hl">Reviews</span></h1>
          <p className="page-desc">In-depth write-ups and analysis from games across North Carolina.</p>
        </div>
      </div>

      <div className="reviews-content">
        <div className="section-header">
          <h2>All Game Reviews</h2>
        </div>

        <article className="review-card">
          <div className="review-scorebox">
            <div className="review-team">
              <div className="review-badge bg-cg">CG</div>
              <span className="review-team-name">Cardinal Gibbons</span>
              <span className="review-score winner">14</span>
            </div>
            <div className="review-team">
              <div className="review-badge bg-br">BR</div>
              <span className="review-team-name">Broughton</span>
              <span className="review-score">6</span>
            </div>
          </div>
          <div className="review-info">
            <h3>Crusaders&apos; ride suffocates Broughton in conference opener</h3>
            <p>Cardinal Gibbons put on a masterclass in transition offense and defensive pressure, cruising to a 14–6 win.</p>
            <span className="review-meta">March 14, 2026 · WLC-4 Conference · 8 min read</span>
          </div>
        </article>

        <article className="review-card">
          <div className="review-scorebox">
            <div className="review-team">
              <div className="review-badge bg-cc">CC</div>
              <span className="review-team-name">Charlotte Catholic</span>
              <span className="review-score winner">11</span>
            </div>
            <div className="review-team">
              <div className="review-badge bg-pd">PD</div>
              <span className="review-team-name">Providence Day</span>
              <span className="review-score">9</span>
            </div>
          </div>
          <div className="review-info">
            <h3>Charlotte Catholic edges Providence Day in overtime thriller</h3>
            <p>An instant classic as the Cougars rally from two down in the fourth to steal one in OT.</p>
            <span className="review-meta">March 13, 2026 · Non-Conference · 6 min read</span>
          </div>
        </article>
      </div>
    </>
  );
}
