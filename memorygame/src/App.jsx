import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'
//import { Header as Logo } from './assets/hackweeklogo.jpg';
const cardImages = [
  {"src":"./src/assets/Kari.jpg", "name":"Kari"},
  {"src":"./src/assets/RyanLahlouC.png", "name":"RyanLahlouC"},
  {"src":"./src/assets/gabriella2.jpg", "name":"Gabriella"},
  {"src":"./src/assets/Zane.jpg", "name":"Zane"},
  {"src":"./src/assets/vinayak.jpg", "name":"Vinayak"},
  {"src":"./src/assets/dimmer.png", "name":"dimmer"},
  {"src":"./src/assets/deekshitaVerma.png", "name":"deekshitaVerma"},
  {"src":"./src/assets/cecilia2.png", "name":"cecilia2"},
  {"src":"./src/assets/david.png", "name":"devid"},
  {"src":"./src/assets/RyanLay.png", "name":"RyanLay"},
]

function App() {
  const [cards, setCards] = useState([])
  const[turns, setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  // shuffle cards
const shuffleCards = () => {
  const shuffledCards = [... cardImages,...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
}
// handle card choice
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}
//compare 2 selected cards
useEffect(() => {
  if (choiceOne && choiceTwo) {
    if (choiceOne.name === choiceTwo.name) {
      console.log('match')
      resetTurn()
    }else {
      console.log('no match')
      resetTurn()
    }
  }
},[choiceOne, choiceTwo])

//reset choices & increase turns
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(preyTurns => preyTurns + 1)
}
  return (
    
    <div className = "App">
      <img className = "logo" src = "./src/assets/hackweeklogo.jpg" alt = "card front"/>
      <h1>Global Hack Memory Game</h1>  
      <button onClick ={shuffleCards}> Start Game</button>
      
      <div className ="card-grid">
        {cards.map((card) => (
          <SingleCard 
          key = {card.id} 
          card = {card}
          handleChoice = {handleChoice}
          />
        
          ))
            }
          
          </div>
      </div>
  
  )
}

export default App
