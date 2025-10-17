interface ProductListParams {
  limit?: number;
  sort?: string;
}

export const productKeys = {
  all: () => ["products"] as const,
  list: (params?: ProductListParams) =>
    [...productKeys.all(), "list", params] as const,
};

