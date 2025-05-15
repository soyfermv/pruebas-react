import Header from "./Header";
import Footer from "./Footer";

export default function LandingLayout({ htmlContent, cssContent }) {
  return (
    <div>
      <Header />
      <main dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <style dangerouslySetInnerHTML={{ __html: cssContent }} />
      <Footer />
    </div>
  );
}
