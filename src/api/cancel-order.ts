import { api } from "@/lib/axios";

export interface CancelOrderParams {
  orderId: string;
}

export async function cancelOrder(request: CancelOrderParams) {
  await api.patch(`/orders/${request.orderId}/cancel`);
}
