import { useState } from "react";
import "./App.css";
import { useClearsaleLiveness } from "./hooks/use-clearsale-liveness";
import { useDebounce } from "use-hooks";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const debouncedAccessToken = useDebounce(accessToken, 500);
  const debouncedTransactionId = useDebounce(transactionId, 500);
  const { launchCamera } = useClearsaleLiveness(
    debouncedAccessToken,
    debouncedTransactionId
  );

  return (
    <div>
      <h1>Clearsale test</h1>

      <div>
        <div>
          <label htmlFor="accessToken">Access Token:</label>
          <input
            type="text"
            id="accessToken"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="transactionId">Transaction ID:</label>
          <input
            type="text"
            id="transactionId"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </div>

        <button onClick={launchCamera}>Launch Camera</button>
      </div>
    </div>
  );
}

export default App;
