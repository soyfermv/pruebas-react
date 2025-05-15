import "./App.css";
import LandingLayout from "./components/LandingLayout";
import { sanitizeHTML, sanitizeCSS } from "./utils/sanitize";

const rawHTML = `<section><h2>Bienvenido</h2><p>Esta es una landing de prueba.</p></section>`;
const rawCSS = `h2 { color: darkblue; font-family: sans-serif; }`;

function App() {
  const html = sanitizeHTML(rawHTML);
  const css = sanitizeCSS(rawCSS);

  return <LandingLayout htmlContent={html} cssContent={css} />;
}

export default App;
