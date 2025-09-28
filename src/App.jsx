import { useEffect, useState } from "react";
import Book from "./Book";
import BtnPlus from "./BtnPlus";
import AddBookModal from "./AddBookModal";
import "./App.css";
import data from "./data.json";

export default function App() {
    const [booksWithAuthors, setBooksWithAuthors] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Use local JSON data instead of API
        setBooksWithAuthors(data);
    }, []);

    const handleAddBook = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleBookSelect = (bookId) => {
        // If clicking on the same book, deselect it
        if (selectedBookId === bookId) {
            setSelectedBookId(null);
        } else {
            setSelectedBookId(bookId);
        }
    };

    const handleBookRemove = (bookId) => {
        setBooksWithAuthors((prev) =>
            prev.filter((book) => book.isbn13 !== bookId)
        );
        // If the removed book was selected, clear selection
        if (selectedBookId === bookId) {
            setSelectedBookId(null);
        }
    };

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
                            <BtnPlus onClick={handleAddBook} />
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
                                    isSelected={selectedBookId === b.isbn13}
                                    onSelect={() => handleBookSelect(b.isbn13)}
                                    onRemove={() => handleBookRemove(b.isbn13)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <footer className='footer'>
                <p>Primcharlin Kiattipoompun Set G</p>
            </footer>

            <AddBookModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}
