import React, { useState } from 'react';
import './LevelPicker.css';

export default ({ modes, setModes }) => {

    const [currentMode, updateCurrentMode] = useState('easyMode')

    const handleSelect = (e) => {
        updateCurrentMode(e.target.value)
    }

    return (
        <div className='level-picker'>
                <select placeholder={currentMode} value={currentMode} onChange={handleSelect}>
                    { modes && Object.keys(modes).map(mode => <option key={mode} value={mode}>{mode}</option>) }
                </select>
                <div className='start-button' onClick={(modes) => setModes(modes => ({ ...modes, activeMode: currentMode  }))}>
                        START
                </div>
        </div>
    )
}