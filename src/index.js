import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import shangrilaImage from './Image/shangrila.jpg';
import './jsxProcs/proc.jsx';


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
); */
function MyComponent() {
  return (
    <div>
      <h1>My Holiday</h1>
      {/* 2. Use the imported variable in the src attribute */}
      <img src={shangrilaImage} alt="Holiday" />
    </div>
  );
}
//export default MyComponent;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
