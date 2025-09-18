import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import CategoryPage from "./views/CategoryPage";
import ArtisanPage from "./views/ArtisanPage";
import SearchResultsPage from "./views/SearchResultsPage";
import LegalPage from "./views/LegalPage";
import ErrorPage from "./views/ErrorPage";

const basename =
  process.env.NODE_ENV === "production"
    ? "/Morieux_Tony_devoir_8_Devoir_Bilan_Trouve_ton_artisan"
    : "";

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorie/:categoryName" element={<CategoryPage />} />
        <Route path="/artisan/:artisanId" element={<ArtisanPage />} />
        <Route
          path="/mentions"
          element={<LegalPage pageType="mentions-legales" />}
        />
        <Route path="/artisans" element={<SearchResultsPage />} />
        <Route
          path="/data"
          element={<LegalPage pageType="donnees-personnelles" />}
        />
        <Route
          path="/accessibilite"
          element={<LegalPage pageType="accessibilite" />}
        />
        <Route path="/cookies" element={<LegalPage pageType="cookies" />} />
        <Route path="/contacts" element={<LegalPage pageType="contacts" />} />
        <Route path="/presse" element={<LegalPage pageType="presse" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
