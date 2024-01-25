import { useState } from 'react';

import Header from './components/header/Header';
import UserInput from './components/user_input/UserInput';
import Results from './components/results/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 12,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleUserInputChange = (identifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [identifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header title="Investment Calculator" />
      <UserInput onChangeInvestment={handleUserInputChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter duration greater than 0</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
