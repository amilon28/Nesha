import Header from "./Components/Header/Header.component";
import AddSoftware from "./Components/AddSoftware/AddSoftware.component";
import { ToastContainer } from "react-toastify";
const Submit = () => {
  return (
    <div>
      <Header type="3" className="type-3" />
      <AddSoftware />
      
    </div>
  );
};

export default Submit;
