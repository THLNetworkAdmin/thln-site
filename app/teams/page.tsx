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
const NC_PATH = "M48,28 L52,30 L58,25 L65,28 L72,22 L80,25 L88,20 L96,24 L105,18 L115,22 L125,15 L135,20 L148,12 L160,18 L172,10 L185,15 L198,8 L212,14 L228,5 L245,12 L260,4 L278,10 L295,2 L315,8 L335,1 L355,6 L375,0 L395,5 L418,2 L438,8 L458,3 L478,10 L498,5 L520,12 L540,6 L560,14 L578,8 L598,16 L615,10 L632,18 L648,22 L660,35 L668,50 L672,68 L670,85 L665,102 L658,118 L648,135 L635,148 L618,160 L600,168 L582,178 L565,190 L545,198 L528,210 L508,218 L488,225 L468,232 L445,238 L425,245 L405,250 L382,258 L360,262 L338,268 L315,272 L292,278 L268,282 L245,288 L222,285 L198,290 L175,288 L152,292 L128,288 L105,295 L82,292 L60,298 L42,295 L28,300 L18,295 L12,280 L15,262 L12,245 L16,228 L12,210 L16,192 L12,175 L16,158 L12,140 L16,122 L12,105 L16,88 L12,70 L16,52 L22,38 L32,30 Z";

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
