import { Header } from "../shared/ui/header/Header";
import { Homepage } from "../page/home/ui/Homepage";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
