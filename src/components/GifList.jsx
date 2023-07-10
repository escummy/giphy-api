import { useEffect, useState } from "react";
import getGifs from "../services/getElement";
import Gif from "./Gif";

export default function GifList({ params }) {
  // We declare keyword equal to params
  const { keyword } = params;

  /** Using 2 or more separated states (click here) ->
   *
   * // useState 1: setLoading 'string'
   * const [loading, setLoading] = useState(false);
   *
   * // useState 2: setNewElement 'gifs'
   * const [gifs, setNewElement] = useState([]);
   *
   * useEffect(
   *   function () {
   *     // Before ask for gifs
   *     setLoading(true);
   *     getElement({ keyword })
   *       // After receive the answer
   *       .then((gifs) => {
   *         setNewElement(gifs);
   *         setLoading(false);
   *       });
   *   }, [keyword]);
   *
   * if (loading) return <i>Loading...</i>;
   *
   */
  /** Using 2 or more states together (check more about 'useReducer') */

  const [gifs, setGifs] = useState({ loading: false, results: [] });

  // we declare a function inside useEffect to SET and GET
  useEffect(
    function () {
      // Setter: before ask for gifs
      setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));

      // Getter: after receive the answer
      getGifs({ keyword }).then((gifs) => {
        setGifs({ loading: false, results: gifs });
      });
    },
    [keyword]
  );

  // we add condition to show loading state
  if (gifs.loading) return <i>Loading...</i>;

  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
