import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src":"./src/assets/Kari.jpg", "name":"Kari",matched: false}, {"src":"./src/assets/RyanLahlouC.png", "name":"RyanLahlouC",matched: false},
  {"src":"./src/assets/gabriella2.jpg", "name":"Gabriella",matched: false},
  {"src":"./src/assets/Zane.jpg", "name":"Zane",matched: false}, {"src":"./src/assets/vinayak.jpg", "name":"Vinayak",matched: false},
  {"src":"./src/assets/dimmer.png", "name":"dimmer",matched: false},
  {"src":"./src/assets/deekshitaVerma.png", "name":"deekshitaVerma",matched: false},
  {"src":"./src/assets/cecilia2.png", "name":"cecilia2",matched: false},
  {"src":"./src/assets/david.png", "name":"devid",matched: false},
  {"src":"./src/assets/RyanLay.png", "name":"RyanLay",matched: false},
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
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.name === choiceOne.name) {
            return {...card, matched: true}
          }else {
          return card
          }
        })
      })
      resetTurn()
    }else {
    
      resetTurn()
    }
  }
},[choiceOne, choiceTwo])

console.log(card)

//reset choices & increase turns
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
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
          flipped = {choiceOne === card || choiceTwo === card || card.matched}
          />
        
          ))
            }
          
          </div>
      </div>
  
  )
}

export default App
