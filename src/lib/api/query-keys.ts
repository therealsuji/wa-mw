interface ProductListParams {
  limit?: number;
  sort?: string;
}

export const productKeys = {
  all: () => ["products"] as const,
  list: (params?: ProductListParams) =>
    [...productKeys.all(), "list", params] as const,
  detail: (id: number) => [...productKeys.all(), "detail", id] as const,
  categories: () => [...productKeys.all(), "categories"] as const,
};

