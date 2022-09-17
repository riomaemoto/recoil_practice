import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
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

  const onDelete = (a: number) => {
    const item: Todo[] = data.filter((todo) => todo.id !== a);
    setData(item);
  };

  const onToggle = (i: number) => {
    const item: Todo = {
      ...data[i],
      isDone: !data[i].isDone,
    };
    const items: Todo[] = [...data.slice(0, i), item, ...data.slice(i + 1)];
    setData(items);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Flex mb={8}>
        <Input
          width={"50vw"}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          mr={4}
        />
        <Button onClick={onSubmit}>ボタン</Button>
      </Flex>
      {data.map((item, index) => (
        <Flex key={item.id} mb={4}>
          <Checkbox
            isChecked={item.isDone}
            onChange={() => onToggle(index)}
            mr={4}
          />
          <Text pt={2}>{item.content}</Text>
          <Button
            ml={4}
            onClick={() => onDelete(item.id)}
            disabled={!item.isDone}
          >
            削除
          </Button>
        </Flex>
      ))}
    </div>
  );
};

export default App;
