import { setData } from "app/store/slices/characters.slice";
import { Homepage } from "page/home/ui/Homepage";
import { Header } from "shared/ui/header/Header";
import { useAppDispatch } from "app/store/hooks";
import { Character } from "shared/types/global";
import { useEffect } from "react";

import Characters from "shared/data/characters.json";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(Characters as Character[]));
  }, []);

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
