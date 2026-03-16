"use client";

import { useState, useRef, useEffect } from "react";
import teamsData from "../../data/teams-map.json";
import "./teams.css";

const CLASS_COLORS: Record<string, string> = {
  "8A": "#0B1D3A",
  "7A": "#1B5E33",
  "6A": "#5C2D91",
  "5A": "#854F0B",
  "4A": "#185FA5",
  "3A": "#8B0000",
  "2A": "#333333",
  "NCISAA I": "#6B3A8A",
};

const CLASSIFICATIONS = ["All", "8A", "7A", "6A", "5A", "4A", "3A", "2A"];

// NC bounding box for coordinate mapping
const NC_BOUNDS = {
  minLat: 33.84,
  maxLat: 36.59,
  minLng: -84.32,
  maxLng: -75.46,
};

function latLngToXY(lat: number, lng: number, width: number, height: number) {
  const x = ((lng - NC_BOUNDS.minLng) / (NC_BOUNDS.maxLng - NC_BOUNDS.minLng)) * width;
  const y = ((NC_BOUNDS.maxLat - lat) / (NC_BOUNDS.maxLat - NC_BOUNDS.minLat)) * height;
  return { x, y };
}

// Simplified NC outline path in lat/lng converted to SVG coords
const NC_PATH = "M0.0,159.4 L2.4,158.3 L18.2,151.3 L28.4,124.5 L34.8,124.5 L51.4,118.7 L64.8,118.7 L84.5,102.4 L95.6,95.4 L106.7,93.1 L112.2,83.8 L121.7,73.3 L135.1,61.7 L150.9,59.3 L165.9,51.2 L180.9,53.5 L190.4,34.9 L204.6,29.1 L208.6,0.0 L235.4,1.2 L270.2,3.5 L299.4,5.8 L318.4,4.7 L339.7,4.7 L364.2,5.8 L380.0,5.8 L402.9,5.8 L423.5,5.8 L459.0,5.8 L498.5,5.8 L519.1,5.8 L546.7,5.8 L565.7,4.7 L584.7,4.7 L602.8,4.7 L618.6,4.7 L632.8,4.7 L644.7,4.7 L667.6,4.7 L677.1,25.6 L684.2,47.7 L693.7,67.5 L699.2,83.8 L695.3,98.9 L692.9,118.7 L692.9,138.5 L687.4,157.1 L681.0,164.1 L679.5,176.9 L673.9,190.8 L659.7,201.3 L651.0,208.3 L636.8,218.8 L624.2,222.3 L618.6,226.9 L606.8,232.7 L592.6,239.7 L577.5,250.2 L570.4,257.2 L552.3,261.8 L535.7,268.8 L524.6,275.8 L513.5,283.9 L504.9,294.4 L503.3,304.9 L497.0,314.2 L473.3,310.7 L455.9,317.7 L448.0,307.2 L414.8,266.5 L384.8,229.2 L367.4,208.3 L335.0,206.0 L316.0,207.1 L297.1,206.0 L279.7,206.0 L278.1,192.0 L274.9,185.0 L267.8,173.4 L259.1,176.9 L259.1,167.6 L233.1,166.4 L202.3,164.1 L180.1,162.9 L165.9,161.7 L152.5,159.4 L139.8,167.6 L121.7,175.7 L103.5,181.5 L95.6,185.0 L79.0,186.2 L55.3,186.2 L30.0,186.2 L24.5,186.2 L15.0,186.2 L0.0,186.2 L0.0,159.4 Z";

interface Team {
  team: string;
  location: string;
  classification: string;
  record: string;
  lat: number;
  lng: number;
  gf: number;
  ga: number;
  streak: string;
}

export default function Teams() {
  const [activeClass, setActiveClass] = useState("All");
  const [hoveredTeam, setHoveredTeam] = useState<Team | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  const teams = teamsData.teams as Team[];
  const svgW = 700;
  const svgH = 320;

  const filteredTeams = activeClass === "All"
    ? teams
    : teams.filter((t) => t.classification === activeClass);

  const handleDotEnter = (team: Team, e: React.MouseEvent) => {
    setHoveredTeam(team);
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const { x, y } = latLngToXY(team.lat, team.lng, svgW, svgH);
    const scaleX = rect.width / svgW;
    const scaleY = rect.height / svgH;
    setTooltipPos({
      x: x * scaleX + rect.left - (svg.parentElement?.getBoundingClientRect().left || 0) + 14,
      y: y * scaleY + rect.top - (svg.parentElement?.getBoundingClientRect().top || 0) - 10,
    });
  };

  const classCount = (cls: string) => {
    if (cls === "All") return teams.length;
    return teams.filter((t) => t.classification === cls).length;
  };

  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1><span className="hl">Teams</span> Map</h1>
          <p className="page-desc">Every NC high school boys lacrosse program plotted across the state. Hover for details, filter by classification.</p>
        </div>
      </div>

      <div className="teams-content">
        <div className="teams-filters">
          {CLASSIFICATIONS.map((cls) => (
            <button
              key={cls}
              className={`teams-filter-btn ${activeClass === cls ? "active" : ""}`}
              onClick={() => setActiveClass(cls)}
              style={activeClass === cls && cls !== "All" ? { background: CLASS_COLORS[cls], borderColor: CLASS_COLORS[cls] } : {}}
            >
              {cls} <span className="filter-count">{classCount(cls)}</span>
            </button>
          ))}
        </div>

        <div className="map-container">
          {hoveredTeam && (
            <div
              className="map-tooltip"
              style={{ left: tooltipPos.x, top: tooltipPos.y }}
            >
              <div className="tt-name">{hoveredTeam.team}</div>
              <div className="tt-class">
                <span className="tt-pill" style={{ background: CLASS_COLORS[hoveredTeam.classification] || "#333" }}>
                  {hoveredTeam.classification}
                </span>
                <span className="tt-loc">{hoveredTeam.location}</span>
              </div>
              <div className="tt-stats">
                <div className="tt-record">{hoveredTeam.record}</div>
                <div className="tt-detail">GF: {hoveredTeam.gf} · GA: {hoveredTeam.ga} · GD: {hoveredTeam.gf - hoveredTeam.ga > 0 ? "+" : ""}{hoveredTeam.gf - hoveredTeam.ga}</div>
                {hoveredTeam.streak && hoveredTeam.streak !== "" && (
                  <div className="tt-streak">{hoveredTeam.streak}</div>
                )}
              </div>
            </div>
          )}

          <svg
            ref={svgRef}
            width="100%"
            viewBox={`0 0 ${svgW} ${svgH}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* NC outline */}
            <path
              d={NC_PATH}
              fill="var(--map-fill, #EDF4F9)"
              stroke="var(--map-stroke, #B4B2A9)"
              strokeWidth="1"
            />

            {/* All dots - dimmed if filtered */}
            {teams.map((team, i) => {
              const { x, y } = latLngToXY(team.lat, team.lng, svgW, svgH);
              const isActive = activeClass === "All" || team.classification === activeClass;
              const isHovered = hoveredTeam?.team === team.team;
              return (
                <circle
                  key={`${team.team}-${i}`}
                  cx={x}
                  cy={y}
                  r={isHovered ? 7 : 4.5}
                  fill={CLASS_COLORS[team.classification] || "#333"}
                  stroke="#fff"
                  strokeWidth={isHovered ? 1.5 : 1}
                  opacity={isActive ? 1 : 0.1}
                  style={{ cursor: isActive ? "pointer" : "default", transition: "r 0.15s, opacity 0.2s" }}
                  onMouseEnter={(e) => isActive && handleDotEnter(team, e)}
                  onMouseLeave={() => setHoveredTeam(null)}
                />
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="map-legend">
          {Object.entries(CLASS_COLORS).filter(([k]) => k !== "NCISAA I").map(([cls, color]) => (
            <div className="legend-item" key={cls}>
              <div className="legend-dot" style={{ background: color }}></div>
              <span>{cls}</span>
            </div>
          ))}
        </div>

        {/* Team count summary */}
        <div className="teams-summary">
          Showing {filteredTeams.length} of {teams.length} programs across North Carolina
        </div>
      </div>
    </>
  );
}
