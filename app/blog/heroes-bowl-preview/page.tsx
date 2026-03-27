"use client";

import "./blog.css";

export default function HeroesBowlPreview() {
  return (
    <>
      <div className="page-hero">
        <div className="hero-field-lines"></div>
        <div className="page-hero-inner">
          <h1>6th Annual <span className="hl">Heroes Bowl</span> Preview</h1>
          <p className="page-desc">Saturday, March 28, 2026 · Ballantyne Ridge HS, Charlotte</p>
        </div>
      </div>

      <div className="blog-layout">
        <article className="blog-body">
          <p className="blog-intro">
            This Saturday, the 6th Annual Heroes Bowl returns to Ballantyne Ridge High School in Charlotte, and it might be the best slate of games yet. Organized by The StickWithUs Organization, the Heroes Bowl brings together some of the best high school lacrosse programs in the Carolinas for a full day of elite competition — all in support of the Salute to Heroes Foundation Charlotte, which honors and supports local police, firefighters, and first responders. THLN is not affiliated with the event, but we wanted to use our platform to raise awareness for a great cause and preview what should be an incredible day of lacrosse. Admission is $15 pre-sale and $20 at the gate, with all proceeds benefiting the foundation. For tickets and more info, visit <a href="https://stickwithus.org/heroes-bowl/" target="_blank" rel="noopener noreferrer">stickwithus.org/heroes-bowl</a>. Here&apos;s our game-by-game breakdown.
          </p>

          <h2>Game Previews</h2>

          {/* Game 1 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">Catawba Ridge (SC) Copperheads</span>
                <span className="game-record">(3-6)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-name">Ballantyne Ridge Wolves</span>
                <span className="game-record">(3-5)</span>
              </div>
              <div className="game-details">
                <span className="game-date">9:00 AM</span>
              </div>
            </div>

            <p>An intriguing matchup between 2 of the newest schools in the greater Charlotte area, with Catawba Ridge (out of Fort Mill, SC) in year 7 and Ballantyne Ridge (the hosts of the event) in just their 2nd year. While both teams are relatively inexperienced in terms of Seniority (just 3 Seniors between the 2 teams), both teams have young offensive talent that has been tested against solid competition within their respective states. Ballantyne Ridge has the home field advantage and is coming off of a confidence building win vs Indian Land (SC), while Catawba Ridge (SC) is coming off of a loss to a respectable Nation Ford (SC) team.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Ballantyne Ridge to win</strong> — with a 9AM game, anything can happen. But we think the homefield advantage, faceoff advantage, and playmaking ability of the young Ballantyne Ridge attackman will help them prevail.</p>
            </div>
          </div>

          {/* Game 2 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">Fort Mill (SC) Yellow Jackets</span>
                <span className="game-record">(9-1)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-name">Page Pirates</span>
                <span className="game-record">(9-3)</span>
              </div>
              <div className="game-details">
                <span className="game-date">10:30 AM</span>
              </div>
            </div>

            <p>A really great matchup here between two 9-win teams currently playing with a ton of confidence. Page has lost 3 games by a combined 5 goals and has won their last 3 games by an average 16 goal margin. Fort Mill has 1 close loss and has won their last 7 games since the 6-2 loss to Mauldin (SC). In a game like this, where both teams have been tested, the margins are razor thin.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Fort Mill (SC) to win</strong> — We expect a close one here, but we think that the size, structure, and confidence of this Yellow Jackets defense will help them shut down the Pirates and get them their 10th win on the year.</p>
            </div>
          </div>

          {/* Game 3 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-name">CMPD Hornets</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-name">CFD Inferno</span>
              </div>
              <div className="game-details">
                <span className="game-date">12:00 PM</span>
              </div>
            </div>

            <p>Look, there&apos;s multiple top 10 teams in the state playing in this event. Some of whom might be amongst the best in the Southeastern United States. But there is, has, and never will be a rivalry quite like a Police Department vs Fire Department game. Also, the game last year was a 5-4 game in which the Police Department was able to serve justice, so all bets are off here.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>America (USA) to win</strong> — We&apos;re not going to pretend like we know anything about the players here, but please go to the event and watch this game and support our heroes. It may even end up being the best game of the day.</p>
            </div>
          </div>

          {/* Game 4 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-rank">#9</span>
                <span className="game-name">Ardrey Kell Knights</span>
                <span className="game-record">(7-1)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-name">Weddington Warriors</span>
                <span className="game-record">(2-4)</span>
              </div>
              <div className="game-details">
                <span className="game-date">1:30 PM</span>
              </div>
            </div>

            <p>If you like offense, this is going to be the game you&apos;ll want to see. Ardrey Kell has been a juggernaut offensively since an early season 7-4 loss to a strong Dorman (SC) team, averaging 16 goals a game in the process. Weddington has played one of the toughest schedules in the state at this point, losing 4 games to top teams by an average margin of 3 goals. The least amount of goals they&apos;ve scored in a game was 7, which is pretty impressive given their competition and the fact that some teams (perceived as being better) have scored less in their worst games offensively. We&apos;re not oddsmakers, but it would not surprise us if 25+ goals were scored in this one.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Ardrey Kell to win</strong> — With a battle tested team like Weddington, who also has a game tonight against a good Charlotte Christian team, anything can happen. We do think that Kell has a slightly better defense, slightly better offense, and the best player on the field, and we think that will equate to a close, but high-scoring win for the Knights.</p>
            </div>
          </div>

          {/* Game 5 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-rank">#3</span>
                <span className="game-name">Middle Creek Mustangs</span>
                <span className="game-record">(8-1)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-rank">#8</span>
                <span className="game-name">Providence Day Chargers</span>
                <span className="game-record">(5-3)</span>
              </div>
              <div className="game-details">
                <span className="game-date">3:00 PM</span>
              </div>
            </div>

            <p>Not only is this a matchup of 2 current Top 10 teams in our rankings, it&apos;s also a rematch of last year&apos;s event! Providence Day provided the shocking upset and thwarted what was a high-octane MC offense last year by a score of 8-5. Providence Day comes into this game after a loss to #5 Charlotte Catholic by a score of 17-6 and have only lost to really good teams. The Middle Creek Mustangs are surging since a 7-5 loss to Topsail. No other team in the state (with the exception of Ardrey Kell, per our research) can say that the most goals they have given up in a game this year is 7, and if you watch them, you see why. They have great size, structure, athleticism, and a top 3 goalie in the state.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Middle Creek to win</strong> — While we expect the Mustangs to get revenge for last year&apos;s loss on the backs of their defense and goaltending, we do expect some resistance from a familiar foe, with a well-coached offense, that has caused some problems for Middle Creek in the past.</p>
            </div>
          </div>

          {/* Game 6 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-rank">#5</span>
                <span className="game-name">Charlotte Catholic Cougars</span>
                <span className="game-record">(5-2)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-name">Chapin (SC) Eagles</span>
                <span className="game-record">(8-2)</span>
              </div>
              <div className="game-details">
                <span className="game-date">5:30 PM</span>
              </div>
            </div>

            <p>There&apos;s a couple of interesting storylines for this game. One is that this a battle between a historic NC powerhouse vs a rising power in the state of SC. Two is that despite their lacrosse prowess, both schools are not the largest lacrosse communities: Catholic with ~1,200 students and Chapin with ~1,600. Chapin comes into this one on a 3-game winning streak that has seen an eye-popping average goals per game of 19 in that span. Their losses are to Wando (SC), more on them later, and Southlake Carroll (TX) and both games were relatively close. This is a dynamic, senior led team that can cause problems to most teams in this part of the country. Charlotte Catholic, like Chapin, has played top competition and they are coming into this game on a 2-game win streak. Catholic underwent one of the toughest stretches a team can ask for, having lost to Georgia Powerhouse Lambert in OT and our #1 Ranked team in the state, Hough, back to back. Having said that, this team is not short on confidence. Their 17-6 win vs #8 Providence Day on Wednesday was one of the most complete and impressive performances in the state this year, having started the game on a 12-0 run. Well-structured defense, patient offense, and a top-3 face off guy in the state have been the calling card for the Cougars. This is a high-level lacrosse game, one worthy of the prime-time slots (if not for what&apos;s to come in Games 7 and 8).</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Charlotte Catholic to win</strong> — We expect both teams to go on runs of around 3-4 goals in various spans of this game, but we think Catholic will prevail in the end. The face-off advantage will yield the time-of-possession Catholic is looking for to get hot and stay hot.</p>
            </div>
          </div>

          {/* Game 7 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-rank">#1</span>
                <span className="game-name">Hough Huskies</span>
                <span className="game-record">(7-1)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-rank">#4</span>
                <span className="game-name">Cardinal Gibbons Crusaders</span>
                <span className="game-record">(8-2)</span>
              </div>
              <div className="game-details">
                <span className="game-date">7:00 PM</span>
              </div>
            </div>

            <p>This Top-5 matchup is another Heroes Bowl rematch from last year, where Cardinal Gibbons made a statement 17-6 win against the Huskies. These teams, however, are very different than a year ago, and we expect that to play into a tight, high-level game. The Crusaders are coming off of an impressive win vs Holly Springs High School and have won their last 6 games. They had to replace 5 starters on offense, 2 starting defenseman, and a starting faceoff guy — and it showed early in the year vs tough competition — but the Crusaders are continuing to grow in confidence. One thing that stands out about this team is the amount of depth they use relative to last year. Gibbons was viewed as a team that had multiple midfielders who would play almost the entire game. This year&apos;s team gets more guys through and that&apos;s a big advantage in games from April onwards. They boast one of the best attackman in the state, who is a matchup nightmare for anyone on any night. Hough, on the other hand, is a year more experienced and is a confident squad, having won their last 5 games, with relative ease, and versus great competition. Average goals for/against margin in that span is 12-6. They boast a top-3 faceoff guy, an experienced smart offense, and the size and depth needed on the defensive end to win on any given night. While we don&apos;t expect this game to be the fastest paced, it could possibly be the most high-level matchup with every turnover, goal, and groundball meaning more and more as the game goes on.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Cardinal Gibbons to win</strong> — We&apos;re going to go with the upset here in a close one. This is a completely different team from when they played Topsail, and even Lake Norman just a few weeks ago. The offense is starting to click, and this team is hungry for a signature win this season. Gibbons plays a physically demanding style of lacrosse that can wear anyone down. We think come 4th quarter, this will be the case — but we acknowledge that if Hough can keep it close, they have the seniority and athletes to capitalize and prove us wrong. We expect a great game here at 7:00 PM.</p>
            </div>
          </div>

          {/* Game 8 */}
          <div className="game-block">
            <div className="game-matchup">
              <div className="game-team">
                <span className="game-rank">#6</span>
                <span className="game-name">Lake Norman Wildcats</span>
                <span className="game-record">(6-3)</span>
              </div>
              <span className="game-at">vs</span>
              <div className="game-team">
                <span className="game-name">Wando (SC) Warriors</span>
                <span className="game-record">(3-4)</span>
              </div>
              <div className="game-details">
                <span className="game-date">8:30 PM</span>
              </div>
            </div>

            <p>The final game of the night is versus 2 teams who have tested themselves early and are far better than their records indicate. Lake Norman is undefeated vs teams in the State of NC, with losses to Lambert (GA), Lucy Beckham (SC) and McDonogh (MD), a team viewed by many pundits as being one of the 25 best in the entire country. Lake Norman lost an incredibly talented senior class, but the level of play didn&apos;t dip with this year&apos;s group. The offense continues to be a smart one that can attack from all angles and is initiated by dynamic attackman. Their defense has size and structure, and the goaltending has been solid. Our staff has been torn on Lake Norman&apos;s rank for weeks now, but the way they are playing, they have an opportunity to jump back into the top 5 with a win here. Wando has played an equally challenging schedule vs many top teams in the Southeast US. They are a Junior-Sophomore heavy group that shoots the ball at a ridiculous 41% clip. While not the most dynamic offense, they share the ball well and can bury the shots when needed. The defense has been tested, but they&apos;re also very athletic and are very good at clearing and handling the ball.</p>

            <div className="staff-prediction">
              <span className="prediction-label">Staff Prediction</span>
              <p><strong>Lake Norman to win</strong> — We think that Lake Norman wins this game on the backs of their faceoff unit and offense. We perceive the advantage at the dot to be the only big gap between these 2 teams, and as a result, we believe they will own the time-of-possession and have some success on offense. Having said that, Wando has the physicality defensively and the lacrosse IQ to keep this game close, and maybe even get themselves back to .500 on the year.</p>
            </div>
          </div>

          <p className="blog-closing">
            That&apos;s the full slate for the 6th Annual Heroes Bowl. Eight games, four ranked matchups, two states, and one great cause. Whether you&apos;re there in person or following along from home, it&apos;s going to be a special day for lacrosse in the Carolinas. Support our heroes, and enjoy the games. Follow us on X <a href="https://x.com/TarHeelLaxNet" target="_blank" rel="noopener noreferrer">@TarHeelLaxNet</a> for live updates throughout the day.
          </p>

          <div className="blog-tags">
            <span className="blog-tag">Heroes Bowl</span>
            <span className="blog-tag">Preview</span>
            <span className="blog-tag">Hough</span>
            <span className="blog-tag">Cardinal Gibbons</span>
            <span className="blog-tag">Middle Creek</span>
            <span className="blog-tag">Providence Day</span>
            <span className="blog-tag">Charlotte Catholic</span>
            <span className="blog-tag">Ardrey Kell</span>
            <span className="blog-tag">Lake Norman</span>
            <span className="blog-tag">Page</span>
            <span className="blog-tag">NCHSAA</span>
            <span className="blog-tag">NCHSAA Lacrosse</span>
            <span className="blog-tag">NC Lacrosse</span>
            <span className="blog-tag">High School Lacrosse</span>
            <span className="blog-tag">StickWithUs</span>
          </div>
        </article>

        <aside className="blog-sidebar">
          <div className="sidebar-block">
            <div className="sb-header">
              <span>Schedule</span>
            </div>
            <div className="pick-item">
              <div className="pick-teams">Catawba Ridge vs Ballantyne Ridge</div>
              <div className="pick-day">9:00</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams">Fort Mill vs Page</div>
              <div className="pick-day">10:30</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams">CMPD vs CFD</div>
              <div className="pick-day">12:00</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams"><strong>#9 Ardrey Kell</strong> vs Weddington</div>
              <div className="pick-day">1:30</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams"><strong>#3 Middle Creek</strong> vs #8 Providence Day</div>
              <div className="pick-day">3:00</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams"><strong>#5 Charlotte Catholic</strong> vs Chapin (SC)</div>
              <div className="pick-day">5:30</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams">#1 Hough vs <strong>#4 Cardinal Gibbons</strong></div>
              <div className="pick-day">7:00</div>
            </div>
            <div className="pick-item">
              <div className="pick-teams"><strong>#6 Lake Norman</strong> vs Wando (SC)</div>
              <div className="pick-day">8:30</div>
            </div>
          </div>

          <div className="sidebar-block">
            <div className="sb-header">
              <span>Event Info</span>
            </div>
            <div className="sidebar-about">
              <p><strong>Location:</strong> Ballantyne Ridge HS, Charlotte</p>
              <p><strong>Admission:</strong> $15 pre-sale / $20 at gate</p>
              <p><strong>Benefiting:</strong> Salute to Heroes Foundation Charlotte</p>
              <p><a href="https://stickwithus.org/heroes-bowl/" target="_blank" rel="noopener noreferrer">Get Tickets →</a></p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
