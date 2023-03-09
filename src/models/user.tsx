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
  id: string;
  name: string;
  password: string;
  phone: string;
  updatedAt: Date;
  zalo: string;
  avatar: string;
  createdAt: Date;
}
