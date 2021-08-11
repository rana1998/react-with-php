import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import { render } from "react-dom";
// import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/ext-language_tools"

// function onChange(newValue) {
//   console.log("change", newValue);
// }

// // Render editor
// render(
//   <AceEditor
//     mode="java"
//     theme="github"
//     onChange={onChange}
//     name="UNIQUE_ID_OF_DIV"
//     editorProps={{ $blockScrolling: true }}
//     setOptions={{
//       enableBasicAutocompletion: true,
//       enableLiveAutocompletion: true,
//       enableSnippets: true
//     }}
//   />,
//   document.getElementById("root")
// );
