import React, { useEffect, useState } from 'react';
import './App.css';
import LevelPicker from './components/LevelPicker';
import Field from './components/Field';
import Hovered from './components/HoveredSquares';

function App() {

    const [modes, setModes] = useState({});
    const [hoveredSquares, setHoveredSquares] = useState([]);

    useEffect(() => {
        try {
            fetch(' http://demo1030918.mockable.io/').then(res => res.json()).then(data => {
                setModes({...modes, availableModes: data})
            })
            console.log(modes)
        } catch (e) {
            throw new Error(e)
        }

    }, [])

  return (
    <div className="App">
      <LevelPicker modes={modes.availableModes} activeMode={modes?.activeMode || 'easyMode'} setModes={setModes} />
      <Field fields={modes.activeMode && modes.availableModes[modes.activeMode].field} setHoveredSquares={setHoveredSquares}/>
      <Hovered hovered={hoveredSquares} />
    </div>
  );
}

export default App;
