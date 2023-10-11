import { AppMui } from "./mui/AppMui";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <AppMui>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
   </AppMui>
  );
}

export default App;
 