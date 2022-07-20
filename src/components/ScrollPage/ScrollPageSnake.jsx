
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ScrollPage.css';


export default function ScrollPageSnake() {
    
   const initialArr = [
        {
          id: 1,
          image: "./images/Lizards/Ball Python.jpg",
          text: "Ball Python",
          link: "/guide/16"
        },
        {
          id: 2,
          image: "./images/Lizards/Hognose.jpg",
          text: "Western Hognose",
          link: "/guide/17"
        },
        {
            id: 3,
            image: "./images/Lizards/Corn Snake.jpg",
            text: "Corn Snake",
            link: "/guide/18"
          },
          {
            id: 4,
            image: "./images/Lizards/Black Snake.jpg",
            text: "Black Mexican Kingsnake",
            link: "/guide/19"
          },
          {
            id: 5,
            image: "./images/Lizards/worm snake.webp",
            text: "Worm Snake",
            link: "/guide/20"
          },
          {
            id: 6,
            image: "./images/Lizards/Egg Eater.jpg",
            text: "Egg-Eating Snake",
            link: "/guide/21"
          },
          {
            id: 7,
            image: "./images/Lizards/Garter Snake.jpg",
            text: "Garter Snake",
            link: "/guide/22"
          },
          {
            id: 8,
            image: "./images/Lizards/Tree Python.jpg",
            text: "Green Tree Python",
            link: "/guide/23"
          }
      ];
      
     
  return (
    <div class="bigContainer">
        <h1>Snake Care Guides</h1>
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
