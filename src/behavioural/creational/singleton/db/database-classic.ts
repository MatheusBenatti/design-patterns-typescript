interface User {
  name: string;
  age: number;
}
export class DatabaseClassic {
  private static instance: DatabaseClassic | null = null;
  private users: User[] = [];
  private constructor() {}

  static getInstance(): DatabaseClassic {
    if (DatabaseClassic.instance === null) {
      DatabaseClassic.instance = new DatabaseClassic();
    }
    return DatabaseClassic.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
