import Card from "./Card"

export default function CardList({ cards, selectedCards, matchedCards, handleClick }) {

    return (
        <ul
            id="cards"
            style={{
                gridTemplateColumns: `repeat(${Math.min(cards.length / 2, 4)}, 1fr)`
            }}
        >
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