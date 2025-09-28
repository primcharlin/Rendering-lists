import React, { useState } from "react";
import "./App.css";

export default function AddBookModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publisher: "",
        publicationYear: "",
        language: "",
        pages: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just close the modal
        // Later we can add the book to the list
        onClose();
        // Reset form
        setFormData({
            title: "",
            author: "",
            publisher: "",
            publicationYear: "",
            language: "",
            pages: "",
        });
    };

    const handleClose = () => {
        onClose();
        // Reset form when closing
        setFormData({
            title: "",
            author: "",
            publisher: "",
            publicationYear: "",
            language: "",
            pages: "",
        });
    };

    if (!isOpen) return null;

    return (
        <div
            className='modal-overlay'
            onClick={handleClose}>
            <div
                className='modal-content'
                onClick={(e) => e.stopPropagation()}>
                <div className='modal-header'>
                    <h2>Add Book</h2>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className='book-form'>
                    <div className='form-row'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder='book title...'
                            required
                        />
                    </div>

                    <div className='form-row'>
                        <label htmlFor='author'>Author</label>
                        <input
                            type='text'
                            id='author'
                            name='author'
                            value={formData.author}
                            onChange={handleInputChange}
                            placeholder='Author'
                            required
                        />
                    </div>

                    <div className='form-row'>
                        <label htmlFor='publisher'>Publisher</label>
                        <input
                            type='text'
                            id='publisher'
                            name='publisher'
                            value={formData.publisher}
                            onChange={handleInputChange}
                            placeholder='Publisher'
                        />
                    </div>

                    <div className='form-row'>
                        <label htmlFor='publicationYear'>
                            Publication Year
                        </label>
                        <input
                            type='number'
                            id='publicationYear'
                            name='publicationYear'
                            value={formData.publicationYear}
                            onChange={handleInputChange}
                            min='1000'
                            max='2025'
                        />
                    </div>

                    <div className='form-row'>
                        <label htmlFor='language'>Language</label>
                        <input
                            type='text'
                            id='language'
                            name='language'
                            value={formData.language}
                            onChange={handleInputChange}
                            placeholder='Language'
                        />
                    </div>

                    <div className='form-row'>
                        <label htmlFor='pages'>Pages</label>
                        <input
                            type='number'
                            id='pages'
                            name='pages'
                            value={formData.pages}
                            onChange={handleInputChange}
                            min='1'
                        />
                    </div>

                    <div className='form-actions'>
                        <button
                            type='submit'
                            className='btn-save'>
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
