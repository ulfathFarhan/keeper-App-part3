import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItem] = useState([]);

  function insertItem(i) {
    setItem((previousData) => {
      return [...previousData, i];
    });
    console.log(items);
  }

  function deleteFunc(id) {
    setItem((previousData) => {
      return previousData.filter((e, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea insertItem={insertItem} />
      {items.map((e, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={e.title}
            content={e.content}
            deleteFunc={deleteFunc}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
