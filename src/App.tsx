import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
      <AppRoute />
      <Toaster />
    </>
  );
}

export default App;
