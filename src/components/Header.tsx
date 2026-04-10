const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Logo" className="h-10 w-10 rounded-md" />
          <span className="text-xl font-bold tracking-tight">Assados Franz</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/" className="hover:opacity-80 transition-opacity">Início</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Cardápio</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
