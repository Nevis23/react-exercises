import {Card} from "./components/TeamCard";

function App() {
  return (
    <div className="flex gap-4 p-10">
      <Card name="Joni" role="Developer" />
      <Card name="Matti" role="Designer" />
      <Card name="Kati" role="Project Manager" />
    </div>
  );
}

export default App;