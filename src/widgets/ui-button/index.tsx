export interface IUIButtonProps {
  className?: string;
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  appendClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

/**
 * View for UIButton
 * @param props
 * @returns
 */
function UIButton(props: IUIButtonProps) {
  return (
    <button
      onClick={(event) => props.onClick?.(event)}
      type={props.type}
      disabled={props.disabled}
      className={
        props.className
          ? props.className
          : `bg-black w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg sm:w-auto ${
              props.appendClassName || ""
            }`
      }
    >
      {props.text}
    </button>
  );
}

export default UIButton;
