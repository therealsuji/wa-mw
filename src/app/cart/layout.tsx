import React from "react";

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-20 min-h-screen">{children}</div>;
};

export default CartLayout;
