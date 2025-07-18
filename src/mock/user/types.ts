export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  registrationDate: Date;
  status: "pending" | "approved" | "rejected";
}

export interface UserRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface MockDatabase {
  users: User[];
}
