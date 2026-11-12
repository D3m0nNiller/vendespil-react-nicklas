export default function Card({ card, selectedCards, matchedCards, handleClick }) {

    const isSelected = selectedCards.some(selected => selected.id === card.id)
    const isMatched = matchedCards.includes(card.id)

    return (
        <li
            className={`card ${isSelected || isMatched ? "show" : ""} ${isMatched ? "done" : ""}`}
            onClick={() => handleClick(card)}
        >
            <span className="front">Card</span>
            <span className="back">{card.value}</span>
        </li>
    )
}