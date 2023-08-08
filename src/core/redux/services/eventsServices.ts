import axios from "axios";
import { IEvent } from "../models/IEvent";

export async function fetchAllEvents(): Promise<IEvent[]> {
  return await axios.get(`https://jsonplaceholder.typicode.com/todos`);
}
