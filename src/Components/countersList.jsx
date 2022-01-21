import { React, useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Вилка" },
    { id: 2, value: 4, name: "Ложка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Кастрюля" },
    { id: 5, value: 0, name: "Сковорода" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((prevState) =>
      prevState.filter((counter) => counter.id !== id)
    );
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters((prevState) =>
      prevState.map((count) => {
        return count.id === id
          ? { ...count, value: count.value + 1 }
          : { ...count };
      })
    );
  };
  const handleDecrement = () => {
    setCounters((prevState) =>
      prevState.map((count) => {
        return count.id === id
          ? { ...count, value: count.value - 1 }
          : { ...count };
      })
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm" onClick={handleReset}>
        Очистить
      </button>
    </>
  );
};

export default CountersList;
