import "./App.css";
import Box from "./pages/box/Box";
import Button from "./pages/button/Button";

function App() {
  return (
    <>
      <main>
        <div className="abir">
          <div className="main">
            <div className="box"></div>
            <h2>Hi</h2>
          </div>
          <div className="asia">
            <div className="box-a"></div>
            <h2>Hello</h2>
          </div>
          <div className="asia-2">
            <div className="box-b"></div>
            <h2>How are you?</h2>
          </div>
        </div>
        <div className="main-1">
          <div className="box-1"></div>
          <div className="container-2">
            <div className="box-2"></div>
          </div>
          <div className="box-3"></div>
          <div className="box-4"></div>
          <div className="box-5"></div>
          <div className="box-6"></div>
        </div>
      </main>
      <Button></Button>
      <Box></Box>
    </>
  );
}

export default App;
