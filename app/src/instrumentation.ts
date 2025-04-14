export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("start instrumain");
    await import("./instrumentation.node");
  }
}
