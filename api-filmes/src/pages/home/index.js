
import { Link } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container, MovieList, Movie } from "./style";
import { useState, useEffect } from "react";




function Home() {

    const img_path = `https://image.tmdb.org/t/p/w500`

    const [movies, setMovies] = useState([])
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))

    }, [])





    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>

                            <Link to={`/details/${movie.id}`}><img src={`${img_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}

export default Home;