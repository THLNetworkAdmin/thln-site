import type { Metadata } from "next";
import standingsData from "../../data/standings.json";
import "./standings.css";

export const metadata: Metadata = {
  title: "Standings",
};

export default function Standings() {
  const { lastUpdated, classifications } = standingsData;

  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1><span className="hl">Standings</span></h1>
          <p className="page-desc">Full standings across all NC high school boys lacrosse classifications. Updated {lastUpdated}.</p>
        </div>
      </div>

      <div className="standings-content">
        {classifications.map((cls) => (
          <div className="conf-block" key={cls.name}>
            <div className="conf-header">
              <h3>{cls.name} Classification</h3>
              <span className="conf-source">{cls.teams.length} teams · via THLN</span>
            </div>
            <table className="standings-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th>Location</th>
                  <th>Record</th>
                  <th>Win %</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>Streak</th>
                </tr>
              </thead>
              <tbody>
                {cls.teams.map((team) => {
                  const gdClass = team.gd > 0 ? "gd-pos" : team.gd < 0 ? "gd-neg" : "gd-zero";
                  const gdStr = team.gd > 0 ? `+${team.gd}` : `${team.gd}`;

                  return (
                    <tr key={team.team}>
                      <td>{team.rank}</td>
                      <td>
                        <div className="team-cell">
                          <div className={`st-badge ${team.badgeClass}`}>{team.abbr}</div>
                          <span className="st-name">{team.team}</span>
                        </div>
                      </td>
                      <td className="location-col">{team.location}</td>
                      <td className="record-col">{team.record}</td>
                      <td className="pct-col">{team.pct}</td>
                      <td className="gf-col">{team.gf}</td>
                      <td className="ga-col">{team.ga}</td>
                      <td className={`gd-col ${gdClass}`}>{gdStr}</td>
                      <td><span className={`streak-${team.streakType}`}>{team.streak}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
