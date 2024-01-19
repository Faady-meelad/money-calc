import UserInput1 from "./components/UserInput.jsx";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsvalid = UserInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput1 UserInput={UserInput} onChange={handleChange} />
      {!inputIsvalid && (
        <p className="center"> please inter a duration more than zero</p>
      )}
      {inputIsvalid && <Results input={UserInput} />}
    </>
  );
}

export default App;
