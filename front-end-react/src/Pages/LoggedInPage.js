import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import CarsIndex from "./Cars/CarsIndex";
import "../Components/Style/LoggedInPage.css";

export const LoggedInPage = ({ navToggle, mileageToggle }) => {
  // const imgStyle = {
  //   width: "30vh",
  //   height: "30vh",
  // };
  const history = useHistory();
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  if (user) {
    return (
      // <div className="log-start">
      //   {/* <h1> YOU ARE NOW LOGGED IN : </h1> */}
      //   <h1>Welcome {user.displayName} !</h1>

      //   {/* email: {user.email} */}

      //   <CarsIndex navToggle={navToggle} mileageToggle={mileageToggle} />

      //   {/* <button onClick={handleLogout}> LOG OUT</button> */}
      // </div>
      //   <div className="log-start">
      //   <div className="corner-fix">
      //     <a
      //       href="https://www.irs.gov/newsroom/heres-the-411-on-who-can-deduct-car-expenses-on-their-tax-returns"
      //       target="blank"
      //     >
      //       Car Expenses
      //     </a>
      //     <a
      //       href="https://www.irs.gov/tax-professionals/standard-mileage-rates"
      //       target="blank"
      //     >
      //       Mileage Rates
      //     </a>
      //     <div className="dropdown">
      //       <div className="dropbtn">Driver Resources</div>
      //       <div className="dropdown-content">
      //         <a href="https://www.uber.com/us/en/drive/tax-information/"
      //          target="blank">
      //           Uber
      //         </a>
      //         <a href="https://www.lyft.com/driver/taxes"
      //          target="blank">
      //            Lyft</a>
      //         <a href="#"
      //          target="blank">Other</a>
      //       </div>
      //     </div>

      //     <div onClick={handleLogout}>
      //       logout
      //     </div>
      //   </div>

      //   <CarsIndex navToggle={navToggle} mileageToggle={mileageToggle} />

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 781aba723c6969d4235873c45d97b417d851c07b
    // </div>
    <div>
      {/* <div className="whita"> 
      <p>
       
<<<<<<< HEAD
=======
      // </div>
      <div>
        <div className="whita">
          <p>
>>>>>>> ed3d82f72270ccb39d03c38c392823bb60c58e95
=======

>>>>>>> 781aba723c6969d4235873c45d97b417d851c07b
            Welcome {user.displayName}, Trip App understands the importance of
            business owners and independant contractors documenting their
            mileage and automotive expenses and we are here to make that process
            as easy as possible for you.
          </p>
        </div>
        <div className="grena">
          <p>Learn more about tax breaks you may qualify for:</p>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>  */}
=======
        </div>
>>>>>>> ed3d82f72270ccb39d03c38c392823bb60c58e95
=======
        </div>  */}

>>>>>>> 781aba723c6969d4235873c45d97b417d851c07b
        <CarsIndex navToggle={navToggle} mileageToggle={mileageToggle} />
      </div>
    );
  } else return <div> NOT LOGGED IN </div>;
};
