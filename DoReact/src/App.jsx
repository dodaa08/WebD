import React from 'react';
import useStore from './components/useStore';

function App() {
  return (
    <>
      <LightBulb />
    </>
  );
}

function LightBulb() {
  return (
    <div className='text-center text-2xl py-20'>
      <BulbState />
      <Toggle />
    </div>
  );
}

function BulbState() {
  const { bulb } = useStore();
  return (
    <h1>{bulb ? 'on' : 'off'}</h1>
  );
}

function Toggle() {
  const { bulb, setBulb } = useStore();
  return (
    <button onClick={setBulb} className='border-2 border-black py-1 px-5 rounded-xl'>
      {bulb ? 'off' : 'on'}
    </button>
  );
}

export default App;


// useFetch with re-fetching, usePrev, Custom Hooks.
// State management libraries like zustand, useCallback, Recoil, state Management, optimizing the re-renders!    .
// Context API : import, provide, consume ! 