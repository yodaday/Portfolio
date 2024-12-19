import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
