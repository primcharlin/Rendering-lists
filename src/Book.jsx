import React from "react";
import "./App.css";

export default function Book({
    image,
    title,
    authors,
    url,
    price,
    isSelected,
    onSelect,
    onRemove,
}) {
    const handleBookClick = () => {
        onSelect();
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation(); // Prevent book selection when clicking remove
        onRemove();
    };

    return (
        <div
            className={`book normal ${isSelected ? "selected" : ""}`}
            onClick={handleBookClick}>
            <button
                className='remove-btn'
                onClick={handleRemoveClick}
                title='Remove book'>
                Remove
            </button>
            <div className='image'>
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className='meta'>
                {price && <p className='price'>{price}</p>}
                <a
                    className='learn-more-btn'
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()} // Prevent book selection when clicking link
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}
