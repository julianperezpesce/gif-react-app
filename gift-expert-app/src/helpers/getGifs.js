

export const getGif = async( category ) => {

    const api_key = "MCtY2iG0RPl1DI6toPStpD5q4lujwTRE";
    const q = encodeURI( category );
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ q }&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // Sin Destructuracion
    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
        // Con Destructuracion
    // const gifs = data.map ( ({ id, title, url }) => {
    //     return {
    //         id: id,
    //         title: title,
    //         url: images?.downsized_medium.url
    //     }
    // })
    return gifs;
}

// getGif();