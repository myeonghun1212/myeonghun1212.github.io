import React from "react";

function PaintingListItem( {painting} ) {
    const printPaintName = () => {
        alert(painting.title);  
    };
    return (
        <div className="row" onClick={printPaintName}>
            <img src={`./paintings/square/${painting.id}.jpg`} alt={painting.title} />
            <h3>{painting.title}</h3>
            <p>{painting.artist}</p>
            <p>{painting.year}</p>
        </div>
    );
}

export default PaintingListItem;