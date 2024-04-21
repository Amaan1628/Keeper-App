import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [zoom,setzoom] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  function handlezoom(){
    return setzoom(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {zoom ?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}

        <textarea
          onClick={handlezoom}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {zoom ? "3": "1"}
        />
        <Zoom in={zoom ? true : false}>
          <Fab onClick={submitNote}> 
            <AddIcon/>
          </Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
