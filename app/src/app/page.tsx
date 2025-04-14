import { TodoList } from "@/components/todo-list";
import { getTodos } from "@/server/getTodo";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { success, error, result } = await getTodos();

  if (success === false) {
    throw new Error(error);
  }

  return (
    <div className="bg-white rounded-md w-full px-3 py-5 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-center">Todoリスト</h1>
      <hr className="border border-slate-300" />
      <TodoList todos={result} />
    </div>
  );
}
