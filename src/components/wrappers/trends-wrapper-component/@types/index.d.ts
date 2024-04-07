type trendsContentPosition = "center" | "right" | "top" | "left" | "bottom";

interface iTrendsWrapperComponentViewParams
  extends iTrendsWrapperComponentParams {}

interface iTrendsWrapperComponentParams {
  readonly btnText?: string;
  readonly titleText?: string;
  readonly seasonDateText?: string;
  readonly contentPosition?: trendsContentPosition;
  readonly imgUrl: string;
  callback(): void;
}
