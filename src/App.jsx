
import { useState, useEffect } from "react"
import CardList from "./components/CardsList"
import "./App.css"

export default function App() {

  const [cards, setCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [numberOfPairs, setNumberOfPairs] = useState(4)
  const [moves, setMoves] = useState(0)

  function createCards(numberOfCards) {

    setSelectedCards([])
    setMatchedCards([])
    setMoves(0)

    let cardsArray = []

    for (let add = 0; add < numberOfCards; add++) {

      const card1 = {
        id: add * 2,
        value: add
      }

      const card2 = {
        id: add * 2 + 1,
        value: add
      }

      cardsArray.push(card1)
      cardsArray.push(card2)
    }

    for (let i = cardsArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))

      let temp = cardsArray[i]
      cardsArray[i] = cardsArray[j]
      cardsArray[j] = temp
    }

    setCards(cardsArray)
  }

  function handleClick(card) {

    if (matchedCards.includes(card.id)) {
      return
    }

    if (selectedCards.some(selected => selected.id === card.id)) {
      return
    }

    if (selectedCards.length === 2) {

      setSelectedCards([card])

    } else {

      let newSelectedCards = [...selectedCards, card]

      setSelectedCards(newSelectedCards)

      if (newSelectedCards.length === 2) {

        setMoves(moves + 1)

        if (newSelectedCards[0].value === newSelectedCards[1].value) {

          setMatchedCards([
            ...matchedCards,
            newSelectedCards[0].id,
            newSelectedCards[1].id
          ])
        }
      }
    }
  }

  useEffect(() => {
    createCards(4)
  }, [])

  return (
    <div>
      <h1>Memory Game</h1>

      <div>
        <label>Number of pairs:</label>

        <input
          type="number"
          min="1"
          value={numberOfPairs}
          onChange={(event) => setNumberOfPairs(event.target.value)}
        />

        <button onClick={() => createCards(Number(numberOfPairs))}>
          Start Game
        </button>
      </div>

      <div>
        <h2>Scoreboard</h2>

        <p>Moves: {moves}</p>

        <p>
          Pairs found: {matchedCards.length / 2} / {cards.length / 2}
        </p>

        {matchedCards.length === cards.length && cards.length > 0 && (
          <h2>You won!</h2>
        )}
      </div>

      <CardList
        cards={cards}
        selectedCards={selectedCards}
        matchedCards={matchedCards}
        handleClick={handleClick}
      />
    </div>
  )
}
