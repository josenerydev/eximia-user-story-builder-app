// App.tsx
import "./App.css";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="container">
          <MainContent />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
