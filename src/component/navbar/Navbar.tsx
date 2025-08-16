import BottomNav from "./BottomNav";
import BudgetModal from "./BudgetModal";
import TopNav from "./TopNav";
import { useState } from "react";

const Navbar = () => {
  const [openBudget, setOpenBudget] = useState(false);

  const openBudgetHandler = () => {
    setOpenBudget((prev) => !prev);
  };
  return (
    <div>
      <TopNav budgetHandler={openBudgetHandler} />
      <BottomNav />
      {openBudget && <BudgetModal />}
    </div>
  );
};

export default Navbar;
