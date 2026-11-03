
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AquacidPage from "./pages/products/AquacidPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          path="/productos/aquacid"
          element={
            <MainLayout solidHeader>
              <AquacidPage />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
