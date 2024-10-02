import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex?: number | null;
}

export interface GetOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders(
  request: GetOrdersQuery,
): Promise<GetOrdersResponse> {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex: request.pageIndex,
    },
  });

  return response.data;
}
