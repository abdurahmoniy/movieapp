import React from 'react'
import Movie from './Movie'
import '../../css/movie.css'


export default function Movies(props) {
    const { movies } = props
    return (
        <div className="wrap">
            <div className='container movies'>
                {
                    movies.map(movie => (
                        <Movie key={movie.imdbID} {...movie} />
                    ))
                }
            </div>
        </div>
    )
}
