import Greet from "./components/Greet";
import Person from "./components/Person";
import Personlist from "./components/Personlist";
import Status from "./components/Status";

const names = [
  { firstName: "Bruce", lastName: "Wayne" },
  { firstName: "Sree", lastName: "Wayne" },
  { firstName: "Raj", lastName: "Wayne" },
];

const App = () => {
  return (
    <div>
      App
      <Greet name={"10"} />
      <Person firstName="Sree" lastName="Raj" />
      <Personlist names={names} />
      <Status status="loading" />
    </div>
  );
};

export default App;
