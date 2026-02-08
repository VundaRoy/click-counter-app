import { createRoot } from 'react-dom/client'

const myElement = (
 <div >
    <p>I am a paragraph 1.</p>
    <p>I am a paragraph too.</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  myElement
);