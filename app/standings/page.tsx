"use client";

import { useState } from "react";
import standingsData from "../../data/standings.json";
import "./standings.css";

const NCHSAA_CLASSES = ["8A", "7A", "6A", "5A", "4A", "3A", "2A"];
const NCISAA_CLASSES = ["Class I", "Class II"];

export default function Standings() {
  const { lastUpdated, classifications } = standingsData as {
    lastUpdated: string;
    classifications: Array<{
      name: string;
      teams: Array<{
        rank: number;
        team: string;
        abbr: string;
        badgeClass: string;
        classification: string;
        classClass: string;
        location: string;
        wins: number;
        losses: number;
        record: string;
        pct: string;
        gf: number;
        ga: number;
        gd: number;
        streak: string;
        streakType: string;
        logo?: string | null;
      }>;
    }>;
  };

  const [activeLeague, setActiveLeague] = useState<"NCHSAA" | "NCISAA">("NCHSAA");

  const visibleClasses = activeLeague === "NCHSAA" ? NCHSAA_CLASSES : NCISAA_CLASSES;
  const filteredClassifications = classifications.filter((c) => visibleClasses.includes(c.name));

  const totalTeams = filteredClassifications.reduce((sum, c) => sum + c.teams.length, 0);

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
        <div className="league-toggle">
          <button
            className={`league-btn ${activeLeague === "NCHSAA" ? "active" : ""}`}
            onClick={() => setActiveLeague("NCHSAA")}
          >
            NCHSAA <span className="league-sub">Public Schools · 2A–8A</span>
          </button>
          <button
            className={`league-btn ${activeLeague === "NCISAA" ? "active" : ""}`}
            onClick={() => setActiveLeague("NCISAA")}
          >
            NCISAA <span className="league-sub">Private Schools · Class I & II</span>
          </button>
        </div>

        <div className="standings-summary">{totalTeams} teams · {filteredClassifications.length} classifications</div>

        {filteredClassifications.map((cls) => (
          <div className="conf-block" key={cls.name}>
            <div className="conf-header">
              <h3>{cls.name} {activeLeague === "NCHSAA" ? "Classification" : ""}</h3>
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
                          {team.logo ? (
                            <img src={team.logo} alt={team.team} className="st-logo" />
                          ) : (
                            <div className={`st-badge ${team.badgeClass}`}>{team.abbr}</div>
                          )}
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
