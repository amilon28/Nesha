import Services from "../Services/Services.component";
import MostRelatedSoftware from "../MostRelatedSoftwares/MostRelatedSoftwares.component";
import FavoriteSoftwares from "../FavoriteSoftwares/FavoriteSoftwares.component";
import ContactUs from "../ContactUs/ContactUs.component";

const Main = () => {
  return (
    <main>
      <Services />
      <MostRelatedSoftware />
      <FavoriteSoftwares />
      <ContactUs />
    </main>
  );
};

export default Main;
