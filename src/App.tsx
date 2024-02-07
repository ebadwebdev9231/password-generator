import { useState } from "react";
import useGeneratePassword, { CheckboxData } from "./hooks/useGeneratePassword";
import PasswordStrength from "./components/PasswordStrength";
import CopyPassword from "./components/CopyPassword";

const App = () => {
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [checkboxData, setCheckboxData] = useState<CheckboxData[]>([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lower Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Special Characters", state: false },
  ]);

  const { password, error, generatePassword } = useGeneratePassword();

  const handleCheck = (index: number) => {
    const updateCheckbox = [...checkboxData];
    updateCheckbox[index].state = !updateCheckbox[index].state;
    setCheckboxData(updateCheckbox);
  };
  return (
    <div className="md:w-[30%] w-[100%] mx-auto p-5">
      {/* Password text and copy button */}
      {password && (
        <div className="flex justify-between items-center">
          <div className="flex-grow">
            <p className="font-bold">{password}</p>
          </div>
          <div className="flex-grow-0">
            {/* <button className="">copy</button> */}
            <CopyPassword password={password} />
          </div>
        </div>
      )}
      {/* Character length */}
      <div className="flex justify-between items-center">
        <h3>Character Length</h3>
        <p>{passwordLength}</p>
      </div>
      <div>
        <input
          type="range"
          className="w-[100%]"
          min="4"
          max="20"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      {/* Checkboxes */}
      <div className="grid grid-cols-2 gap-2">
        {checkboxData.map((data, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={data.state}
              onChange={() => handleCheck(index)}
              id={data.title}
            />
            <label htmlFor={data.title}>{data.title}</label>
          </div>
        ))}
      </div>
      {/* Strength  */}
      <PasswordStrength password={password} />
      {/* Error Message */}
      {error && <p className="text-red-700">{error}</p>}
      {/* Generate button  */}
      <button
        className="bg-orange-400 px-3 py-2 w-[100%]"
        onClick={() => generatePassword(checkboxData, passwordLength)}
      >
        Generate Password
      </button>
    </div>
  );
};

export default App;
