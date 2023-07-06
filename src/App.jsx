// import { useState } from "react";
import "./App.css";
import GifList from "./components/GifList";
import { Link, Route } from "wouter";

export default function App() {
  // Link to manage search by keyword in gifList.js
  // const [keyword, setKeyword] = useState("nfts")

  return (
    <div className="App">
      <section className="App-content">
        <h1>GIPHY.api</h1>

        <a
          className="App-link"
          href="https://developers.giphy.com"
          target="_blanck"
        >
          <b>developers.GIPHY.com</b>
        </a>
        <a
          className="App-link2"
          href="https://developers.giphy.com/explorer"
          target="_blanck"
        >
          <b>API Explorer</b>
        </a>

        <Link to="/gif/nfts">NFTS</Link>
        <Link to="/gif/metaverse">Metaverse</Link>
        <Link to="/gif/blockchain">Blockchain</Link>
        <Link to="/gif/crypto">Cryptocurrency</Link>
        <Link to="/gif/satoshi nakamoto">Satoshi Nakamoto</Link>
        <Link to="/gif/proof of work">Proof of work</Link>
        <Link to="/gif/to the moon">To the moon</Link>
        <Link to="/gif/hodling">HodLing</Link>

        <h4> [ ... ]</h4>

        <Route component={GifList} path="/gif/:keyword" />
        {/* <GifList keyword="3D" /> */}
        {/* <button onClick={() => setKeyword("3D") }>Click here</button> */}
        {/* <GifList keyword={keyword} /> */}
      </section>
    </div>
  );
}
