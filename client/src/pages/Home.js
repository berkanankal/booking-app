import Cities from '../components/Cities';
import Footer from '../components/Footer';
import GuestLoves from '../components/GuestLoves';
import Header from '../components/Header';
import HeaderSection from '../components/HeaderSection';
import SearchSection from '../components/SearchSection';
import Subscribe from '../components/Subscribe';
import Type from '../components/Type';

function Home() {
  return (
    <div className="main">
        <div className="bg-blue-900">
          <HeaderSection />
          <SearchSection />
        </div>
        <div className="content">
          <Cities />
          <Type />
          <GuestLoves />
          <Subscribe />
          <Footer />
        </div>
      </div>
  )
}

export default Home