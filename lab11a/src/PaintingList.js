import React from "react";
import PaintingListItem from "./PaintingListItem";

function PaintingList({paintings}) {
    return (
        <section className="paintingList">
            {paintings.map((painting, index) => (
                <PaintingListItem key={index} painting={painting} />
            ))}
        </section>
    );
}
export default PaintingList;