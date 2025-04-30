export const getMovieDetails = async ({ params }) => {

    const id = params.movieID
    
    try {
        const responce = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        const data = await responce.json();
        return data;

    } catch (error) {
        console.log(error);

    }

}