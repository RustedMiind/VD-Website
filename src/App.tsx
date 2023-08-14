import Layout from "./pages/layout/Layout";
import "./app.scss";
import "./defaults.scss";
import axios from "axios";
axios.defaults.headers.common["from"] = "website";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
