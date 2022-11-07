import React from "react";
import Entry from "./Entry";

function CreateCard(card) {
    return (
        <Entry
            key={card.id}
            img={card.imgURL}
            description={card.description}
        />
    )
}
export default CreateCard;