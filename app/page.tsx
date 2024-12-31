"use client"

import { useEffect, useState } from "react";


export default function Home() {

  const [balloons, setBalloons] = useState(0);
  const [balloonsPerClick, setBalloonsPerClick] = useState(1);
  const [balloonsPerSecond, setBalloonsPerSecond] = useState(0);

  const [upgradesClicks, setUpgradesClicks] = useState([
    { id: 1, name: "Beers", value: 0.1, price: 100, number: 0, url: "/clicks/beers.png" },
    { id: 2, name: "Tickets", value: 0.2, price: 250, number: 0, url: "/clicks/tickets.png" },
    { id: 3, name: "Tactics", value: 0.5, price: 500, number: 0, url: "/clicks/presentation.png" },
    { id: 4, name: "Jerseys", value: 1.2, price: 2500, number: 0, url: "/clicks/jersey.png" },
    { id: 5, name: "Football Boots", value: 2, price: 7000, number: 0, url: "/clicks/football-boots.png" },
    { id: 6, name: "Water Bottles", value: 5, price: 20000, number: 0, url: "/clicks/water-bottle.png" },
    { id: 7, name: "Goal Posts", value: 10, price: 50000, number: 0, url: "/clicks/goal-post.png" },
    { id: 8, name: "League", value: 25, price: 100000, number: 0, url: "/clicks/league.png" },
    { id: 9, name: "Goaaaal", value: 50, price: 250000, number: 0, url: "/clicks/goal.png" },
    { id: 10, name: "Television", value: 100, price: 1000000, number: 0, url: "/clicks/television.png" },
  ]);

  const [upgradesSeconds, setUpgradesSeconds] = useState([
    { id: 1, name: "Barcelona", value: 0.1, price: 100, number: 0, url: "/clubs/barcelona.png" },
    { id: 2, name: "Real Madrid", value: 0.2, price: 250, number: 0, url: "/clubs/real-madrid.png" },
    { id: 3, name: "OM", value: 0.5, price: 500, number: 0, url: "/clubs/olympique-de-marseille.png" },
    { id: 4, name: "PSG", value: 1.2, price: 2500, number: 0, url: "/clubs/paris-saint-germain.png" },
    { id: 5, name: "Arsenal", value: 2, price: 7000, number: 0, url: "/clubs/arsenal.png" },
    { id: 6, name: "Manchester City", value: 5, price: 20000, number: 0, url: "/clubs/manchester-city.png" },
    { id: 7, name: "Inter Milano", value: 10, price: 50000, number: 0, url: "/clubs/internazionale-milano.png" },
    { id: 8, name: "Juventus", value: 25, price: 100000, number: 0, url: "/clubs/juventus.png" },
    { id: 9, name: "Dortmund", value: 50, price: 250000, number: 0, url: "/clubs/borusia-dortmund.png" },
    { id: 10, name: "Bayern", value: 100, price: 1000000, number: 0, url: "/clubs/bayen-munchen.png" },
  ]);


  // Local Save
  useEffect(() => {
    localStorage.setItem("balloons", JSON.stringify(balloons));
    localStorage.setItem("balloonsPerClick", JSON.stringify(balloonsPerClick));
    localStorage.setItem("balloonsPerSecond", JSON.stringify(balloonsPerSecond));
    localStorage.setItem("upgradesClicks", JSON.stringify(upgradesClicks));
    localStorage.setItem("upgradesSeconds", JSON.stringify(upgradesSeconds));
  }, [balloons, balloonsPerClick, balloonsPerSecond, upgradesClicks, upgradesSeconds]);

  useEffect(() => {
    const storedBalloons = localStorage.getItem("balloons");
    const storedBalloonsPerClick = localStorage.getItem("balloonsPerClick");
    const storedBalloonsPerSecond = localStorage.getItem("balloonsPerSecond");
    const storedUpgradesClicks = localStorage.getItem("upgradesClicks");
    const storedUpgradesSeconds = localStorage.getItem("upgradesSeconds");

    if (storedBalloons) setBalloons(JSON.parse(storedBalloons));
    if (storedBalloonsPerClick) setBalloonsPerClick(JSON.parse(storedBalloonsPerClick));
    if (storedBalloonsPerSecond) setBalloonsPerSecond(JSON.parse(storedBalloonsPerSecond));
    if (storedUpgradesClicks) setUpgradesClicks(JSON.parse(storedUpgradesClicks));
    if (storedUpgradesSeconds) setUpgradesSeconds(JSON.parse(storedUpgradesSeconds));
  }, []);

  function setNewBalloons(id: number, price: number, value: number) {
    if (price > balloons) return;
    let newBalloons = balloons - price;
    setBalloons(parseFloat(newBalloons.toFixed(2)));
    setBalloonsPerClick(balloonsPerClick + value);
    setUpgradesClicks((prev) => prev.map((upgrade) => {
        if (upgrade.id === id) {
            upgrade.number = upgrade.number + 1;
            upgrade.price = upgrade.price * 1.1;
            upgrade.price = parseFloat(upgrade.price.toFixed(2));
        }
        return upgrade;
    }));
  }

  function setNewBallonsPerSecond(id: number, price: number, value: number){
    if (price > balloons) return;
    let newBalloons = balloons - price;
    setBalloons(parseFloat(newBalloons.toFixed(2)));
    setBalloonsPerSecond(balloonsPerSecond + value);
    setUpgradesSeconds((prev) => prev.map((upgrade) => {
      if (upgrade.id === id) {
          upgrade.number = upgrade.number + 1;
          upgrade.price = upgrade.price * 1.1;
          upgrade.price = parseFloat(upgrade.price.toFixed(2));
      }
      return upgrade;
    }));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prev) => parseFloat((prev + balloonsPerSecond).toFixed(2)));
    }, 1000);

    return () => clearInterval(interval);
  }, [balloonsPerSecond]);

  return (
    <main>
      <section>
        <h1>Football Clicker</h1>
        <article id="stats">
          <span id="balloons"><strong>{balloons.toFixed(2)}</strong> Balloons</span>
          <span id="balloons_per">{balloonsPerClick.toFixed(2)}/c - {balloonsPerSecond.toFixed(2)}/s</span>
        </article>
        <div 
          id="clicker"
          onClick={() => {
            setBalloons((prev) => parseFloat((prev + balloonsPerClick).toFixed(2)));
          }}
        >
          <img src="/football.png" alt="clicker" />
          </div>
        <a id="credits" href="https://twitter.com/dev_davidJs">davidJs</a>
      </section>
      <section className="upgrades">
        <article>
          <h2>Upgrade <span>per clicks</span></h2>
          <ul className="upgrades-list">
            {upgradesClicks.map((upgrade) => (
              <li 
                key={upgrade.id} 
                className="upgrades-item"
                onClick={() => {
                  setNewBalloons(upgrade.id, upgrade.price, upgrade.value);
                }}
              >
                <img className="icon" src={upgrade.url} alt={upgrade.name} />
                <div className="infos">
                  <h3 className="name">{upgrade.name} - {upgrade.number}</h3>
                  <span className="value">+{upgrade.value}/click</span>
                  <span className="price"> - {upgrade.price} Balloons</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Upgrade <span>per seconds</span></h2>
          <ul className="upgrades-list">
            {upgradesSeconds.map((upgrade) => (
              <li 
                key={upgrade.id} 
                className="upgrades-item"
                onClick={() => {
                  setNewBallonsPerSecond(upgrade.id, upgrade.price, upgrade.value);
                }}
              >
                <img className="icon" src={upgrade.url} alt={upgrade.name} />
                <div className="infos">
                  <h3 className="name">{upgrade.name} - {upgrade.number}</h3>
                  <span className="value">+{upgrade.value}/s</span>
                  <span className="price"> - {upgrade.price} Balloons</span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
