export interface UserResponse {
  data: {
    user: {
      err: number;
      msg: string;
      response: User[];
    };
  };
}

export interface User {
  createdAt: Date;
  id: string;
  name: string;
  password: string;
  avatar: string;
  phone: string;
  updatedAt: Date;
  zalo: string;
}
