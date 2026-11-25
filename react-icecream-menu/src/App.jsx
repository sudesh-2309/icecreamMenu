import Header from "./components/Header";
import IceCreamList from "./components/IceCreamList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <IceCreamList />
      <Footer />
    </div>
  );
}

export default App;