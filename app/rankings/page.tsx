import type { Metadata } from "next";
import rankingsData from "../../data/power-rankings.json";
import "./rankings.css";

export const metadata: Metadata = {
  title: "Power Rankings",
};

function getTrend(rank: number, lastWeek: number | string) {
  if (lastWeek === "NR") return <div className="movement"><span className="move-new">NEW</span></div>;
  const lw = lastWeek as number;
  if (rank < lw) {
    return <div className="movement move-up"><span className="move-arrow">&#9650;</span><span className="move-num">{lw - rank}</span></div>;
  }
  if (rank > lw) {
    return <div className="movement move-down"><span className="move-arrow">&#9660;</span><span className="move-num">{rank - lw}</span></div>;
  }
  return <div className="movement move-same"><span className="move-arrow">—</span></div>;
}

export default function Rankings() {
  const { week, publishDate, intro, rankings, biggestMovers, droppedOut, receivingConsideration, howWeRank } = rankingsData as {
    week: number;
    publishDate: string;
    intro: string;
    rankings: Array<{
      rank: number;
      team: string;
      abbr: string;
      badgeClass: string;
      classification: string;
      classClass: string;
      record: string;
      lastWeek: number | string;
      streak: string;
      streakType: string;
    }>;
    biggestMovers: Array<{ team: string; direction: string; change: string; reason: string }>;
    droppedOut: Array<{ team: string; previousRank: number; record: string }>;
    receivingConsideration?: string;
    howWeRank?: string;
  };

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
            <div className="week-label">Week <span className="week-num">{week}</span> Power Rankings</div>
            <div className="date-line">Published {publishDate}</div>
            <p className="blurb">{intro}</p>
          </div>

          <div className="rankings-table-wrap">
            <div className="rankings-table-header">
              <h3>THLN Power Rankings — Week {week}</h3>
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
                {rankings.map((team) => (
                  <tr key={team.rank}>
                    <td>
                      <div className="rank-cell">
<div className="rank-num">{team.rank}</div>                      </div>
                    </td>
                    <td>
                      <div className="team-cell">
                        <div className={`team-badge ${team.badgeClass}`}>{team.abbr}</div>
                        <div className="team-details">
                          <div className="team-name">{team.team}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={`class-pill ${team.classClass}`}>{team.classification}</span></td>
                    <td className="record-col">{team.record}</td>
                    <td className="lw-col">{team.lastWeek}</td>
                    <td><span className={`streak-${team.streakType}`}>{team.streak}</span></td>
                    <td>{getTrend(team.rank, team.lastWeek)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Receiving Consideration */}
          {receivingConsideration && (
            <div className="receiving-consideration">
              <div className="rc-label">Receiving Consideration</div>
              <p className="rc-teams">{receivingConsideration}</p>
            </div>
          )}
        </main>

        <aside>
          {/* Biggest Movers - hidden when empty */}
          {biggestMovers && biggestMovers.length > 0 && (
            <div className="sidebar-block">
              <div className="sb-header">Biggest Movers</div>
              {biggestMovers.map((mover, i) => (
                <div className="mover-item" key={i}>
                  <div className={`mover-arrow-big ${mover.direction}`}>
                    <span className="arrow-icon">{mover.direction === "up" ? "▲" : "▼"}</span>
                  </div>
                  <div className="mover-info">
                    <div className="mover-name">{mover.team}</div>
                    <div className="mover-detail">{mover.reason}</div>
                  </div>
                  <div className={`mover-change ${mover.direction}`}>{mover.change}</div>
                </div>
              ))}
            </div>
          )}

          {/* Dropped Out - hidden when empty */}
          {droppedOut && droppedOut.length > 0 && (
            <div className="sidebar-block">
              <div className="sb-header">Dropped Out</div>
              <div className="dropped-list">
                {droppedOut.map((team, i) => (
                  <div className="dropped-team" key={i}>
                    <span className="dt-name">{team.team}</span>
                    <span className="dt-prev">Was #{team.previousRank} · Now {team.record}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How We Rank */}
          <div className="sidebar-block">
            <div className="methodology">
              <h4>How we rank</h4>
              <p>{howWeRank || "THLN Power Rankings are subjective and based on the eye test, strength of schedule, quality wins, and recent performance. These are not algorithmic — they reflect what we see on the field."}</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
