const Navbar = () => {
  const hoverStyle =
    "absolute text-xs bg-[#191919] p-3 mt-3  left-1/2 -translate-x-1/2 scale-0 rounded-lg transition-all group-hover:scale-100";
  return (
    <div className="w-full">
      <div className="bg-[#191919] py-5 px-28 flex justify-between text-white items-center">
        <img src="/src/assets/logo.svg" width={153} height={100} />
        <ul className="flex gap-4 items-center">
          <li>
            <img src="/src/assets/Notification 1.svg" alt="Notification-icon" />
          </li>
          <li className="relative group cursor-pointer">
            <img src="/src/assets/Budgeting.svg" alt="Budget-icon" />
            <span className={hoverStyle}>Budgeting</span>
          </li>
          <li className="relative group cursor-pointer">
            <img src="/src/assets/Calendar.svg" alt="calendar-icon" />
            <span className={hoverStyle}>Calender</span>
          </li>
          <li>
            {" "}
            <img src="/src/assets/message-notif.svg" alt="Message-icon" />
          </li>
          <li>
            {" "}
            <img src="/src/assets/Profile.svg" alt="profile-icon" />
          </li>
        </ul>
      </div>
      <div>Bottom Nav</div>
    </div>
  );
};

export default Navbar;
