import HeroCarousel from "components/utils/heroCarrousel";
import About from "components/specific/about";
import Services from "components/specific/services";
import Products from "components/specific/products";
import Details from "components/specific/details";
import Contact from "components/specific/contact";
function App(): JSX.Element {
  return (
    <>
      <HeroCarousel />
      <About />
      <Services />
      <Products />

      <Details />
      <Contact />
    </>
  );
}
export default App;
