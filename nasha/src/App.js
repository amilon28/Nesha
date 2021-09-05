import Header from "./Components/Header/Header.component";
import Services from "./Components/Services/Services.component";
import MostRelatedSoftware from "./Components/MostRelatedSoftwares/MostRelatedSoftwares.component";
import FavoriteSoftwares from "./Components/FavoriteSoftwares/FavoriteSoftwares.component";
import ContactUs from "./Components/ContactUs/ContactUs.component";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <MostRelatedSoftware />
      <FavoriteSoftwares />
      <ContactUs />
    </div>
  );
}

export default App;
