import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./App.css";

function App({ children }) {
  return (
    <div className="row-center">
      <div className="col-center">
        <ConnectButton />
      </div>
    </div>
  );
}

export default App;
