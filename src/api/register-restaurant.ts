import { api } from "@/lib/axios";

export interface RegiterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function regiterRestaurant(request: RegiterRestaurantBody) {
  await api.post("/restaurants", {
    restaurantName: request.restaurantName,
    managerName: request.managerName,
    email: request.email,
    phone: request.phone,
  });
}
