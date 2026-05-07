
import "./App.css"
import { Routes, Route } from "react-router-dom";

import Portfolio from "./pages/portfolio/Portfolio";
import Mobile from "./pages/mobile/Mobile";
import MissingPage from "./pages/missing-page/MissingPage";
import { useRedirectOnMobile } from "./components/desktop/hook/useRedirectOnMobile";

function App() 
{
    // Redirect to mobile version if on a mobile device
    useRedirectOnMobile();

    return (
        <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/m" element={<Mobile />} />
            <Route path="*" element={<MissingPage />} />
        </Routes>
    )
}

export default App
