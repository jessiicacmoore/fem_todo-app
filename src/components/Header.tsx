import Container from "./ui/Container";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header
      role="banner"
      className="bg-hero-mobile-light bg-cover bg-no-repeat pb-40 pt-12 dark:bg-hero-mobile-dark"
    >
      <Container className="flex justify-between align-middle">
        <h1 className="text-3xl font-bold uppercase tracking-[.5em] text-light-gray-100">
          Todo
        </h1>
        <ThemeToggle />
      </Container>
    </header>
  );
}

export default Header;
