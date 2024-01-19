import {
  ReactNode,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  BoxOptions,
  BoxSelect,
  ContainerOptions,
  ContainerSelect,
  ContentOptions,
  OptionSelected,
  SelectLabel,
} from "./styles";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { IconArrowSelect } from "@/icons";

interface SelectProps {
  options: { label: string | ReactNode; value: string; active: boolean }[];
  value?: string;
  label?: string;
  iconSearch?: boolean;
  type?: string;
  widthSelect?: number;
  height?: number;
  marginBottom?: number;
  hasBorder?: boolean;
  paddingSelected?: string;
  filterBy?: (value: string) => void;
  initialValue?: {
    label: string | ReactNode;
    type?: string;
    value: string;
    active: boolean;
    color?: string;
    backgroundColor?: string;
  };
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  label,
  filterBy,
  widthSelect,
  iconSearch = true,
  hasBorder = true,
  paddingSelected,
  initialValue,
}) => {
  const [selected, setSelected] = useState(false);
  const [optionSelected, setOptionSelected] = useState({
    label: options[0]?.label,
    value: options[0]?.value,
    active: options[0]?.active,
  });

  const selectRef = useRef(null);

  useOutsideClick({
    ref: selectRef,
    callback: () => setSelected(false),
  });

  useEffect(() => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      setOptionSelected(selectedOption);
    }
  }, [value, options]);

  return (
    <ContainerSelect>
      {label && <SelectLabel>{label}</SelectLabel>}
      <BoxSelect
        width={widthSelect}
        ref={selectRef}
        onClick={() => setSelected(!selected)}
        selected={selected}
        hasBorder={hasBorder}
        padding={paddingSelected}
      >
        <ContainerOptions width={widthSelect} active={selected}>
          {options.map(
            (element, index) =>
              element.value !== optionSelected.value && (
                <ContentOptions
                  key={index}
                  onClick={() => {
                    filterBy && filterBy(element.value);
                    setOptionSelected({
                      label: element.label,
                      value: element.value,
                      active: element.active,
                    });
                  }}
                >
                  <BoxOptions>{element.label}</BoxOptions>
                </ContentOptions>
              )
          )}
        </ContainerOptions>
        <OptionSelected>
          {optionSelected.label ??
            (initialValue ? initialValue.label : "Todos")}
        </OptionSelected>
        <IconArrowSelect />
      </BoxSelect>
    </ContainerSelect>
  );
};
