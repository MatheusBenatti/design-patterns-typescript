export class DatabaseClassic {
  private static instance: DatabaseClassic | null = null;

  private constructor() {}

  public static getInstance(): DatabaseClassic {
    if (DatabaseClassic.instance === null) {
      DatabaseClassic.instance = new DatabaseClassic();
    }
    return DatabaseClassic.instance;
  }
}

const db1 = DatabaseClassic.getInstance();
const db2 = DatabaseClassic.getInstance();

console.log(db1 === db2);
