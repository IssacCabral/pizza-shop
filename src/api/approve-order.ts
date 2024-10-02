import { api } from "@/lib/axios";

export interface ApproveOrderParams {
  orderId: string;
}

export async function approveOrder(request: ApproveOrderParams) {
  await api.patch(`/orders/${request.orderId}/approve`);
}
