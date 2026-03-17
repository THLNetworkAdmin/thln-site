"use client";

import "./blog.css";

export default function GamesOfTheWeek() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1>Games of the <span className="hl">Week</span></h1>
          <p className="page-desc">Week 4 · March 17, 2026</p>
        </div>
      </div>

      <div className="blog-layout">
        <article className="blog-body">
          <p className="blog-intro">
            Welcome to the THLN Games of the Week. Each week, our staff breaks down the matchups we&apos;re most excited about across NC high school lacrosse — from marquee conference showdowns to under-the-radar non-conference battles. Here&apos;s what we&apos;re watching this week.
          </p>

          <h2>Featured Games of the Week</h2>

          {/* Game 1 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-rank">#10</span>
                <span className="game-name">Community School of Davidson</span>
                <span className="game-record">(7-0)</span>
              </div>
              <span className="game-at">at</span>
              <div className="game-team">
                <span className="game-rank">#1</span>
                <span className="game-name">Hough</span>
                <span className="game-record">(5-1)</span>
              </div>
              <div className="game-details">
                <span className="game-date">Wednesday, March 18</span>
              </div>
            </div>

            <p>If there&apos;s any match-up that represents the craziness that is North Carolina High School lacrosse, it&apos;s this one. The enrollment gap between Hough and the Community School of Davidson is 2035 students, per the NCHSAA&apos;s Average Daily Membership (attendance) figures. And yet, the Spartans of CSD are on a tear to start the season: a 7-0 record with an average margin of victory of over 13 goals. This includes a 19-5 statement home win over Marvin Ridge on March 4th. This team has shown that they can light the scoreboard consistently through 7 games.</p>

            <p>But the Spartans have found their proverbial Battle of Thermopylae as they travel to Cornelius to take on our #1 ranked team in the state in the Hough Huskies. An impressive wire to wire win against a powerhouse school is one thing — but it&apos;s how they&apos;re doing that that is most impressive. Hough&apos;s defense has gone from allowing 9 goals a game in 2025 to just under 6 through 6 games. This team also gets consistent production from both their attack and their midfield. When combined with a face-off unit amongst the state&apos;s elites, Hough is a problem for anyone in the state this year.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Hough to win</strong> — CSD has the athletes to stay in front of Hough&apos;s attack, but Hough will prevail with a combination of Face-off/Time of Possession edge and top end athletes on Defense.</p>
            </div>
          </div>

          {/* Game 2 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">Green Level</span>
                <span className="game-record">(4-2)</span>
              </div>
              <span className="game-at">at</span>
              <div className="game-team">
                <span className="game-rank">#5</span>
                <span className="game-name">Middle Creek</span>
                <span className="game-record">(5-1)</span>
              </div>
              <div className="game-details">
                <span className="game-date">Wednesday, March 18</span>
              </div>
            </div>

            <p>While conference realignment robbed the people of Southwest Wake County of a budding contemporary rivalry, we&apos;re glad these 2 teams kept each other on the schedule for this year. Historically, even when one team is better on paper, this game turns into a high-level chess match where every goal, successful clear, ground ball win or unforced error is amplified. Both teams are also coming off of losses from this past Saturday&apos;s Crosse Out Cancer event in Durham <span className="editors-note">(editor&apos;s note: This is a fantastic event, we highly recommend you make the trip to Durham for the day in 2027 to support a great cause and watch some great ball)</span>. Although this game has limited bracket implications (Green Level in 8A, Middle Creek in 6A), these 2 proud programs are playing for bragging rights in what should be a fantastic game over at &quot;The Creek&quot;.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Middle Creek to win</strong> — This game should stay close in all 4 quarters, but Middle Creek&apos;s stout defense and strong goaltending will have them back in the win column on Wednesday.</p>
            </div>
          </div>

          <h2>Other Notable Games This Week</h2>

          {/* Game 3 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">Marvin Ridge</span>
                <span className="game-record">(5-1)</span>
              </div>
              <span className="game-at">at</span>
              <div className="game-team">
                <span className="game-name">Ardrey Kell</span>
                <span className="game-record">(5-1)</span>
              </div>
              <div className="game-details">
                <span className="game-date">Thursday, March 19</span>
              </div>
            </div>

            <p>Marvin Ridge has found ways to win close, low scoring games — having done so vs Charlotte Latin and Lake Norman Charter (in OT). Ardrey Kell has blown the door off of the hinge offensively since their early season 7-4 loss to Dorman (SC), averaging 16 goals the last 4 games.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Ardrey Kell to win</strong> — It&apos;s hard to pick against a surging, dynamic offense at Home in any situation — And we do expect them to be just that on Thursday. But if Marvin Ridge proves us wrong and keeps Ardrey Kell to single digits through 3 Quarters, they might just have the close game experience and confidence to pull off some March Madness on the road.</p>
            </div>
          </div>

          {/* Game 4 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">McDonogh</span>
                <span className="game-record">(MD)</span>
              </div>
              <span className="game-at">at</span>
              <div className="game-team">
                <span className="game-rank">#4</span>
                <span className="game-name">Lake Norman</span>
                <span className="game-record">(3-2)</span>
              </div>
              <div className="game-details">
                <span className="game-date">Friday, March 20</span>
              </div>
            </div>

            <p>As a staff, we wanted to take the time to acknowledge 2 things. 1) It&apos;s great for the sport of lacrosse in our state when you see local powerhouses take on national ones. 2) Lake Norman is playing top teams from 5 Different States this Year: Lambert (GA), Lucy Beckham (SC), McDonogh (MD), Foothill-Santa Ana (CA), and Hayes (OH). Their JV team is even playing teams from multiple states. We won&apos;t be making a staff prediction for this game, but we hope the battle-tested Wildcats can take it to a good team that is just getting their season started this week.</p>
          </div>

          {/* Game 5 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">Apex</span>
                <span className="game-record">(2-4)</span>
              </div>
              <span className="game-at">at</span>
              <div className="game-team">
                <span className="game-rank">#8</span>
                <span className="game-name">Apex Friendship</span>
                <span className="game-record">(4-1)</span>
              </div>
              <div className="game-details">
                <span className="game-date">Friday, March 20</span>
              </div>
            </div>

            <p>A colossal matchup in the new 8A SWAC, as the Cougars take a trip down Salem Street to face Apex Friendship. Apex came out of the gates slow to start this year but appear to have gotten their offense going over the last 2 games averaging over 13 Goals. Apex Friendship has won 4 straight games after a loss at Middle Creek but have flustered their last 4 opponents with their size and athleticism in the middle of the field.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Apex Friendship to win</strong> — The analytics up to this point would tell you that Apex Friendship would win this game by around 5-6 goals, but with a conference game against familiar foes, we believe this game will be closer. Apex Friendship has the face-off and defensive edge here, and we believe they will use that to win close.</p>
            </div>
          </div>

          <p className="blog-closing">
            That&apos;s the slate for Week 4. Good luck to all the teams hitting the field this week — we&apos;ll be watching. Follow us on X <a href="https://x.com/TarHeelLaxNet" target="_blank" rel="noopener noreferrer">@TarHeelLaxNet</a> for updates and reactions. See you next week.
          </p>

          <div className="blog-tags">
            <div className="blog-tags">
            <span className="blog-tag">Games of the Week</span>
            <span className="blog-tag">Week 4</span>
            <span className="blog-tag">NCHSAA</span>
            <span className="blog-tag">NCHSAA Lacrosse</span>
            <span className="blog-tag">NC Lacrosse</span>
            <span className="blog-tag">Hough</span>
            <span className="blog-tag">Community School of Davidson</span>
            <span className="blog-tag">Middle Creek</span>
            <span className="blog-tag">Green Level</span>
            <span className="blog-tag">Ardrey Kell</span>
            <span className="blog-tag">Marvin Ridge</span>
            <span className="blog-tag">Lake Norman</span>
            <span className="blog-tag">McDonogh</span>
            <span className="blog-tag">Apex</span>
            <span className="blog-tag">Apex Friendship</span>
            <span className="blog-tag">High School Lacrosse</span>
          </div>
          </div>
        </article>

        <aside className="blog-sidebar">
          <div className="sidebar-block">
            <div className="sb-header">
              <span>This Week&apos;s Picks</span>
            </div>
            <div className="pick-item">
              <div className="pick-teams">CSD at <strong>Hough</strong></div>
              <div className="pick-day">Wed</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams">Green Level at <strong>Middle Creek</strong></div>
              <div className="pick-day">Wed</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams">Marvin Ridge at <strong>Ardrey Kell</strong></div>
              <div className="pick-day">Thu</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams">McDonogh at Lake Norman</div>
<div className="pick-day">Fri</div>            </div>
            <div className="pick-item">
              <div className="pick-teams">Apex at <strong>Apex Friendship</strong></div>
              <div className="pick-day">Fri</div>
            </div>
          </div>

          <div className="sidebar-block">
            <div className="sb-header">
              <span>About THLN</span>
            </div>
            <div className="sidebar-about">
              <p>Your home for NC high school boys lacrosse. Follow us on <a href="https://x.com/TarHeelLaxNet" target="_blank" rel="noopener noreferrer">X @TarHeelLaxNet</a></p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
