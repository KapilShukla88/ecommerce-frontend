interface IUICheckboxProps {
  name: string;
  id: string;
  label?: string;
  className?: string;
  appendClassName?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => string;
}

/**
 * View for Input
 * @param props
 * @returns
 */
function UICheckbox(props: IUICheckboxProps) {
  return (
    <>
      {props.label ? (
        <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {props.label}
        </label>
      ) : null}
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        value={props.id}
        className={props.className ? props.className : `w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 ${props.appendClassName || ""} `}
        placeholder={props.placeholder}
        required={props.required}
        onChange={(event) => {
          props.onChange?.(event.target.value);
        }}
      />
    </>
  );
}

export default UICheckbox;
