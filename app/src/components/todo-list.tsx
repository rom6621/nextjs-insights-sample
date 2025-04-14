"use client";

import { Todo } from "@/types";
import { getAppInsights } from "@/utils/app-insights";

type Props = {
  todos: Todo[];
};

export function TodoList({ todos }: Props) {
  const onClickTodo = (todo: Todo) => {
    const appInsights = getAppInsights();
    appInsights.trackEvent({
      name: `${todo.title}がクリックされました`,
    });
  };

  return (
    <ul className="flex flex-col gap-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => onClickTodo(todo)}
          className="text-center py-2 rounded-md hover:cursor-pointer hover:bg-slate-100 border border-slate-300"
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
