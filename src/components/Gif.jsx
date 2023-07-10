import "./Gif.css"

export default function gifs ({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <h6>{title}</h6>
      <img src={url} alt={title} />
    </a>
  );
}
