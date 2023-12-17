import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Nav } from '../notes/Nav'
import { Home } from '../notes/Home'
import { CreateNotes } from '../notes/CreateNotes'
import { EditNotes } from '../notes/EditNotes'

export const Notes = ({setIsLogin}) => {
    return (
        <div>
            <Router>
                <div className='notes-page'>
                <Nav setIsLogin={setIsLogin} />
                <Routes>
                    <section>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/createnotes' element={<CreateNotes />} />
                    <Route exact path='/edit/:id' element={<EditNotes />} />
                    </section>
                </Routes>
                </div>
            </Router>
        </div>
    )
}
