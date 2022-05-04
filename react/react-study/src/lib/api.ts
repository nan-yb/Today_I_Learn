import client from "./client";

export const adminSetup = (userId: string, userName: string, userPw: string) => client.post("/users/setup", { userId, userName, userPw });

export const signIn = (userId: string, password: string) => client.post(`/users/authenticate?username=${userId}&password=${password}`);

export const getMyInfo = () => client.get("/users/myinfo");
