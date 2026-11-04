
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

import AquacidPage from "./pages/products/AquacidPage";
import QuabicPage from "./pages/products/QuabicPage";

import ScrollToTop from "./components/common/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* INICIO */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        {/* AQUACID */}
        <Route
          path="/productos/aquacid"
          element={
            <MainLayout solidHeader>
              <AquacidPage />
            </MainLayout>
          }
        />

        {/* QUABIC */}
        <Route
          path="/productos/quabic"
          element={
            <MainLayout solidHeader>
              <QuabicPage />
            </MainLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}
