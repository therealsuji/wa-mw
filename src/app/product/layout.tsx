import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-20 min-h-screen">{children}</div>;
};

export default ProductLayout;
