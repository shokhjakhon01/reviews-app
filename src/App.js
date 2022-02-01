import React, { useEffect } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import {nanoid} from "nanoid";

function App() {
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "The Product is awesome!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "Value of money",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "Room for envronment",
      date: "18/04/2022",
    },
    {
      id: nanoid(),
      text: "The Product is awesome!",
      date: "15/04/2022",
    },
  ]);

  const [searchText, setSearchText] = React.useState("");
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-review-app-data")
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
