import "./Button.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  callback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A reusable button component.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {string} props.text - The text to display inside the button.
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void)?} props.callback - An optional callback function to be executed when the button is clicked.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({ text, callback, disabled }: ButtonProps) {
  return (
    <button
      className="crud-button"
      onClick={callback}
      aria-label={text}
      disabled={disabled ? disabled : false}
    >
      {text}
    </button>
  );
}
