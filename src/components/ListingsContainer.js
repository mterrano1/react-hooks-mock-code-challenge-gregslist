import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listingCards, setListingCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listingCards => setListingCards(listingCards))
  }, []);

  function handleDeleteListing(id) {
    const updatedCards = listingCards.filter(
      (listingCard) => listingCard.id !== id
    );
    setListingCards(updatedCards)
  }

  const filteredListings = listingCards.filter((listingCard) => {
    return listingCard.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <ul className="cards">
        {filteredListings.map(listingCard => (
          <ListingCard
            key={listingCard.id}
            listingCard={listingCard}
            onHandleDelete={handleDeleteListing} 
          />
        ))
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
