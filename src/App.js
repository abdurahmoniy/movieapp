import React, {Component} from 'react';
import './App.css';
import Movies from './components/content/Movies/Movies';
import Header from './components/Header'

export class App extends Component {

  state ={
    movies: []
  }

  componentDidMount(){
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ca30df32&s=Harry potter')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }


  searchMvs=(str)=>{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ca30df32&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render(){
    return(
      <div>
        <Header searchMv={this.searchMvs}/>
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default App