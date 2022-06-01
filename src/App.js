import { Fragment } from "react";
import NavBar from "./Components/NavBar";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Fragment>
        <NavBar/>
        <VideoPlayer/>
      </Fragment>
    </div>
  );
}

export default App;