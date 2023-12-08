import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Spinner, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Spinner color="red.500" />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
