import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./components/portfolio/portfolio";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Home />
      <Portfolio />
      <Navigation />
      <Footer />
    </div>
  </StrictMode>
);
