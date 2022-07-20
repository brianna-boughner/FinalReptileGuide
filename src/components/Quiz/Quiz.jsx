import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//components
import QuizBank from './QuizBank';
//styling
import './quiz.css';

function Quiz (){

    let x=0;

    const [crestedGecko, setCrestedGecko] = useState(0)
    const [ballPython, setBallPython] = useState(0)
    const [dartFrog, setDartFrog] = useState(0)
    const [redEarSlider, setRedEarSlider] = useState(0)
    const [chameleon, setChameleon] = useState(0)

    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState("")

   

    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    function handleClick (event) {
        console.log(event.target.value)
        {/* if answerA, then ... crestedGecko += increment[0[0]] etc */}
       
        
        const nextQ = QuizBank.find(question => question.id === (currentQ.id)+1)
        console.log((currentQ.id))
        if (nextQ) {
            if(event.target.value=="a"){x=0}
            else if (event.target.value=="b"){x=1}
            else{x=2}

                setCrestedGecko(crestedGecko + currentQ.increment[x][0])
                setBallPython(ballPython + currentQ.increment[x][1])
                setDartFrog(dartFrog + currentQ.increment[x][2] )
                setRedEarSlider(redEarSlider + currentQ.increment[x][3])
                setChameleon(chameleon + currentQ.increment[x][4])
            
            setCurrentQ(nextQ)}
        else {
            var values = [crestedGecko, ballPython, dartFrog, redEarSlider, chameleon]
            var maxIndex = 0;

        for (var i = 1; i < values.length; i++) {
        if (values[maxIndex] < values[i]) {
            maxIndex = i;
        }
        }
        switch(maxIndex) {
            case 0:
                navigate('../results/0', { replace: true })
                break;
            case 1:
                navigate('../results/1', { replace: true })
                break;
            case 2: 
                navigate('../results/2', { replace: true })
                break;
            case 3:
                navigate('../results/3', { replace: true })
                break;
            case 4:
                navigate('../results/4', { replace: true })
                break;
            default:
                navigate('../results/0', { replace: true })
        }
       
    }
}

    return (
        <div className="pageContainer">
    
        <h3> {currentQ.question} </h3>
    
        <div className="quizContainer">

        <button className="quizButton" value={"a"} onClick={handleClick}> {currentQ.answerA} </button>

        <button className="quizButton" value={"b"} onClick={handleClick}> {currentQ.answerB} </button>

        <button className="quizButton" value={"c"} onClick={handleClick}> {currentQ.answerC} </button>
        </div>
        {<br />}
        {<br />}
<div style={{height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 0,
    }}>
<div style={{height: '100%',
    width: `${currentQ.progress}%`,
    backgroundColor: '#B2D199',
    borderRadius: 'inherit',
    textAlign: 'right'}}>
        <span style={{ padding: '15px', paddingBottom: '25px', color: 'white', fontWeight: 'bold'}}></span>
        </div>
        </div>
        </div>

    )
}

export default Quiz