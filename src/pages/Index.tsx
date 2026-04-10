import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <iframe
          src="https://pedido.brendi.com.br/assadosfranz"
          className="w-full h-full border-0"
          style={{ minHeight: "calc(100vh - 120px)" }}
          title="Pedido Online"
          allow="geolocation; payment"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
