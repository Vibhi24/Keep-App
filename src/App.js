import React, { useState } from "react";
import Footer from "./keep-app/Footer";
import Header from "./keep-app/Header";
import CreateNote from "./keep-app/CreateNote";
import Note from "./keep-app/Note";
import "./index.css";

const App = () => {
  const [addNote, setAddNote] = useState([]);

  const addItem = (note) => {
    setAddNote((prevData) => {
      return [...prevData, note];
    });
  };

  const deleteItem = (id) => {
    // alert("delete " + id);

    setAddNote((oldData) =>
      oldData.filter((curdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addItem} />
      {addNote.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteNote={deleteItem}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
