import React, {useCallback, useEffect, useState} from 'react';
import './Field.css';

export default ({ fields, setHoveredSquares }) => {

    const [squares, setSquares] = useState([]);

    const renderField = useCallback(
        () => {
            const arr = [];
            for (let i = 1; i <= fields; i++) {
                arr.push({break: true})
                for (let n = 1; n <= fields; n++) {
                    arr.push({row: i, column: n, isChecked: false})
                }
            }
            return arr;
        }, [fields]
    )


    useEffect(() => {
        setSquares(renderField())
    }, [fields])

    const handleHover = (selectedRow, selectedColumn) => {
        const squaresCopy = squares.slice();
        const elem = squaresCopy.findIndex(({row, column}) => row === selectedRow && column === selectedColumn);
        squaresCopy[elem].isChecked = !squaresCopy[elem].isChecked;
        const hoveredSquares = squaresCopy.filter(item => item.isChecked)
        setHoveredSquares(hoveredSquares);
        setSquares(squaresCopy);
    }

        return (
            <div className="game-field">

                {squares.map(item => {
                    return  item.break ? <div className="break"/> : <div onMouseOver={() => handleHover(item.row, item.column)} className={`game-block ${item.isChecked ? '' : 'selected'}`}/>
                })}

            </div>
        )
    }

