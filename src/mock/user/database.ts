import type { User, UserRegistrationData, MockDatabase } from "./types";

// Mock database storage (in a real app, this would be a proper database)
const mockDatabase: MockDatabase = {
  users: [],
};

// Generate a simple UUID for demo purposes
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// Database service functions
export const userDatabase = {
  // Create a new user
  create: async (userData: UserRegistrationData): Promise<User> => {
    const newUser: User = {
      id: generateId(),
      ...userData,
      registrationDate: new Date(),
      status: "pending",
    };

    mockDatabase.users.push(newUser);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return newUser;
  },

  // Get all users
  getAll: (): User[] => {
    return mockDatabase.users;
  },

  // Get user by ID
  getById: (id: string): User | undefined => {
    return mockDatabase.users.find((user) => user.id === id);
  },

  // Get user by email
  getByNationalCode: (nationalCode: string): User | undefined => {
    return mockDatabase.users.find((user) => user.nationalCode === nationalCode);
  },

  // Check if email exists
  emailExists: (email: string): boolean => {
    return mockDatabase.users.some((user) => user.email === email);
  },

  // Update user status
  updateStatus: (id: string, status: User["status"]): User | null => {
    const user = mockDatabase.users.find((user) => user.id === id);
    if (user) {
      user.status = status;
      return user;
    }
    return null;
  },

  // Delete user
  delete: (id: string): boolean => {
    const index = mockDatabase.users.findIndex((user) => user.id === id);
    if (index > -1) {
      mockDatabase.users.splice(index, 1);
      return true;
    }
    return false;
  },

  // Get database stats
  getStats: () => {
    return {
      totalUsers: mockDatabase.users.length,
      pendingUsers: mockDatabase.users.filter(
        (user) => user.status === "pending"
      ).length,
      approvedUsers: mockDatabase.users.filter(
        (user) => user.status === "approved"
      ).length,
      rejectedUsers: mockDatabase.users.filter(
        (user) => user.status === "rejected"
      ).length,
    };
  },
};

// Export the database for direct access if needed
export { mockDatabase };
