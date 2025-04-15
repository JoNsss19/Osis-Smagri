import Navbar from './components/Navbar';
import StickyNavbar from './components/StickyNavbar';

const App = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="content">
          <h1>Welcome To</h1>
          <h3>Official website of OSIS SMA PGRI Temanggung</h3>
        </div>
      </section>
      <StickyNavbar />
      <section className="coming">
        <div className="comingbox">
          <h1>UNDER MAINTENANCE</h1>
          <p>Still in the development stage by JoNs</p>
        </div>
      </section>

    </>
  );
};

export default App;
