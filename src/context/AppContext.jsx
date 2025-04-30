import { createContext, useState} from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setISAuth] = useState(
    localStorage.getItem("user") || localStorage.getItem("doctor") ? true : false
  );
  // console.log("isAuth" ,isAuth);
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const[doctor,setDoctor] = useState(JSON.parse(localStorage.getItem("doctor")))
  // console.log("user localStorage",user)
  // console.log("doctor localStorage",doctor)
  const currencySymbol = "$";

  // console.log("User from Context and localStorage", user);

  const value = {
    doctors,
    currencySymbol,
    isAuth,
    setISAuth,
    doctor,
    setDoctor,
    // setToken,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;