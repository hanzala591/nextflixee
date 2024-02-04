import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Gap from "./Component/Gap";
import Enjoy from "./Component/Enjoy";
import Download from "./Component/Download";
import Watch from "./Component/Watch";
import CreateProfile from "./Component/CreateProfile";
import Question from "./Component/Question";

function App() {
  return (
    <div>
      <Header></Header>
      <Gap></Gap>
      <Enjoy></Enjoy>
      <Gap></Gap>
      <Download></Download>
      <Gap></Gap>
      <Watch></Watch>
      <Gap></Gap>
      <CreateProfile></CreateProfile>
      <Gap></Gap>
      <Question></Question>
    </div>
  );
}

export default App;
