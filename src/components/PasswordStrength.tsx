interface Props {
  password: string;
}
const PasswordStrength = ({ password = "" }: Props) => {
  const strengthChecker = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };
  const strength = strengthChecker();

  if (!strength) return null;

  return (
    <div className="flex justify-between items-center">
      <h4>Strength</h4>
      <p className="text-bold">{strength}</p>
    </div>
  );
};

export default PasswordStrength;
