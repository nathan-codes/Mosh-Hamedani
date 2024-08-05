import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseTracker from "./components/ExpenseTracker";


const App = () => {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [name, setName] = useState("");

  const handleClick = (buttonId: string) => {
    console.log(`${buttonId} button has been clicked`);
    setIsAlertActive(true);
  };

  return (
    <div className="mt-4 ml-2 p-4">
      {/* {isAlertActive && <Alert onClose={()=>setIsAlertActive(false)}>dsd</Alert>}
      <Button color="primary" onclick={handleClick}>
        Secondary
      </Button> */}

      {/* <Message /> */}

      {/* <ExpandableText  maxChar={20} > 
     wew Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure tempora rem esse quasi! Nesciunt, rem recusandae quam, repellat, cupiditate amet blanditiis nam placeat maxime fugit ex sunt illum reprehenderit quaerat error maiores provident tempora? Suscipit deserunt alias tempora inventore!
      </ExpandableText> */}
      {/* <Form /> */}
      {/* <ExpenseTracker /> */}

      {/* <ListGroup items={["E",":ER"]} onselectItem={} /> */}
      {/* <Form /> */}

      {/* <ExpandableText maxChar={2}>
        sd Lorem ipsum dsds Lorem ipsum dolor sit amet.dsdsdsds sdsds dsds ds 
      </ExpandableText> */}
      <main className="container  ">
        <div className="row">
          <div className="col">
            <ExpenseTracker />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
