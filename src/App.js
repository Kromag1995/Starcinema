import React from 'react';
import billboard from "./billboard"
import "./App.css"

class Slideshow extends React.Component {
  constructor(props){
    super(props);
    this.state={hover : ""}
  }
  scroll (n){
    window.scrollBy(n, 0)
  }
  start(n){
    this.timeId= setInterval(((b) => this.scroll(n, 0)),1)
  }
  stop(){
    clearInterval(this.timeId)
  }
  render (){
    return (
      <div className={"Slideshow"}>
        {billboard}
        <button className={"prev"} onMouseOver={() => this.start(-1)} onMouseLeave={() => this.stop()}>&#10094;</button>
        <button className={"next"} onMouseOver={() => this.start(1)} onMouseLeave={() => this.stop()}>&#10095;</button>
      </div>
    )
  }
}

export default Slideshow;