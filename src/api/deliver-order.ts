import { api } from "@/lib/axios";

export interface DeliverOrderParams {
  orderId: string;
}

export async function deliverOrder(request: DeliverOrderParams) {
  await api.patch(`/orders/${request.orderId}/deliver`);
}
