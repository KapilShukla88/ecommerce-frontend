import Image from "next/image";
import Link from "next/link";
import React from "react";

interface iImageWrapperComponentProps {
  readonly slug?: string;
  readonly imgUrl: string;
  readonly style?: string;
  readonly alt?: string;
}

const ImageWrapper: React.FC<iImageWrapperComponentProps> = ({
  slug = "/",
  imgUrl = "",
  alt = "",
  style = "",
}) => {
  return (
    <Link href={slug}>
      <Image src={imgUrl} alt={alt} fill sizes="(max-width: 768px) auto, (max-width: 1200px) auto" />
    </Link>
  );
};

export default ImageWrapper;
