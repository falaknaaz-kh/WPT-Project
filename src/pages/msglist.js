import { useEffect, useState } from "react";
import Footer from "./footer";

function MsgList() {
  let [todoList, setTodoList] = useState([]);

  // spl function, useEffect()
  // useEffect(() => {}, []);
  // useEffect(() => getAllTodoAction(), []);
  useEffect(() => {
    getAllTodoAction();
  }, []);

  let getAllTodoAction = async () => {
    let url = `http://localhost:4000/find-all-todo`;
    let res = await fetch(url);
    let list = await res.json();

    // list updated.
    let newlist = [...list];
    setTodoList(newlist);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8">
          <h1 className="text-center mb-4">Display All Messages</h1>
        </div>
      </div>

      {todoList.map((item) => (
        <>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
              <div className="alert alert-warning mb-1">
                <div className="fs-4 text-capitalize">{item.task} :</div>
                <div>{item.description}</div>
              </div>
            </div>
          </div>
        </>
      ))}
      <Footer />
    </>
  );
}

export default MsgList;
