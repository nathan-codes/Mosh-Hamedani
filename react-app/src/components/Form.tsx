import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const formData = {
    name: "",
    age: 0,
  };
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (nameRef.current !== null) {
      formData.name = nameRef.current?.value;
    }
    console.log(formData);
  };

  console.log(formData);
  return (
    <>
      <h1>Form</h1>
      <form action="#">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" ref={nameRef} />
        <label htmlFor="age">Age: </label>
        <input type="number" id="age" ref={ageRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Form;
