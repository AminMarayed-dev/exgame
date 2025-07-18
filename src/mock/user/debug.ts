import { userDatabase } from "./database";

// Debug utilities for development
export const debugUtils = {
  // Print all registered users
  logAllUsers: () => {
    const users = userDatabase.getAll();
    console.log("📊 All registered users:", users);
    return users;
  },

  // Print database statistics
  logStats: () => {
    const stats = userDatabase.getStats();
    console.log("📈 Database statistics:", stats);
    return stats;
  },

  // Clear all users (for testing)
  clearAllUsers: () => {
    const users = userDatabase.getAll();
    users.forEach((user) => userDatabase.delete(user.id));
    console.log("🧹 All users cleared");
  },

  // Create sample users for testing
  createSampleUsers: async () => {
    const sampleUsers = [
      { firstName: "علی", lastName: "احمدی", email: "ali@example.com" },
      { firstName: "فاطمه", lastName: "محمدی", email: "fateme@example.com" },
      { firstName: "محمد", lastName: "حسینی", email: "mohammad@example.com" },
    ];

    for (const userData of sampleUsers) {
      await userDatabase.create(userData);
    }
    console.log("👥 Sample users created");
  },
};

// Make debug utilities available globally in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  (window as Window & { debugUsers?: typeof debugUtils }).debugUsers =
    debugUtils;
}
