import { api } from "@/lib/axios";

export interface DispatchOrderParams {
  orderId: string;
}

export async function dispatchOrder(request: DispatchOrderParams) {
  await api.patch(`/orders/${request.orderId}/dispatch`);
}
