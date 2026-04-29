// src/creational/singleton/Database.ts
export class Database {
    private static instance: Database;

    private constructor() {
        console.log("🛠️ Підключення до БД створено.");
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(sql: string): void {
        console.log(`🔍 Виконання запиту: ${sql}`);
    }
}