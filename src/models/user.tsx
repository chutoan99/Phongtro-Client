export interface Welcome {
  data: Data;
}

export interface Data {
  user: User;
}

export interface UserResponse {
  err: number;
  msg: string;
  response: User[];
}

export interface User {
  createdAt: Date;
  id: string;
  name: string;
  password: string;
  phone: string;
  updatedAt: Date;
  zalo: string;
}
