import type { Metadata } from "next";
import "./rankings.css";

export const metadata: Metadata = {
  title: "Power Rankings",
};

export default function Rankings() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1>THLN <span className="hl">Power Rankings</span></h1>
          <p className="page-desc">Our weekly rankings of the top teams in NC high school boys lacrosse — across all classifications.</p>
        </div>
      </div>

      <div className="rankings-layout">
        <main>
          <div className="rankings-intro">
            <div className="week-label">Week <span className="week-num">3</span> Power Rankings</div>
            <div className="date-line">Published March 15, 2026 · Updated after all games through March 14</div>
            <p className="blurb">Cardinal Gibbons holds the top spot for the third straight week after steamrolling Broughton. Athens Drive makes a big jump after going 2-0 this week against conference opponents.</p>
          </div>

          <div className="rankings-table-wrap">
            <div className="rankings-table-header">
              <h3>THLN Power Rankings — Week 3</h3>
              <span className="powered-by">Tar Heel Lax Network</span>
            </div>
            <table className="rankings-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Class</th>
                  <th>Record</th>
                  <th>Last Wk</th>
                  <th>Streak</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div className="rank-cell"><div className="rank-num top3">1</div></div></td>
                  <td><div className="team-cell"><div className="team-badge bg-cg">CG</div><div className="team-details"><div className="team-name">Cardinal Gibbons</div><div className="team-conf">WLC-4 · Raleigh</div></div></div></td>
                  <td><span className="class-pill c7a">7A</span></td>
                  <td className="record-col">6-0</td>
                  <td className="lw-col">1</td>
                  <td><span className="streak-w">W6</span></td>
                  <td><div className="movement move-same"><span className="move-arrow">—</span></div></td>
                </tr>
                <tr>
                  <td><div className="rank-cell"><div className="rank-num top3">2</div></div></td>
                  <td><div className="team-cell"><div className="team-badge bg-ad">AD</div><div className="team-details"><div className="team-name">Athens Drive</div><div className="team-conf">WLC-3 · Raleigh</div></div></div></td>
                  <td><span className="class-pill c8a">8A</span></td>
                  <td className="record-col">6-0</td>
                  <td className="lw-col">5</td>
                  <td><span className="streak-w">W6</span></td>
                  <td><div className="movement move-up"><span className="move-arrow">&#9650;</span><span className="move-num">3</span></div></td>
                </tr>
                <tr>
                  <td><div className="rank-cell"><div className="rank-num top3">3</div></div></td>
                  <td><div className="team-cell"><div className="team-badge bg-mp">MP</div><div className="team-details"><div className="team-name">Myers Park</div><div className="team-conf">LC-19 · Charlotte</div></div></div></td>
                  <td><span className="class-pill c8a">8A</span></td>
                  <td className="record-col">5-1</td>
                  <td className="lw-col">4</td>
                  <td><span className="streak-w">W4</span></td>
                  <td><div className="movement move-up"><span className="move-arrow">&#9650;</span><span className="move-num">1</span></div></td>
                </tr>
                <tr>
                  <td><div className="rank-cell"><div className="rank-num">4</div></div></td>
                  <td><div className="team-cell"><div className="team-badge bg-gh">GH</div><div className="team-details"><div className="team-name">Green Hope</div><div className="team-conf">WLC-5 · Cary</div></div></div></td>
                  <td><span className="class-pill c7a">7A</span></td>
                  <td className="record-col">5-1</td>
                  <td className="lw-col">2</td>
                  <td><span className="streak-w">W3</span></td>
                  <td><div className="movement move-down"><span className="move-arrow">&#9660;</span><span className="move-num">2</span></div></td>
                </tr>
                <tr>
                  <td><div className="rank-cell"><div className="rank-num">5</div></div></td>
                  <td><div className="team-cell"><div className="team-badge bg-cc">CC</div><div className="team-details"><div className="team-name">Charlotte Catholic</div><div className="team-conf">LC-15 · Charlotte</div></div></div></td>
                  <td><span className="class-pill c6a">6A</span></td>
                  <td className="record-col">5-1</td>
                  <td className="lw-col">6</td>
                  <td><span className="streak-w">W2</span></td>
                  <td><div className="movement move-up"><span className="move-arrow">&#9650;</span><span className="move-num">1</span></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <aside>
          <div className="sidebar-block">
            <div className="sb-header">Biggest Movers</div>
            <div className="mover-item">
              <div className="mover-arrow-big up"><span className="arrow-icon">&#9650;</span></div>
              <div className="mover-info"><div className="mover-name">Athens Drive</div><div className="mover-detail">Beat Enloe & Leesville Road this week</div></div>
              <div className="mover-change up">+3</div>
            </div>
            <div className="mover-item">
              <div className="mover-arrow-big down"><span className="arrow-icon">&#9660;</span></div>
              <div className="mover-info"><div className="mover-name">Green Hope</div><div className="mover-detail">Dropped non-conf game to Athens Drive</div></div>
              <div className="mover-change down">-2</div>
            </div>
          </div>

          <div className="sidebar-block">
            <div className="methodology">
              <h4>How we rank</h4>
              <p>THLN Power Rankings are subjective and based on the eye test, strength of schedule, quality wins, and recent performance. These are not algorithmic — they reflect what we see on the field.</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
