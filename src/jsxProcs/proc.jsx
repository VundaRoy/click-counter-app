import { createRoot } from 'react-dom/client'

const myElement = (
 <div >
    <p>ASP.NET conference March 2026 </p>
    <p>You are invited to attend grand opening of ASP future prospectives.</p>
  </div>
);

const ThirdElement = (
 <div style={{backgroundColor: 'bisque', width:450, textAlign: 'center', marginLeft:'30%'}} >
    <p>COBOL revival conference </p>
    <p>Special event to launch legacy systems!
      We are gonna launch a spectaculr come back for COBOL
      Be prepared for cringe moments in software development
      as we highlight the best and dumbest decisions ever made!
    </p>
  </div>
);
createRoot(document.getElementById('root')).render(
  <div>

    {myElement}
    {ThirdElement}
  </div>
  
);