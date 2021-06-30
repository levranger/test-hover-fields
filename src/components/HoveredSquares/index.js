import './HoveredSquares.css';

export default ({hovered}) => {
    return (
        <div className="hovered">
            {hovered.map(({row, column}) => {
                return <div className="hovered-bar">Row {row}, column: {column}</div>
            })}
        </div>
    )
}