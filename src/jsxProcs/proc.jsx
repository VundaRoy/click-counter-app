import { createRoot } from 'react-dom/client'

const myElement = (
 <div >
    <p>ASP.NET conference March 2026 </p>
    <p>You are invited to attend grand opening of ASP future prospectives.</p>
  </div>
);

const ThirdElement = (
 <div style={{backgroundColor: 'bisque', width:450}} >
    <p>COBOL revival conference </p>
    <p>Special event to launch legacy systems!</p>
  </div>
);
createRoot(document.getElementById('root')).render(
  <div>

    {myElement}
    {ThirdElement}
  </div>
  
);