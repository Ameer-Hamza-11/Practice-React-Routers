export const getMovieData = async () => {
    try {
        const responce = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers`)
        const data = await responce.json();
        return data;

    } catch (error) {
        console.log(error);

    }

}