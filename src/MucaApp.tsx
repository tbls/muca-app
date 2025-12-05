import { BrowserRouter } from "react-router";
import { Provider } from 'react-redux';
import AppRouter from "./router/AppRouter";
import { store } from "./store/auth/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
