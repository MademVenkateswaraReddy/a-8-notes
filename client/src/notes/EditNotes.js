import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const EditNotes = ({match}) => {
const [note, setNote] = useState({
    title: '',
    content: '',
    date: '',
    id: ''
})

useEffect(()=>{
    const getNotes = async ()=>{
        const token = localStorage.getItem('tokenStore')
        if(match.params.id){
            const res = await axios.get(`/api/notes/${match.params.id}`, {
                headers: {Authorization: token}
            })
            setNote({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date).toLocaleDateString(),
                id: res.data._id
            })
        }
    }
    getNotes()
},[match.params.id])

const navigate = useNavigate()

const onChangeInput = (e)=>{
    const {name, value} = e.target;
    setNote({...note, [name]:value})
}

const editNote = async (e)=>{
    e.preventDefault()
    try{
        const token = localStorage.getItem('tokenStore')
        if(token){
            const {title, content, date, id} = note
            const newNote = {
                title, content, date
            }
            await axios.put(`api/notes/${id}`, newNote, {
                headers: {Authorization: token}
            })
            return navigate.push('/')
        }
    }catch(err){
        window.location.href = '/'
    }
}

    return (
        <div className='create-note'>
            <h2>Edit Notes</h2>
            <form onSubmit={editNote} autoComplete='off'>
                <div className='row'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' value={note.title} id='title' name='title' required onChange={onChangeInput} />
                </div>
                <div className='row'>
                    <label htmlFor='content'>Content</label>
                    <textarea type='text' rows='10' value={note.content} id='content' name='content' required onChange={onChangeInput} />
                </div>
                <div className='row'>
                    <label htmlFor='date'>Date</label>
                    <input type='date' value={note.date} id='date' name='date' onChange={onChangeInput} />
                </div>

                <button type='submit'>Save</button>
            </form>
        </div>
    )
}
