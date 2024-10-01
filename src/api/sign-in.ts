import { api } from "@/lib/axios";

export interface SignInBody {
  email: string;
}

export async function signIn(request: SignInBody) {
  await api.post("/authenticate", { email: request.email });
}
