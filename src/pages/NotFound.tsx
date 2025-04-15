import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="content">
          <h1>404</h1>
          <h3>Page Not Found</h3>
        </div>
      </section>

    </>
  );
};

export default NotFound;