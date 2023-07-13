export interface UserResponse {
  userId: {
    err: number;
    msg: string;
    response: UserModel[];
  };
}

export interface UserModel {
  id: string;
  name: string;
  password: string;
  phone: string;
  updatedAt: Date;
  zalo: string;
  avatar: string;
  createdAt: Date;
}
