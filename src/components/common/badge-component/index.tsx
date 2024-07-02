interface iBadgeParams {
  textColor?: string;
  bgColor?: string;
  number?: number;
  children: React.ReactNode;
}

const Badge: React.FC<iBadgeParams> = ({
  textColor = "#fff",
  bgColor = "#FF914D",
  number = 0,
  children,
}) => {
  return (
    <div className="relative">
      {number !==0  && (
        <div
          className={`absolute -right-4 -top-2 bg-[${bgColor}] text-[${textColor}] text-xs text-center flex items-center justify-center rounded-full w-4 p-1 h-4`}
        >
          {number}
        </div>
      )}
      {children}
    </div>
  );
};

export default Badge;
