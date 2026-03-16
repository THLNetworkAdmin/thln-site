import type { Metadata } from "next";
import "./standings.css";

export const metadata: Metadata = {
  title: "Standings & Scores",
};

export default function Standings() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1>Standings <span className="hl">&amp;</span> Scores</h1>
          <p className="page-desc">Conference standings and recent scores across all NC high school boys lacrosse classifications.</p>
        </div>
      </div>

      <div className="standings-content">
        {/* Conference Standings */}
        <div className="conf-block">
          <div className="conf-header">
            <h3>WLC-3 <span className="conf-mix">8A / 7A mix</span></h3>
            <span className="conf-source">via THLN</span>
          </div>
          <table className="standings-table">
            <thead>
              <tr>
                <th>#</th><th>Team</th><th>Class</th><th>W</th><th>L</th><th>Pct</th><th>GF</th><th>GA</th><th>GD</th><th>Conf</th><th>Strk</th><th>Last 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><div className="team-cell"><div className="st-badge bg-ad">AD</div><span className="st-name">Athens Drive</span></div></td>
                <td><span className="class-pill c8a">8A</span></td>
                <td>6</td><td>0</td><td className="pct-col">1.000</td>
                <td className="gf-col">72</td><td className="ga-col">31</td><td className="gd-col gd-pos">+41</td>
                <td>2-0</td>
                <td><span className="streak-w">W6</span></td>
                <td><div className="last5"><span className="l5-dot w">W</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span></div></td>
              </tr>
              <tr>
                <td>2</td>
                <td><div className="team-cell"><div className="st-badge bg-br">BR</div><span className="st-name">Broughton</span></div></td>
                <td><span className="class-pill c8a">8A</span></td>
                <td>4</td><td>2</td><td className="pct-col">.667</td>
                <td className="gf-col">58</td><td className="ga-col">42</td><td className="gd-col gd-pos">+16</td>
                <td>1-1</td>
                <td><span className="streak-l">L1</span></td>
                <td><div className="last5"><span className="l5-dot l">L</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span><span className="l5-dot l">L</span><span className="l5-dot w">W</span></div></td>
              </tr>
              <tr>
                <td>3</td>
                <td><div className="team-cell"><div className="st-badge bg-en">EN</div><span className="st-name">Enloe</span></div></td>
                <td><span className="class-pill c8a">8A</span></td>
                <td>3</td><td>2</td><td className="pct-col">.600</td>
                <td className="gf-col">41</td><td className="ga-col">35</td><td className="gd-col gd-pos">+6</td>
                <td>1-1</td>
                <td><span className="streak-w">W1</span></td>
                <td><div className="last5"><span className="l5-dot w">W</span><span className="l5-dot l">L</span><span className="l5-dot w">W</span><span className="l5-dot l">L</span><span className="l5-dot w">W</span></div></td>
              </tr>
              <tr>
                <td>4</td>
                <td><div className="team-cell"><div className="st-badge bg-lr">LR</div><span className="st-name">Leesville Road</span></div></td>
                <td><span className="class-pill c8a">8A</span></td>
                <td>3</td><td>3</td><td className="pct-col">.500</td>
                <td className="gf-col">48</td><td className="ga-col">47</td><td className="gd-col gd-pos">+1</td>
                <td>1-1</td>
                <td><span className="streak-l">L2</span></td>
                <td><div className="last5"><span className="l5-dot l">L</span><span className="l5-dot l">L</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span></div></td>
              </tr>
              <tr>
                <td>5</td>
                <td><div className="team-cell"><div className="st-badge bg-mk">MK</div><span className="st-name">Millbrook</span></div></td>
                <td><span className="class-pill c8a">8A</span></td>
                <td>2</td><td>4</td><td className="pct-col">.333</td>
                <td className="gf-col">34</td><td className="ga-col">52</td><td className="gd-col gd-neg">-18</td>
                <td>0-2</td>
                <td><span className="streak-l">L3</span></td>
                <td><div className="last5"><span className="l5-dot l">L</span><span className="l5-dot l">L</span><span className="l5-dot l">L</span><span className="l5-dot w">W</span><span className="l5-dot w">W</span></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
