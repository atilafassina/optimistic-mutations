import { buildClient, BaseClientOptions, XataRecord } from "@xata.io/client";

export interface Todo {
  message?: string | null;
  is_done?: boolean | null;
  created_at?: string | null;
  user?: UserRecord | null;
}

export type TodoRecord = Todo & XataRecord;

export interface User {
  password?: string | null;
  username?: string | null;
}

export type UserRecord = User & XataRecord;

export interface Dinner {
  cuisine?: string | null;
  dish?: string | null;
}

export type DinnerRecord = Dinner & XataRecord;

export type DatabaseSchema = {
  todos: Todo;
  users: User;
  dinner: Dinner;
};

const tables = ["todos", "users", "dinner"];

const DatabaseClient = buildClient();

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super(
      { databaseURL: "https://demos-urucbe.xata.sh/db/donex", ...options },
      tables
    );
  }
}
