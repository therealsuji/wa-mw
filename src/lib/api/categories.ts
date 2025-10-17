export const CATEGORY_MAPPINGS = {
  "men's clothing": "men",
  "women's clothing": "women",
  electronics: "electronics",
  jewelery: "jewelry",
} as const;

export type ApiCategory = keyof typeof CATEGORY_MAPPINGS;
export type UrlCategory = (typeof CATEGORY_MAPPINGS)[ApiCategory];

// converts a slugged category to the api category
export const mapUrlCategoryToApi = (urlCategory: string): string => {
  const apiCategory = Object.entries(CATEGORY_MAPPINGS).find(
    ([_, slug]) => slug === urlCategory
  )?.[0];
  return apiCategory ?? urlCategory;
};

// converts an api category to a slugged category
export const mapApiCategoryToUrl = (apiCategory: string): string => {
  if (apiCategory in CATEGORY_MAPPINGS) {
    return CATEGORY_MAPPINGS[apiCategory as keyof typeof CATEGORY_MAPPINGS];
  }
  // if we do get here it will break, but lets keep it like this for now
  return apiCategory;
};
