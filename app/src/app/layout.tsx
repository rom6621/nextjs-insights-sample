import type { Metadata } from "next";
import "./globals.css";
import { getAppInsights } from "@/utils/app-insights";

export const metadata: Metadata = {
  title: "Todo App",
  description: "サンプルTodoアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  getAppInsights();

  return (
    <html lang="ja">
      <body className="flex flex-col gap-4 items-center justify-center">
        <main className="w-full max-w-5xl px-3 py-4 mb-14">{children}</main>
      </body>
    </html>
  );
}
