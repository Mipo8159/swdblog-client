import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from "./context/notification.context";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
