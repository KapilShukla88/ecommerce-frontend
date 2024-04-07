type tCarousalDataType = {
  _id: string;
  slug: string;
  name: string;
  sourceType: string;
  imgUrl: string;
};

interface iCarousalViewParams {
  readonly selectedIndex: number;
  readonly bannerClassName?: string;
  readonly data: tCarousalDataType[];
}
