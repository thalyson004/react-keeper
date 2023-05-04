import React from "react";
import ReactDOM from "react-dom";

//1. Create a new React app.
//2. Create a App.jsx component.
import App from "./components/App";

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//import Header from "./components/Header";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//import Footer from "./components/Footer";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//import Note from "./components/Note";

//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

ReactDOM.render(<App />, document.getElementById("root"));
