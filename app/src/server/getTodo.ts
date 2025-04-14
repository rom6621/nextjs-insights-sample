"use server";

import { Result, Todo } from "@/types";
import { trace } from "@opentelemetry/api";

export async function getTodos(): Promise<Result<Todo[]>> {
  const tracer = trace.getTracer("todo tracer");

  const getSpan = tracer.startSpan("Get Todo Span");
  const todos: Todo[] = [
    {
      id: "000001",
      title: "買い物",
    },
    {
      id: "000002",
      title: "掃除",
    },
  ];
  getSpan.addEvent("5秒待ちます");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  getSpan.addEvent("処理を完了しました");
  getSpan.end();

  return {
    success: true,
    result: todos,
    error: null,
  };
}
