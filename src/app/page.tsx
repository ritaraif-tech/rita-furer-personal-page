import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <header className="bar">
        <span>Issue No. 01 — The personal edition</span>
        <nav>
          <a href="#contents">Contents</a>
          <a href="#f6">Work</a>
          <a href="#f7">Style</a>
          <a href="#f9">Last page</a>
        </nav>
      </header>

      <section className="cover">
        <h1 className="masthead">RITA</h1>

        <div className="coverlines left">
          <ul>
            <li className="lead"><a href="#f1"><small>Origins</small>From Kazakhstan to the Scan Room</a></li>
            <li><a href="#f3"><small>The Milan Edit</small>Sundays at the Duomo</a></li>
          </ul>
        </div>

        <div className="portrait">
          <span className="placeholder-label">Portrait — to come</span>
        </div>

        <div className="coverlines right">
          <ul>
            <li className="lead"><a href="#f7"><small>The Collection</small>The Pendant That Explains Everything</a></li>
            <li><a href="#f6"><small>Career Story</small>The Day the Room Applauded</a></li>
          </ul>
        </div>

        <div className="tagline-strip">
          <span>UX &amp; Usability Lead at GE HealthCare</span>
          <span>Industrial designer by training</span>
          <span>Painter since the age of two</span>
        </div>
      </section>

      <section className="index" id="contents">
        <div>
          <h4 className="reveal">Contents</h4>
          <p className="editor reveal">Minimalistic, with a twist — which is what I love everywhere: in jewelry, clothes, interiors, food, and design.</p>
        </div>
        <ol className="reveal">
          <li><small>01 · Kazakhstan</small><a href="#f1">A red chick</a></li>
          <li><small>02 · Israel</small><a href="#f2">Sixteen, and on my own</a></li>
          <li><small>03 · Milan</small><a href="#f3">Sundays in Milan</a></li>
          <li><small>04 · Israel</small><a href="#f4">The door that opened a door</a></li>
          <li><small>05 · Career</small><a href="#f5">From fields to cyber centers</a></li>
          <li><small>06 · GE HealthCare</small><a href="#f6">Finding my vocation</a></li>
          <li><small>07 · Style</small><a href="#f7">Minimalistic, with a twist</a></li>
          <li><small>08 · Family</small><a href="#f8">Weekends</a></li>
          <li><small>09 · Next</small><a href="#f9">The blank canvas</a></li>
        </ol>
      </section>

      <article className="feature" id="f1">
        <div className="kicker reveal"><b>01</b> Origins · Kazakhstan</div>
        <h3 className="reveal">A red chick</h3>
        <div className="cols reveal">
          <p>My first painting was a small red chick, a watercolor &quot;abstract&quot; I made in kindergarten in Kazakhstan when I was three. My mother kept it for years, until it was lost somewhere along our many moves. I still think of it as the beginning of everything.</p>
          <p>I have been drawing and painting since I was two. I graduated from a school of arts, painted every day, and held personal exhibitions as a teenager.</p>
        </div>
      </article>

      <article className="feature dark" id="f2">
        <div className="kicker reveal"><b>02</b> Arrival · Israel</div>
        <h3 className="reveal">Sixteen, and on my own</h3>
        <div className="cols reveal">
          <p>At 16 I moved to Israel alone, as part of the NAALE program, together with teenagers from across the former USSR. The hardest part was being far from my family.</p>
          <p>They arrived a year later, and that day I felt the worst was behind me and everything from then on would be great.</p>
        </div>
        <p className="pull reveal">It has been.</p>
      </article>

      <article className="feature" id="f3">
        <div className="kicker reveal"><b>03</b> Education · Milan</div>
        <div className="split">
          <div>
            <h3 className="reveal">Sundays in Milan</h3>
            <div className="cols reveal" style={{ columns: 1 }}>
              <p>I earned my Master&apos;s degree in Industrial Design at the Politecnico di Milano. Milan taught me more than design.</p>
              <p>On Sundays I took long walks around the Duomo and watched Italians, men and women, elegantly dressed, having breakfast or lunch. That is where my love for fashion, accessories and the way things are put together took root.</p>
            </div>
          </div>
          <div className="frame reveal"><span className="placeholder-label">Milan, Sunday — image to come</span></div>
        </div>
      </article>

      <article className="feature" id="f4">
        <div className="kicker reveal"><b>04</b> Turning point · Israel</div>
        <h3 className="reveal">The door that opened a door</h3>
        <div className="cols reveal">
          <p>Back in Israel I worked as an industrial designer at Klil, an aluminum windows company. I liked the job, but something was missing. I have always loved graphics, visuals and shaping experiences.</p>
          <p>So, even in a very technical, industrial environment, I built a simple tablet app that let customers choose a colorful cladding for the internal aluminum doors I was designing.</p>
          <p>That small project inspired me so much that in 2015 I enrolled in an online UX course. By 2016 I was working as a UX Designer.</p>
        </div>
      </article>

      <article className="feature" id="f5">
        <div className="kicker reveal"><b>05</b> Range</div>
        <h3 className="reveal">From fields to cyber centers</h3>
        <div className="cols reveal" style={{ columns: 1, maxWidth: 720 }}>
          <p>Since then I have designed for very different worlds, from agricultural websites to applications for cyber center orchestration. Each one taught me how to understand people whose work looks nothing like mine.</p>
        </div>
      </article>

      <article className="feature dark" id="f6">
        <div className="kicker reveal"><b>06</b> Work · GE HealthCare</div>
        <h3 className="reveal">Finding my vocation</h3>
        <div className="cols reveal">
          <p>Today I am the UX &amp; Usability Lead at GE HealthCare, and this is where I found my vocation. I test and evaluate features under development with real clinicians, the real users.</p>
          <p>After many iterations, finding the way to make their lives easier and their workflows faster gives me deep satisfaction and a sense of belonging to something big that helps humanity.</p>
          <p>One moment I&apos;ll always remember: when I presented a feature that lets users customize and hide controls directly on the scan screen, the room applauded. Our application specialists had been asking for it for years, and finally they had it.</p>
        </div>
        <p className="pull reveal">The room applauded.</p>
      </article>

      <article className="feature" id="f7">
        <div className="kicker reveal"><b>07</b> Style</div>
        <div className="split">
          <div>
            <h3 className="reveal">Minimalistic, with a twist</h3>
            <div className="cols reveal" style={{ columns: 1 }}>
              <p>My passion for art lives on in statement jewelry. I can&apos;t walk past a bijoux store without going in, and I bring pieces home from every trip abroad. By now I can hardly find room to store them all.</p>
              <p>The piece I wear most lately is a long black cord with a U-shaped pendant in silver metal, by Adolfo Dominguez, found while traveling in Portugal. It is minimalistic with a twist, which is what I love everywhere: in jewelry, clothes, interiors, food, and design.</p>
            </div>
          </div>
          <div className="frame reveal"><span className="placeholder-label">The pendant — image to come</span></div>
        </div>
      </article>

      <article className="feature" id="f8">
        <div className="kicker reveal"><b>08</b> Life · Israel</div>
        <h3 className="reveal">Weekends</h3>
        <div className="cols reveal" style={{ columns: 1, maxWidth: 720 }}>
          <p>My weekends belong to my family: my wonderful husband and our amazing seven-year-old daughter. We travel around Israel, a small country with so many beautiful corners, and every Saturday we have lunch at my husband&apos;s parents&apos;. And yes, I love to sleep in.</p>
        </div>
      </article>

      <section className="ending" id="f9">
        <div className="kicker reveal" style={{ justifyContent: "center" }}><b>09</b> The last page</div>
        <div className="canvas-blank reveal" role="img" aria-label="An empty white canvas"></div>
        <h3 className="reveal">The blank canvas</h3>
        <p className="reveal">At some point I stopped painting. I think I ran out of inspiration for a while. But I know I will start again.</p>
        <p className="reveal"><em>All the tools and colors are already waiting.</em></p>
        <p className="fin">To be continued</p>
      </section>

      <RevealOnScroll />
    </>
  );
}
