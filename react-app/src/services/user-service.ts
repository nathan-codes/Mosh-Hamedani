import create from "./http-service";

export interface User {
  id: number;
  username: string;
}



export default create("/users");
