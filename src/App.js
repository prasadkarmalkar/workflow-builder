import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Workflow from './Workflow/Workflow';

function App() {
  const [isSliderOn, setIsSliderOn] = useState(false);

  const initialElements = [
    {
      id: '1',
      type: 'special',
      data: { type: 'Email', subject: "This is subject", date: "20/20/21", time: "22:11" },
      position: { x: 250, y: 25 },
    }
  ];

  const [elements, setElements] = useState(initialElements);

  return (
    <div className="app">
      <Header></Header>
      <Workflow setElements={setElements} elements={elements} isSliderOn={isSliderOn} setIsSliderOn={setIsSliderOn}></Workflow>
      <Slider setElements={setElements} elements={elements} isSliderOn={isSliderOn} setIsSliderOn={setIsSliderOn}></Slider>
    </div>
  );
}
export default App;
