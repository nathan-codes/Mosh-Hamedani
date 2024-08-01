import { FormEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    age: "",
  });

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(formData)
   }
    
  return (
    <div>
      <form action="#" onSubmit={handleSubmit} className="d-flex flex-column border border-primary">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(evt) =>
              setFormData({ ...formData, name: evt.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
        </div>
        <div>
          <label htmlFor="password">Age:</label>
          <input
            type="number"
            id="age"
            onChange={(evt) =>
              setFormData({ ...formData, age: evt.target.value })
            }
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
