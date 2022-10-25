import React from 'react'
import Nav from './content/Nav'
import './css/Header.css'

export default function Header(props) {
    const {searchMv} = props;
    return (
        <div>
            <div className="hdr">
                <div className="container all">
                    <Nav searchMv={searchMv}/>
                    <div className="hdr1 container">
                        <div className="content text-white t-8">
                            John Wick 3 : <br /> Parabellum
                        </div>
                        <div className="py-2 text-white">
                            86.0 / 100  97%
                        </div>
                        <div className='text-white'>
                            John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                        </div>
                        <div className="py-4">
                            <div className="btn btn-danger">Watch Trailer</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
