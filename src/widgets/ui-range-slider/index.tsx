import { useCallback, useMemo, useState } from "react";

interface iRangeSliderProps {
  sliderValueChanged(_value: number): void;
  parentVal: number;
  minValue: number;
  maxValue: number;
  label: string;
}

const RangeSlider: React.FC<iRangeSliderProps> = ({
  sliderValueChanged = (f: any) => f,
  parentVal = 0,
  minValue = 0,
  maxValue = 0,
  label = "",
}) => {
  // need useMemo why? if this component rendered we don't want to recreate a new instance of the configuration object,
  // but recreate it when parentVal gets changed, so Slider will re-render,
  // and you can remove parentVal from dependency array and once the parent parentVal gets updated slider will not be re-renderd
  const sliderProps = useMemo(
    () => ({
      min: minValue,
      max: maxValue,
      value: parentVal,
      step: 2,
      label,
      onChange: (e: any) => sliderValueChanged(e?.target?.value),
    }),
    // dependency array, this will call useMemo function only when parentVal gets changed,
    // if you 100% confident parentVal only updated from Slider, then you can keep empty dependency array
    // and it will not re-render for any configuration object change
    [parentVal]
  );

  return (
    <div className="relative w-full py-5">
      <p className="mb-2 text-gray-700">{sliderProps.label}</p>
      <div className="relative">
        <input
          type="range"
          className="w-full h-1 bg-gray-300 outline-none appearance-none"
          id="myRange"
          {...sliderProps}
          style={{
            backgroundSize: `${(parentVal / 100) * 100}% 100%`,
            // WebkitAppearance: 'none',
            // backgroundColor: 'gray'
          }}
          data-value={parentVal}
        />
        <div
          className="absolute left-0 transform -translate-x-1/2 items-center justify-center flex -top-10 px-2 py-1 rounded text-white font-semibold text-xs  bg-green-500"
          style={{
            left: `${(parentVal / 100) * 100}%`,
            transform: "translateX(-50%)",
            backgroundColor: "#FF914D",
            borderRadius: "100%",
            width: 25,
            height: 25,
          }}
        >
          {parentVal}
        </div>
      </div>
    </div>
  );
};
export default RangeSlider;
