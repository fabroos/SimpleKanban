import { useEffect, useState } from "react";
import Card from "./components/Card";
import Confeti from "./components/Confeti";
import Form from "./components/Form";
import Row from "./components/Row";
import { useTasks } from "./hooks/useTasks";
const initialList = [
  {
    title: "End this homework Pls bro",
    description:
      "saklda sldjalsd jlksajdsdsdds kjsadjlashldhsdsdsd sssadhsadhas hdkljsahdjk sahdkjsadhsakd hasjdhaskjdhsa jkdhksahdja shdjkh ksajdlks",
    name: "Fabrizio Signoretta",
    category: "Work",
    id: "1234",
    row: "toDo",
  },
  {
    title: "JSAJDS Pls bro",
    description:
      "fffff kjsadjlashldhsdsdsd sssadhsadhas hdkljsahdjk sahdkjsadhsakd hasjdhaskjdhsa jkdhksahdja shdjkh ksajdlks",
    name: "Juan Signoretta",
    category: "Work",
    id: "4567",
    row: "toDo",
  },
  {
    title: "JSAJDS Pls bro",
    description:
      "fffff kjsadjlashldhsdsdsd sssadhsadhas hdkljsahdjk sahdkjsadhsakd hasjdhaskjdhsa jkdhksahdja shdjkh ksajdlks",
    name: "Juan Signoretta",
    category: "Work",
    id: "4567",
    row: "toDo",
  },
  {
    title: "JSAJDS Pls bro",
    description:
      "fffff kjsadjlashldhsdsdsd sssadhsadhas hdkljsahdjk sahdkjsadhsakd hasjdhaskjdhsa jkdhksahdja shdjkh ksajdlks",
    name: "Juan Signoretta",
    category: "Work",
    id: "4567",
    row: "toDo",
  },
];
function App() {
  const todo = useTasks(initialList);
  const doing = useTasks([]);
  const finished = useTasks([]);
  const [congrats, setCongrats] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCongrats(false);
    }, 2000);
  }, [finished, congrats]);
  console.log(todo.tasks);
  //__________________________________//
  return (
    <div className="App bg-slate-100 min-h-screen h-full dark:bg-gray-900">
      <header>
        <h1 className=" dark:text-white md:text-3xl py-1 px-3 font-bold">
          Simple Kanban
        </h1>
      </header>
      <div className="flex flex-col px-10 py-4 text-xl font-bold">
        <h2 className="dark:text-white">Form</h2>
        <Form setter={todo.setTasks} />
      </div>
      <Confeti run={congrats} />
      <div className="grid p-10 grid-cols-1 divide-gray-200 dark:divide-gray-800 divide-x min-h-full sm:grid-cols-3">
        <Row
          cards={todo.tasks}
          setter={[todo.setTasks, doing.setTasks]}
          type={todo.tasks}
        >
          <span className="mr-2">💼</span> To Do
        </Row>
        <Row
          cards={doing.tasks}
          setter={[doing.setTasks, finished.setTasks]}
          type={doing.tasks}
        >
          <span className="mr-2">💪🏻</span>Doing
        </Row>
        <Row
          cards={finished.tasks}
          setter={finished.setTasks}
          type={finished.tasks}
          congrats={setCongrats}
        >
          <span className="mr-2">🎉</span> Finished
        </Row>
      </div>
    </div>
  );
}

export default App;
