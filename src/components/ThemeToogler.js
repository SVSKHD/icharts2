import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import {CustomInput} from "reactstrap"
import {FaSun , FaMoon} from "react-icons/fa"

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    
    <div>
      <CustomInput 
      type="switch" 
      id="exampleCustomSwitch" 
      name="customSwitch" 
      label={themeMode === "light" ? <FaSun className="text-warning" size={30}/> : <FaMoon className="text-light" size={30}/>}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
      />
      <span></span>
    </div>
  );
};

export default ThemeToggler;
