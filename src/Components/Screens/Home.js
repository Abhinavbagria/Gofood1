import Navbar from '../Navbar';
import Footer from '../Footer';
import Cards from '../Cards';
import Whatonmind from './Whatonmind';
import Cards3 from './Cards3';

export default function Home() {
  return (
    <>
      <Navbar />

      <Cards title="Pizza" />

      <br />

      <Whatonmind />

      <br />

      <h2
        style={{
          fontFamily: 'Gilroy',
          fontWeight: 800,
          fontSize: '35px',
        }}
      >
        Top restaurant chains in Jind
      </h2>

      <Cards3 /> {/* Rendered once — includes all 5 cards */}

      <Footer />
    </>
  );
}
