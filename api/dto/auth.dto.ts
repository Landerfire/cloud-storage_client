export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
}

export interface RegisterFormDTO extends LoginFormDTO {
  fullName: string;
}

export interface RegisterResponseDTO extends LoginResponseDTO {}

export interface IUser {
  id: number;
  email: string;
  fullName: string;
}
