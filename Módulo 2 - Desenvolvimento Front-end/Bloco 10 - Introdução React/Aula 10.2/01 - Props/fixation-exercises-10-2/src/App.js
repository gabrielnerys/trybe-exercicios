import React from 'react';
import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg'

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText='Cute cat staring' />
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
    </main>
  );
}

export default App;
