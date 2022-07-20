
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ScrollPage.css';


export default function ScrollPageTurtle() {
    
   const initialArr = [
        {
          id: 1,
          image: "./images/Lizards/Slider.jpg",
          text: "Red-Eared Slider",
          link: "/guide/24"
        },
        {
          id: 2,
          image: "./images/Lizards/Tortoise.jpg",
          text: "Greek Tortoise",
          link: "/guide/25"
        },
        {
            id: 3,
            image: "./images/Lizards/Box Turtle.jpg",
            text: "Box Turtle",
            link: "/guide/26"
          },
          {
            id: 4,
            image: "./images/Lizards/African Turtle.jpg",
            text: "African Sideneck Turtle",
            link: "/guide/27"
          },
      ];
      
     
  return (
    <div class="bigContainer">
        <h1>Turtle Care Guides</h1>
    <div class="scrollContainer">
      {initialArr.map(reptile => {
    return (
        <div >
      <div key={reptile.id} class="reptileCard">
        <img class="scrollImage" src={reptile.image}></img>
        <a href={reptile.link}>
        <button class="reptileTitle">{reptile.text}</button>
        </a>
      </div>
      </div>
      
    )
  })}

    </div>
    </div>
    
  )
}
