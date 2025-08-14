import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComp from "./Components/home";
import SignUpComp from "./Components/Auth/signUp";
import SignInComp from "./Components/Auth/signIn";
import PricingComp from "./Components/pages/pricing";
import NotFoundComp from "./Components/pages/notFound";
import AllCarsListComp from "./Components/pages/allCarsPage";
import CarDetailedPageComp from "./Components/pages/carDetailedPage";
import AllBrendsPageComp from "./Components/pages/allBrendsPage";
import AgentsDetailedPageComp from "./Components/pages/agentsDetailedPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/sign-up" element={<SignUpComp />} />
        <Route path="/sign-in" element={<SignInComp />} />
        <Route path="/pricing" element={<PricingComp />} />
        <Route path="/all-cars-list" element={<AllCarsListComp />} />
        <Route path="/car-detailed-page" element={<CarDetailedPageComp />} />
        <Route path="/all-brends-page" element={<AllBrendsPageComp />} />
        <Route
          path="agents-detailed-page"
          element={<AgentsDetailedPageComp />}
        />
        <Route path="*" element={<NotFoundComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
