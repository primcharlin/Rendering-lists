import { useEffect, useState } from "react";
import Book from "./Book";
import BtnPlus from "./BtnPlus";
import "./App.css";
import data from "./data.json";

export default function App() {
    const [booksWithAuthors, setBooksWithAuthors] = useState([]);

    useEffect(() => {
        // Use local JSON data instead of API
        setBooksWithAuthors(data);
    }, []);

    return (
        <div className='app'>
            <header className='app-header'>
                <h1>Book Catalog</h1>
            </header>

            <div className='content'>
                {booksWithAuthors.length === 0 ? (
                    <p>Loading…</p>
                ) : (
                    <div className='main-layout'>
                        <div className='btn-plus-container'>
                            <BtnPlus onClick={() => alert("Add book!")} />
                        </div>
                        <div className='books-grid'>
                            {booksWithAuthors.map((b) => (
                                <Book
                                    key={b.isbn13}
                                    image={b.image}
                                    title={b.title}
                                    authors={b.subtitle}
                                    url={b.url}
                                    price={b.price}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <footer className='footer'>
                <p>Primcharlin Kiattipoompun Set G</p>
            </footer>
        </div>
    );
}
