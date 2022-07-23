import React from "react";

const Note = (props) => {
  const deleteEvent = () => {
    // alert("deleted");
    props.deleteNote(props.id);
  };

  return (
    <div className="notes_cont">
      <div className="note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <div className="align-right">
          <button className="btn" onClick={deleteEvent}>
            ➖
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
