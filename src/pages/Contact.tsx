import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import viteLogo from '/vite.svg';

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Contact Page</h1>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button
          variant='primary'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default Contact;