import PlusLgIcon from "../../assets/icons/PlusLgIcon";
import useAddInput from "../../hooks/useAddInput";
import type { IAddInput } from "../../types/IAddInput";
import "./AddInput.css";

const AddInput: React.FC<IAddInput> = ({
  placeholder = "Write something...",
  addFunction,
}) => {
  const { inputValue, onInputChange, resetInputValue } = useAddInput();
  return (
    <form
      className="form-container"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue !== "" && inputValue.length !== 0) {
          addFunction(inputValue);
          resetInputValue();
        }
      }}
    >
      <input
        className="input-text"
        type="text"
        name=""
        id=""
        placeholder={placeholder}
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="button-submit" type="submit">
        <PlusLgIcon />
      </button>
    </form>
  );
};

export default AddInput;
