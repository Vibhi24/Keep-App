import React, { useState } from "react";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  const show = () => {
    setExpand(true);
  };

  const hide = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="createnote" onDoubleClick={hide}>
        {expand ? (
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
          />
        ) : null}
        <textarea
          placeholder="Write a note..."
          name="content"
          value={note.content}
          onChange={inputEvent}
          cols=""
          rows=""
          onClick={show}
        ></textarea>
        {expand ? (
          <div className="align-right">
            <button className="btn" onClick={addEvent}>
              ➕
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CreateNote;
