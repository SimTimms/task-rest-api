import "./Button.css";

interface ButtonProps {
  text: string;
  callback?: () => void;
}

/**
 * A reusable button component.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {string} props.text - The text to display inside the button.
 * @param {() => void} [props.callback] - An optional callback function to be executed when the button is clicked.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({ text, callback }: ButtonProps) {
  console.log(callback);
  return (
    <button className="general-button" onClick={() => callback && callback()}>
      {text}
    </button>
  );
}
