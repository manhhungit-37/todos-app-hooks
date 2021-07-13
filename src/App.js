import NavBar from "./components/NavBar";
import Todos from "./components/Todos";
import AuthorizedContextProvider from "./contexts/AuthorizedContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthorizedContextProvider>
          <NavBar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthorizedContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
