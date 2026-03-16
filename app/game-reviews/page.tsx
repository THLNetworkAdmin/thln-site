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

        <div style={{ padding: "48px 0", textAlign: "center" }}>
            <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "16px", color: "var(--text-light)", fontStyle: "italic" }}>
              Game reviews coming soon. Stay tuned for in-depth coverage of NC high school lacrosse.
            </p>
          </div>
      </div>
    </>
  );
}
