const apiKey = process.env.REACT_APP_API_KEY;

export default function getElement({ keyword = "metaverse" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      // We use promises but also we can apply async await
      // setNewElement(anotherElement)
      // console.log(gifs);

      return gifs;
    });
}
