interface iCardsParams {
  children: React.ReactNode;
  readonly productId: string;
  readonly title?: string;
  readonly price?: string;
  readonly subTitle?: string;
  readonly btnText?: string;
  readonly isCartNeed?: boolean;
  onClick(_id: string): void;
  onClickCart(_id: string): void;
}

interface iCardsViewParams extends iCardsParams {}
