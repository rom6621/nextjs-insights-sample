export type Result<T> =
  | {
      success: false;
      result: null;
      error: string;
    }
  | {
      success: true;
      result: T;
      error: null;
    };
