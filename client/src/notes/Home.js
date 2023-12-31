import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Home = () => {
    const [notes, setNotes] = useState([])
    const [token, setToken] = useState('')

    const getNotes = async (token) => {
        try {
            const res = await axios.get('api/notes', {
                headers: { Authorization: token }
            });
            setNotes(res.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenStore');
        setToken(token);
        if (token) {
            getNotes(token);
        }
    }, []);

    const deleteNote = async (id) => {
        try {
            if (token) {
                await axios.delete(`api/notes/${id}`, {
                    headers: { Authorization: token }
                });
                getNotes(token);
            }
        } catch (error) {
            console.error('Error deleting note:', error);
           
        }
    }

    return (
        <div className='notes-wrapper'>
            {
                notes.map(note => (
                    <div className='card' key={note._id}>
                        <h4 title={note.title}>{note.title}</h4>
                        <div className='text-wrapper'>
                            <p>{note.content}</p>
                        </div>
                       
                        <div className='card-footer'>
                            User Name
                            <Link to={`edit/${note._id}`}>Edit</Link>
                        </div>
                        <button className='close' onClick={() => deleteNote(note._id)}>X</button>
                    </div>
                ))
            }
        </div>
    )
}
