import { useRef, useState } from "react";
import Footer from "./footer";

function Contact() {
  let formRef = useRef();
  let [sucessBox, setSuccessBox] = useState(false);
  let [todo, setTodo] = useState({ task: "", description: "" });

  let handleChnageTaskAction = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let handleChangeDescriptionAction = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = async () => {
    console.log(todo);
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      alert();
      return;
    }

    let url = `http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}`;
    await fetch(url);

    // clear the box
    let newtodo = { task: "", description: "" };
    setTodo(newtodo);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-5 border border-warning rounded-4 mt-5 p-5">
          <form  className="needs-validation">
            <h1 className="text-center mt-1">Contact Us</h1>
            <input
              className="form-control form-control-lg  mt-5"
              type="text"
              placeholder="Enter Subject"
              value={todo.task}
              onChange={handleChnageTaskAction}
              required
            />

            <textarea
              className="form-control form-control-lg mb-2 mt-3"
              cols="30"
              rows="4"
              placeholder="Enter Query"
              value={todo.description}
              onChange={handleChangeDescriptionAction}
              required
            ></textarea>

            <input
              className="btn btn-lg btn-warning mt-4 w-100"
              type="button"
              value="Send message"
              onClick={addTodoAction}
            />
          </form>

          {sucessBox && (
            <div className="alert alert-success mb-4 mt-4">Your message has been sent.</div>
         )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
