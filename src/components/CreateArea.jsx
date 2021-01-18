import React, { useState } from "react";

function CreateArea(props) {
  const [input, SetInput] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;
    SetInput((previousData) => {
return {...previousData,
          [name]:value};

      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: previousData.content
      //   };
      // } else {
      //   return {
      //     title: previousData.title,
      //     content: value
      //   };
      // }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleInput}
          placeholder="Title"
          value={input.title}
        />
        <textarea
          name="content"
          onChange={handleInput}
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button
          onClick={(event) => {
            props.insertItem(input);
            SetInput((previousData) => {
              return {
                title: "",
                content: ""
              };
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
