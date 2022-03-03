import { useEffect, useState } from "react";
import Card from "./components/Card";
import Checked from "./components/Checked";
import Confeti from "./components/Confeti";
import Form from "./components/Form";
import Row from "./components/Row";
import { useTasks } from "./hooks/useTasks";

function App() {
  const todo = useTasks([]);
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
      <div className="absolute h-screen w-screen">
        <Form setter={todo.setTasks} />
      </div>
      <header>
        <h1 className=" dark:text-white md:text-3xl py-1 px-3 font-bold">
          Simple Kanban
        </h1>
      </header>
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
