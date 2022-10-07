import 'assets/scss/style.scss'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";
import BookingInformation from "./parts/Checkout/BookingInformation";
import itemDetails from "json/itemDetails.json"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/booking" element={<BookingInformation itemDetails={itemDetails} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
