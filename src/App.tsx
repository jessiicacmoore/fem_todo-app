import AppProvider from "./context/AppProvider";
import Header from "./components/Header";
import Container from "./components/ui/Container";
import ToDoList from "./components/ToDoList";
import SectionWrapper from "./components/ui/SectionWrapper";

function App() {
  return (
    <AppProvider>
      <Header />
      <main role="main" className="-mt-28">
        <Container>
          <SectionWrapper id="todo-form">
            <p>Input form</p>
          </SectionWrapper>
          <SectionWrapper id="todo-list">
            <ToDoList />
          </SectionWrapper>
          <SectionWrapper id="todo-filters">
            <p>Filters</p>
          </SectionWrapper>
        </Container>
      </main>
    </AppProvider>
  );
}

export default App;
