import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Header from "./Header";
import PaintingList from "./PaintingList";
import EditPaintingForm from "./EditPaintingForm";

function App() {
  const data = [
    {
      id: "016060",
      title: "Girl Arranging Her Hair",
      artist: "Mary Cassatt",
      year: 1886,
    },
    {
      id: "019160",
      title: "Farmhouse in Provence",
      artist: "Vincent Van Gogh",
      year: 1888,
    },
    {
      id: "016070",
      title: "The Boating Party",
      artist: "Mary Cassatt",
      year: 1893,
    },
    {
      id: "017040",
      title: "Woman with a Parasol",
      artist: "Claude Monet",
      year: 1875,
    },
    {
      id: "017080",
      title: "The Bridge at Argenteuil",
      artist: "Claude Monet",
      year: 1874,
    },
  ];

  return (
    <article className="app">
      <Header />
      <div className="box">
        <PaintingList paintings={data} />
        <EditPaintingForm painting={data[0]}/>
      </div>
    </article>
  );
}

export default App;
