import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import Advantages from '@/components/Advantages';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCatalog />
      <Advantages />
      <Projects />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
}
