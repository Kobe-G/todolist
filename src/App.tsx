import React, { useEffect, useState, createContext } from "react";
import DoneList from "./components/doneList";
import UnFinishedList from "./components/unFinishedList";

export const ListContext = createContext({});

function App() {
  //构造函数，返回一个item对象
  function CreateItem(content: string, isDone: boolean) {
    return {
      content: content,
      isDone: isDone,
    };
  }

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([CreateItem("学习语文", false)]);

  //在组件挂载成功后自动添加一个item
  useEffect(() => {
    //console.log("useEffect");
    const _list = list.concat();
    _list.push(CreateItem("学习英语", false));
    setList(_list);
  }, []);

  //合并两个处理函数为一个，合并逻辑
  function handleLiClick(index: number) {
    const _list = list.concat();
    if (_list[index].isDone) {
      _list.splice(index, 1);
    } else {
      _list[index].isDone = true;
    }
    setList(_list);
  }

  return (
    <>
      {"ci/cd test on remote web"}
      <div>
        <label htmlFor="insertArea">输入内容</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            const _list = list.concat();
            _list.push(CreateItem(inputValue, false));
            setList(_list);
            setInputValue("");
          }}
        >
          提交
        </button>
      </div>

      <ListContext.Provider value={{ list, handleLiClick }}>
        <UnFinishedList />
        <DoneList />
      </ListContext.Provider>
    </>
  );
}

export default App;
