export type UserData = {
  email: string;
  password: string;
};

export const userStore: { registeredUser?: UserData } = {};