const Notes = require('../models/routerModels')


const notesCtrl = {
    getNotes: async (req, res)=>{
        try{
            const notes = await Notes.find({user_id: req.user.id})
            res.json(notes)
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createNotes: async (req, res)=>{
        try{
            const {title, content, date} = req.body;
            const newNotes = new Notes({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name
            })
            await newNotes.save()
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteNotes: async (req, res)=>{
        try{
           await Notes.findByIdAndDelete(req.params.id)
            res.json({msg: 'Your note is deleted'})
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateNotes: async (req, res)=>{
        try{
            const {title, content, date} = req.body;
            await Notes.findByIdAndUpdate({_id: req.params.id},{
                title,
                content,
                date
            })
            
            res.json({msg: 'Your note is Updated'})
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    getNotes: async (req, res)=>{
        try{
            const note = await Notes.findById(req.params.id)
            res.json(note)
        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = notesCtrl;