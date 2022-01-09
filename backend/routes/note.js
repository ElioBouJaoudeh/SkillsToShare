auth=require('../middleware/auth.js');

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
    const note = req.body;

    const newPostMessage = new Note({ ...note,creator:req.userId })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// const updateNote=async(req,res) =>{

//     const {id:_id}=req.params;
//     const note=req.body;
//     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no Note with that id');

//    const updatedNote= await Note.findByIdAndUpdate(_id,note,{new:true});

//    res.json(updatedNote);
// }

router.get('/', getNotes);
router.post('/', auth, createNote);
// router.get('/:id', getPost);
 //router.patch('/:id', updateNote);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

module.exports = router;