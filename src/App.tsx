import Listings from "./component/Listings";
import Navbar from "./component/navbar/navbar";
import WelcomeBoard from "./component/welcomeBoard/WelcomeBoard";

const App = () => {
  return (
    <div className="text-dark">
      <Navbar />
      <WelcomeBoard />
      <Listings />
    </div>
  );
};

export default App;
