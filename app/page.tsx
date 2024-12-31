"use client"

export default function Home() {

  return (
    <main>
      <section>
        <h1>Football Clicker</h1>
        <article id="stats">
          <span id="balloons"><strong>0 Ballons</strong></span>
          <span id="balloons_per">1/c - 1/s</span>
        </article>
        <div id="clicker"></div>
        <a id="credits" href="https://twitter.com/dev_davidJs">davidJs</a>
      </section>
      <section>
        <article>
          <h2>Upgrade <span>per clicks</span></h2>
        </article>
        <article>
          <h2>Upgrade <span>per seconds</span></h2>
        </article>
        <article>
          <h2>Upgrade <span>skills</span></h2>
        </article>
      </section>
    </main>
  );
}
