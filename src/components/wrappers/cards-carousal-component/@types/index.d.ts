interface iCardsCarousalComponentViewParams
  extends iCardsCarousalComponentParams {
  readonly selectedCardIndex: number;
  onClickCarousalCTA(_index: number): void;
}

interface iCardsCarousalComponentParams {
  readonly productsImages: string[];
}
