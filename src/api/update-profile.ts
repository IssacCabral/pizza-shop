import { api } from "@/lib/axios";

interface UpdateProfileBody {
  name: string;
  description: string | null;
}

export async function updateProfile(request: UpdateProfileBody) {
  await api.put("/profile", {
    name: request.name,
    description: request.description,
  });
}
