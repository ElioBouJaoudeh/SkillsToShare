const router = require('express').Router();
let Note = require('../models/note.model');



const getNotes = async (req, res) => { 
    try {
        const postMessages = await Note.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createNote = async (req, res) => {
    const { content } = req.body;

    const newPostMessage = new Note({ content })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

router.get('/', getNotes);
router.post('/', createNote);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

module.exports = router;