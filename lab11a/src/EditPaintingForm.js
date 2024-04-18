import React from "react";

function EditPaintingForm({ painting }) {
  return (
    <section className="paintingForm">
      <img src={`paintings/${painting.id}.jpg`} alt={painting.title} />
      <div>
        <label>Title</label>
        <input type="text" name="title" value={painting.title} />
      </div>
      <div>
        <label>Artist</label>
        <input type="text" name="artist" value={painting.artist} />
      </div>
      <div>
        <label>Year</label>
        <input type="text" name="year" value={painting.year} />
      </div>
    </section>
  );
}

export default EditPaintingForm;
