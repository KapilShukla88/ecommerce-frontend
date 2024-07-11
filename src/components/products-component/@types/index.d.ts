interface iProductTypes {
  _id: number;
  title: string;
  category: string;
  products: any;
}

interface iProductsViewProps {
  readonly products: any;
  handleOnBuyProducts(_productId: string): void;
  handleAddProductOnCart(_productId: string): void;
}
