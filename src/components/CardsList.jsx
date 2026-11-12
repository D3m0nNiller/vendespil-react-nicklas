import Card from "./Card"

export default function CardList({ cards, selectedCards, matchedCards, handleClick }) {

    return (
        <ul id="cards">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    selectedCards={selectedCards}
                    matchedCards={matchedCards}
                    handleClick={handleClick}
                />
            ))}
        </ul>
    )
}