const router = require('express').Router()
const auth = require('../middlewares/auth')
const notesCtrl = require('../controllers/notesCtrl')

router.route('/')
    .get(auth, notesCtrl.getNotes)
    .post(auth, notesCtrl.createNotes)

router.route('/:id')
    .get(auth, notesCtrl.getNotes)
    .put(auth, notesCtrl.updateNotes)
    .delete(auth, notesCtrl.deleteNotes)



module.exports = router