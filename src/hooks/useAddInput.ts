import { useState } from 'react'

const useAddInput = () => {
  
  const [inputValue, setInputValue] = useState<string>("");
  
  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value)
  };
  
  const resetInputValue = () => {
    setInputValue("")
  };
  
  const addElement = () => {
    console.log("element added")
    resetInputValue()
  };
  
  return {
    inputValue,
    onInputChange,
    resetInputValue,
    addElement,
  }
}

export default useAddInput