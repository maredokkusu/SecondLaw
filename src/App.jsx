import "./App.css";
import Footer from "./assets/components/Footer/Footer"
import Form from "./assets/components/Form/Form";
import TopBar from "./assets/components/TopBar/TopBar";
import Strength from "./assets/components/Strength/Strength";
import NutritionAnd from "./assets/components/NutritionAnd/NutritionAnd";
import About from "./assets/components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <TopBar />
      <Strength />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form />
            </>
          }
          />
        <Route path="/" element={<Form />} />
        <Route path="/nutrition" element={<NutritionAnd />} />
        <Route path="/about" element={<About />} />
      </Routes>
          <Footer/>
    </Router>
  );
}
export default App;
