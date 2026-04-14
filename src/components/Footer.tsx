import logo from "@/assets/logo-selek.png";

const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Selek" className="h-8 w-auto" />
          <span className="text-muted-foreground text-sm">© 2026 Selek Soluciones Integrales SL</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+34672385890" className="hover:text-primary transition-colors">+34 672 38 58 90</a>
          <span>·</span>
          <span>Valencia, España</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
