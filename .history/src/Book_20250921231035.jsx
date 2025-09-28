import React from "react";
import "./App.css";

export default function Book({ image, title, authors, url, price }) {
    return (
        <div className='book normal'>
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
                    rel='noopener noreferrer'>
                    Learn More
                </a>
            </div>
        </div>
    );
}
