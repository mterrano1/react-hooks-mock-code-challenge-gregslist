import React, { useState } from "react";

function ListingCard({ listingCard, onHandleDelete }) {
  const [like, setLike] = useState(false);
  const {id, description, image, location} = listingCard;

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => {
      onHandleDelete(id)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={() => setLike(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setLike(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
