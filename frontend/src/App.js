import { AppMui } from "./mui/AppMui";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AppRedux } from "./redux/AppRedux";
function App() {
  return (
    <AppRedux>
      <AppMui>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppMui>
    </AppRedux>
  );
}

export default App;
