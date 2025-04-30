export const getMovieData = async () => {
    try {
        const responce = await fetch(`https://www.omdbapi.com/?apikey=d46315c5&s=avengers`)
        const data = await responce.json();
        return data;

    } catch (error) {
        console.log(error);

    }

}