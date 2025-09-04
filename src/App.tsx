import "./App.css";
import { ModalContent } from "./components/BasicModal";
import { Tooltip } from "./components/Tooltip";
import { Notification } from "./components/ToastNotifications";

function App() {
  return (
    <>
      <ModalContent />
      <Tooltip />
      <Notification />
    </>
  );
}

export default App;
