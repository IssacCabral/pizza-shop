import { api } from "@/lib/axios";

export interface SignOut {}

export async function signOut() {
  await api.post("/sign-out");
}
