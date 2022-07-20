
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ScrollPage.css';


export default function ScrollPageFrog() {
    
   const initialArr = [
        {
          id: 1,
          image: "./images/Lizards/Milk Frog.jpg",
          text: "Milk Frog",
          link:"/guide/8"
        },
        {
          id: 2,
          image: "./images/Lizards/Whites Tree Frog.jpg",
          text: "White's Tree Frog",
          link:"/guide/9"
        },
        {
            id: 3,
            image: "./images/Lizards/Dart Frog.jpg",
            text: "Dart Frog",
            link:"/guide/10"
          },
          {
            id: 4,
            image: "./images/Lizards/Fire Toad.jpg",
            text: "Fire Bellied Toad",
            link:"/guide/11"
          },
          {
            id: 5,
            image: "./images/Lizards/Pacman Frog.jpg",
            text: "Pacman Frog",
            link:"/guide/12"
          },
          {
            id: 6,
            image: "./images/Lizards/African Frog.jpg",
            text: "African Dwarf Frog",
            link:"/guide/13"
          },
          {
            id: 7,
            image: "./images/Lizards/Red Eyed Tree Frog.jpg",
            text: "Red-Eyed Tree Frog",
            link:"/guide/14"
          },
          {
            id: 8,
            image: "./images/Lizards/Pixie Frog.jpg",
            text: "Pixie Frog",
            link:"/guide/15"
          },
      ];
      
     
  return (
    <div class="bigContainer">
        <h1>Frog Care Guides</h1>
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
