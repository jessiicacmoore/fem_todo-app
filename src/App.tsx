import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
      <main role="main">
        <ToDoList />
      </main>
    </AppProvider>
  );
}

export default App;
