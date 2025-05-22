export interface IUser {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AllUser {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface CreateUserResponse {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export interface UpdateUserResponse {
  success: boolean;
  message: string;
}

export interface DeleteUserResponse {
  message: string;
  deleted: boolean;
}



