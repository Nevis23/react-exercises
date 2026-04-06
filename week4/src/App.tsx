import { useState } from "react";
import Modal from "./Components/Modal.tsx";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showOther, setShowOther] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      
      {/* First button */}
      <button
        onClick={() => setShowInfo(true)}
        className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600"
      >
        Show Details
      </button>

      {/* Second button */}
      <button
        onClick={() => setShowOther(true)}
        className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600"
      >
        Show Other Info
      </button>

      {/* First Modal */}
      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <h2 className="text-xl font-bold mb-2">Details</h2>
        <p>This is content injected inside the modal!</p>
      </Modal>

      {/* Second Modal */}
      <Modal isOpen={showOther} onClose={() => setShowOther(false)}>
        <h2 className="text-xl font-bold mb-2">Other Info</h2>
        <p>This is some different content inside another modal.</p>
      </Modal>

    </div>
  );
}

export default App;