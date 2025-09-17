import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <h1 className="text-center f1 mt-5 mb-5 text-color5">
        Page non trouvée !
      </h1>
      <div className="main justify-content-center"></div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
