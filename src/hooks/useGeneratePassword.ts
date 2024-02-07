import { useState } from "react";

export interface CheckboxData {
  title: string;
  state: boolean;
}

const useGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const generatePassword = (
    checkboxData: CheckboxData[],
    passwordLength: number
  ) => {
    let charset = "",
      generatedPassword = "";

    const selectedOption = checkboxData.filter((data) => data.state);

    if (selectedOption.length === 0) {
      setError("Select at least one Option.");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include Lower Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Numbers":
          charset += "1234567890";
          break;

        case "Include Special Characters":
          charset += "!@#$%^&*()";
          break;

        default:
          break;
      }
    });

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setError("");
  };
  return { password, error, generatePassword };
};
export default useGeneratePassword;
