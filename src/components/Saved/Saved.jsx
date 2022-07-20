
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../ScrollPage/ScrollPage.css';
import {Data} from './Data.jsx';

export default function Saved() {
    var favList = [{}]
    const getArray = JSON.parse(localStorage.getItem('favourites') || 0)
    // for(var i=0; i<getArray.length; i++){
    //     let x = getArray[i]
    //     favList[i]=JSON.parse(localStorage.getItem('favItem' + [x]) || "")
    // }
    // const toDisplay = Object.keys(favList[0])
    console.log(getArray)
  return (
    <div class="bigContainer">
        <h1>Saved Reptiles</h1>
    <div class="scrollContainer">
        {getArray != 0 &&
    getArray.map(reptile => {
     
    return (
        <div >
      <div key={reptile.id} class="reptileCard">
        <img class="scrollImage" src={reptile.image}></img>
        <a href={reptile.link}>
        <button class="reptileTitle">{reptile.title}</button>
        </a>
      </div>
      </div>
      
    )
  })}
  {getArray == 0 &&
  <>
  <h5>You don't have any saved reptiles yet.</h5>
  </>
  }

    </div>
    </div>
    
  )
}
