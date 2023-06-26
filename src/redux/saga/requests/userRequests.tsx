import axios from "axios";

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
// };

// type GetUsersResponse = {
//   data: User[];
// };

export async function userRequests() {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
}
