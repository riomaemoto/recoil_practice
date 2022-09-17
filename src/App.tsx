import { useState } from "react";
import { useRecoilState } from "recoil";
import { todolistState } from "./global/state";
import { Todo } from "./global/types";

const App = () => {
  const [data, setData] = useRecoilState(todolistState);
  const [inputText, setInputText] = useState("");

  const onSubmit = () => {
    const item: Todo = {
      id: Math.random(),
      content: inputText,
      isDone: false,
    };
    setData([...data, item]);
    setInputText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={onSubmit}>ボタン</button>
      <br />
      <br />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
