import AppProvider from "./context/AppProvider";
import Container from "./components/ui/Container";
import SectionWrapper from "./components/ui/SectionWrapper";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import NewToDoForm from "./components/NewToDoForm";
import ToDoFilter from "./components/ToDoFilter";

function App() {
  return (
    <AppProvider>
      <Header />
      <main role="main" className="-mt-24">
        <Container>
          <SectionWrapper id="todo-form" className="py-0">
            <NewToDoForm />
          </SectionWrapper>
          <SectionWrapper id="todo-list">
            <ToDoList />
          </SectionWrapper>
          <SectionWrapper id="todo-filters" className="md:hidden">
            <ToDoFilter />
          </SectionWrapper>
        </Container>
      </main>
    </AppProvider>
  );
}

export default App;
