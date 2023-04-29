import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import { MainLayout } from "./layouts/MainLayout";
import { FullPizza } from "./pages/FullPizza";
import "./scss/app.scss";

const Cart = React.lazy(() => import("./pages/Cart"));
const NotFound = React.lazy(() => import("./pages/NotFound"))
// const FullPizza = React.lazy(() => import('./pages/FullPizza'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Готовим Пиццы...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<React.Suspense><NotFound /></React.Suspense>} />
      </Route>
    </Routes>
  );
}

export default App;
