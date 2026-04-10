import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-6">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4">
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Facebook size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram size={28} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <MessageCircle size={28} />
          </a>
        </div>
        <p className="text-sm opacity-70">© 2026 Assados Franz. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
