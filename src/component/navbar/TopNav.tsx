import notificationIcon from "../../assets/Notification 1.svg";
import budgetingIcon from "../../assets/Budgeting.svg";
import calendarIcon from "../../assets/Calendar.svg";
import messageIcon from "../../assets/message-notif.svg";
import profileIcon from "../../assets/Profile.svg";
import logo from "../../assets/logo.svg";
import { useState } from "react";

type TopNavProps = {
  budgetHandler: () => void; // function prop
};

const TopNav: React.FC<TopNavProps> = ({ budgetHandler }) => {
  const [profileMenu, setProfileMenu] = useState(false);

  const openProfileHandler = () => {
    setProfileMenu((prev) => !prev);
  };

  const hoverStyle =
    "absolute text-xs bg-[#191919] p-3 mt-3 left-1/2 -translate-x-1/2 scale-0 rounded-lg transition-all group-hover:scale-100";
  return (
    <div className="w-full">
      <div className="bg-[#191919] py-5 px-28 flex justify-between text-white items-center">
        <img src={logo} width={153} height={100} />
        <ul className="flex gap-4 items-center">
          <li>
            <img src={notificationIcon} alt="Notification-icon" />
          </li>
          <li className="relative group cursor-pointer" onClick={budgetHandler}>
            <img src={budgetingIcon} alt="Budget-icon" />

            <span className={hoverStyle}>Budgeting</span>
          </li>
          <li className="relative group cursor-pointer">
            <img src={calendarIcon} alt="calendar-icon" />
            <span className={hoverStyle}>Calender</span>
          </li>
          <li>
            {" "}
            <img src={messageIcon} alt="Message-icon" />
          </li>
          <li className="relative group cursor-pointer outline-0 hover:outline-5 delay-50 transition-all rounded-full ">
            <img
              src={profileIcon}
              alt="profile-icon"
              onClick={openProfileHandler}
            />

            <span className="absolute bg-[#F5F5F5] p-3 rounded-lg mt-2 -right-2/12 text-black scale-0 group-hover:scale-100 transition-all">
              {profileMenu ? (
                <span>this shows</span>
              ) : (
                <>
                  {" "}
                  <p className="font-bold text-md tracking-wide">Dylan Frank</p>
                  <p className="text-sm text-gray-600">dylanfran96@gmail.com</p>
                </>
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
