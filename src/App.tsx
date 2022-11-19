import { Button, Center, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoListState } from "./global/state";
import { Todo } from "./global/types";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useRecoilState(TodoListState);
  console.log(data);

  const submit = () => {
    const item: Todo = {
      id: Math.random(),
      content: input,
      isDone: false,
    };
    setData([...data, item]);
    setInput("");
  };

  // i は　indexと同じ意味
  const onToggle = (i: number) => {
    const item: Todo = {
      ...data[i],
      isDone: !data[i].isDone,
    };
    const items: Todo[] = [...data.slice(0, i), item, ...data.slice(i + 1)];
    setData(items);
  };

  const onDelete = (a: number) => {
    const item: Todo[] = data.filter((todo) => todo.id !== a);
    setData(item);
    console.log(a);
  };

  return (
    <Center flexDirection={"column"} p={20}>
      <Flex>
        <Input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></Input>
        <Button onClick={submit}>ADD</Button>
      </Flex>

      {data.map((item, index) => (
        <Flex key={item.id}>
          <Checkbox isChecked={item.isDone} onChange={() => onToggle(index)} />
          <Text>{item.content}</Text>
          <Button onClick={() => onDelete(item.id)} disabled={!item.isDone}>
            Delete
          </Button>
        </Flex>
      ))}
    </Center>
  );
};

export default App;
