
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ScrollPage.css';


export default function ScrollPageLizard() {
    
   const initialArr = [
        {
          id: 1,
          image: "./images/crestedGecko.jpg",
          text: "Crested Gecko",
          link: "/guide/0"
        },
        {
          id: 2,
          image: "./images/Lizards/Mourning Gecko.jpg",
          text: "Mourning Gecko",
          link: "/guide/1"
        },
        {
            id: 3,
            image: "./images/Lizards/Leopard gecko.jpg",
            text: "Leopard Gecko",
            link: "/guide/2"
          },
          {
            id: 4,
            image: "./images/Lizards/Blue Tongue Skink.jpg",
            text: "Blue Tongue Skink",
            link: "/guide/3"
          },
          {
            id: 5,
            image: "./images/Lizards/newt.jpg",
            text: "Fire Belly Newt",
            link: "/guide/4"
          },
          {
            id: 6,
            image: "./images/Lizards/chameleon.jpg",
            text: "Veiled Chameleon",
            link: "/guide/5"
          },
          {
            id: 7,
            image: "./images/Lizards/Green Anole.jpg",
            text: "Green Anole",
            link: "/guide/6"
          },
          {
            id: 8,
            image: "./images/Lizards/Leachie.jpg",
            text: "Leachianus Gecko",
            link: "/guide/7"
          },
      ];
      
     
  return (
    <div class="bigContainer">
        <h1>Lizard Care Guides</h1>
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
