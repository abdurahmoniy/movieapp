import React from 'react'
import '../../css/Main.css'

export default function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;
    return (
        <div className='container'>
            <div key={imdbID} className="cart">
                <div className="card-img">
                    <img src={Poster} class="card-img" alt="" />
                </div>
                <div class="card-body">
                    <div className="card-year">
                        {Year}
                    </div>
                    <div className="card-title">
                        {Title}
                    </div>
                    <div class="card-text">
                        <p>{Type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
