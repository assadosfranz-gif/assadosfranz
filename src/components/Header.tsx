import { Facebook, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Logo" className="h-10 w-10 rounded-md" />
          <span className="text-xl font-bold tracking-tight">Assados Franz</span>
        </div>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
