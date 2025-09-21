import { createRoot } from 'react-dom/client'

function Population() {
  const hp = 218 + 12;
  return (
    <>
      <h1>Yanuca island </h1>
      <p>Has a population of {hp} </p>
    </>
  );
}

createRoot(document.getElementById('groot')).render(
  <Population />
);