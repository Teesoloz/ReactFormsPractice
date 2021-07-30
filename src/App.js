import { useState } from "react";
import "./styles.css";

export default function App() {
  const [contact, setContact] = useState({ fName: "", lName: "", email: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);

    setContact((prevState) => {
      if (name === "fName") {
        return { fName: value, lName: prevState.lName, email: prevState.email };
      } else if (name === "lName") {
        return { fName: prevState.fName, lName: value, email: prevState.email };
      } else if (name === "email") {
        return { fName: prevState.fName, lName: prevState.lName, email: value };
      }
    });
  }

  return (
    <div className="App">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          type="text"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          type="text"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
