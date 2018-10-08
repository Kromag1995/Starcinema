import React, {Component} from 'react';
import "./Movie.css"

class Movie extends Component {
  constructor (props){
    super(props)
    this.state = {display : "none"}
  }
  render () {
    return (
      <div className={"Movie"}>
        <img className={"Poster"} alt={""} src={this.props.poster}/>
      </div>
    )
  }
}

export default Movie
