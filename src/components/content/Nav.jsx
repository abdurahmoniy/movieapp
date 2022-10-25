import React, { Component } from 'react'
import Logo from '../img/tv.png'
import Menu from '../img/Menu.png'
import '../css/Main.css'


export class Nav extends Component {
    state = {
        search: ""
    }
    handleKey = (e) => {
        if(e.key === "Enter"){
            this.props.searchMv(this.state.search);
        }
    }
    render(){
    return (
        <div>
            <div className="container">
                <div className="row py-2">
                    <div className="col-md-2">
                        <div className="logo flex d-flex">
                            <img className='px-2 img-fluid' src={Logo} alt="" />
                            <h2 className='text-white pt-2'>MovieBox</h2>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                            <div class="forminput py-2">
                                <input 
                                type="search"
                                class="bg-transparent text-white" 
                                placeholder='What do you want to watch?'
                                value={this.state.search}
                                onChange={(e)=>this.setState({search: e.target.value})}
                                onKeyDown={this.handleKey}
                                />
                                <i class="fa fa-search icon"></i>
                            </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <h2 className='btn text-white fs-3'>Sign In</h2>
                        <img src={Menu} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Nav