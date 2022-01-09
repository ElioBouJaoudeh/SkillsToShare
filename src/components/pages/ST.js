import React, { useState, useEffect } from 'react'
import '../../components/pages/ST.css'
import '../../App.css';
import Navbar from '../Navbar';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { actionCreators } from "../../actions/ItemAction";
import InBasketItem from "./inBasketitem";
import InListItem from "./inListitem";
import { Link } from 'react-router-dom';
import {createNote,getNotes} from '../../actions/ItemAction';


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'
 function ST() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  const notes = useSelector(state => state.notes);
  const user = JSON.parse(localStorage.getItem('profile'));
  const [noteData,setNoteData]=useState({content:''});
  const dispatch = useDispatch();

  useEffect(() => {
    handleListen()
  }, [isListening])

  useEffect(()=>{
    dispatch(getNotes());
  },[dispatch]);


  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setNoteData({...noteData,content:note})
    dispatch(createNote(noteData));
    setSavedNotes([...savedNotes, note])
    setNote('')
  }
 

const [input, setInput] = useState({content:''});



const handleInputChange = event => {
  setInput({...input,content:event.target.value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(createNote(input));
  setInput("");
};


  return (
    <>
    <Navbar/>
    <video src='/videos/video-3.mp4' autoPlay loop muted />
      <div className="container">
        <div className="boxST">
          <h2>Current Note</h2>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="boxST">
          <h2>Notes</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
          </div>
          <div className="boxST">
          
          <h2>Saved Notes</h2>
          {notes.map(note => {
            if(user?.result?._id === note?.creator)
            return (
          <div>{note.content}
              </div>);})}
              
        
      <input
        className="input"
        placeholder="Add note..."
        value={input.content}
        onChange={handleInputChange}
      />
      <button className="button" variant="outline-dark" onClick={handleSubmit}>
        Add
      </button>
      
      {/* <button className="button" variant="outline-dark" onClick={handleClear}>
        Clear
      </button> */}
    </div>
  
  
         
        
      </div>
    </>
  )
}

ST.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps
)(ST);