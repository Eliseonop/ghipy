const URL =
  "https://api.giphy.com/v1/gifs/trending?api_key=dUzW0nGwLF9MQxg2JtlvsEXa6MFWugMM";

export function getGif() {
  return fetch(URL)
    .then((n) => n.json())
    .then((n) => {
      const { data = [] } = n;
      if (Array.isArray(data)) {
        const gif = data.map((image) => image.images.downsized_medium.url);
        return gif;
      }
      return data;
    });
}
//
//obtener gift por busqueda
//api.giphy.com/v1/gifs/search?api_key=dUzW0nGwLF9MQxg2JtlvsEXa6MFWugMM&q=peru&limit=25&offset=0&rating=g&lang=en
export function getSearchGif(valor, limite = 25) {
  // return fetch(`${URL}&q=${valor}&limit=${limite}`)
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=dUzW0nGwLF9MQxg2JtlvsEXa6MFWugMM&q=${valor}&limit=25&offset=0&rating=r&lang=es`
  )
    .then((n) => n.json())
    .then((n) => {
      const { data = [] } = n;
      if (Array.isArray(data)) {
        const gif = data.map((image) => image.images.downsized_medium.url);
        return gif;
      }
      return data;
    });
}
