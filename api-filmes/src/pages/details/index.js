import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { APIKey } from "../../config/key"
import { Container } from "./style"
import { Link } from "react-router-dom"





function Details() {


    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const img_path = `https://image.tmdb.org/t/p/w500`

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const { title, overview, release_date, poster_path } = data
                const movie = {
                    id,
                    title,
                    sinopse: overview,
                    img: `${img_path}${poster_path}`,
                    releaseDate: release_date
                }
                setMovie(movie)


            })

    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.img} alt={movie.sinopse} />

                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="dataLancamento">Data de Lançamento: {movie.releaseDate}</span>
                    <Link to="/"><button>Voltar</button></Link>

                </div>
            </div>

        </Container>
    )
}

export default Details