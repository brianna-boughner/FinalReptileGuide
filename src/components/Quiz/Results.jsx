import './results.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useParams} from 'react-router-dom';

export default function Results() {
  const {id} = useParams();
  const ResultsData = [
    {
        id: 0,
        image: "../images/crestedGecko.jpg",
        title: "Crested Gecko",
        description: "Crested geckos are a popular pet amongst both beginners and experts. They are very personable and don't mind being handled once they are mature. They don't require too big of an enclosure, and are fairly low maintenance.",
        link: "/guide/0"
      },
      {
        id: 1,
        image: "../images/Lizards/Ball Python.jpg",
        title: "Ball Python",
        description: "Ball pythons are a popular choice for beginner reptile owners. They do not need to be fed often, however their diet mostly consists of rodents, so not for the faint of heart! They also require a relatively large tank size, but if you're able to meet their needs, this may be the perfect pet for you.",
        link: "/guide/16"
      },
      {
        id: 2,
        image: "../images/Lizards/Dart Frog.jpg",
        title: "Dart Frog",
        description: "Dart frogs are creatures with a striking colouring. They come in a variety of colours, and are a very unique and interesting pet to observe. They require frequent feeding, but their required tank size is not too large due to their small size.",
        link: "/guide/10"
      },
      {
        id: 3,
        image: "../images/Lizards/Slider.jpg",
        title: "Red-Eared Slider",
        description: "Red-eared sliders are often considered a beginner pet by mistake. While the turtle themself is low maintenance, they do require a very large tank and close monitoring of water quality to ensure an optimal environment. If you are prepared to meet their needs, they are a wonderful pet to observe.",
        link: "/guide/24"
      },
      {
        id: 4,
        image: "../images/Lizards/chameleon.jpg",
        title: "Veiled Chameleon",
        description: "Chameleons are known as one of the most difficult pets in the reptile community. They have very specific needs and require vet visits occasionally. However, they are a very unique pet, especially because of their well-known ability to change colours.",
        link: "/guide/5"
      }
      
      ];
  return (
    <div style={{display: 'flex',  flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop: '3%', backgroundColor:'white'}}>
      <h3>Your perfect pet is: </h3>
      <h3 className="matchTitle">{ResultsData[id].title}</h3>
      <div class="matchCard">
        <img src={ResultsData[id].image} className="lizardPic"></img>
        <div style={{marginLeft: '3%'}}>
        <p style={{fontSize:"18px"}}>{ResultsData[id].description}</p>
        <a href={ResultsData[id].link}>
        <button style={{border:"none", backgroundColor:"#B2D199", borderRadius: "20px", color: "white", fontSize: "20px"}}>Care Guide</button>
        </a>
        </div>
        </div>
     {/*

      
      
      <div class="barContainer">
      <div class="barFill" style={{width: '80%'}}>
        <span class="barInside">80%</span>
        </div> 
        </div>

        
        <div class="barContainer">
      <div class="barFill" style={{width: '70%'}}>
        <span class="barInside">70%</span>
        </div> 
        </div>
        
        
        
        <div class="barContainer">
      <div class="barFill" style={{width: '60%'}}>
        <span class="barInside">60%</span>
        </div> 
        </div>
        */}
    </div>
     
  )
}
