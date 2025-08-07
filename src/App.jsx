import { useState } from "react";
import NavBar from "./components/navbar";
import ToggleButton from "./components/toggle-btn";
import UnwatchedCard from "./components/unwatched-card";
import Summary from "./components/summary";
import WatchedCard from "./components/watched-card";
import { tempMovieData, tempWatchedData } from "./lib/data";

export default function App() {
  const [query, setQuery] = useState("");
  const movies = tempMovieData;
  const watched = tempWatchedData;
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <NavBar query={query} setQuery={setQuery} movies={movies} />
      <main className="main">
        <div className="box">
          <ToggleButton setIsOpen={setIsOpen1} isOpen={isOpen1} />
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                <UnwatchedCard movie={movie} />
              ))}
            </ul>
          )}
        </div>

        <div className="box">
          <ToggleButton setIsOpen={setIsOpen2} isOpen={isOpen2} />
          <Summary watched={watched} />
          {isOpen2 && (
            <ul className="list">
              {watched.map((movie) => (
                <WatchedCard movie={movie} />
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
