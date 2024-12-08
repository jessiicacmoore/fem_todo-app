import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header
      role="banner"
      className="bg-hero-mobile-light dark:bg-hero-mobile-dark bg-cover bg-no-repeat"
    >
      <h1 className="text-light-gray-100 uppercase">Todo</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
