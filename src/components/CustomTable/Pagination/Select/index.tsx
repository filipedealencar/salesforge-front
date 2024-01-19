import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Content, OptionItem, Wrapper } from "./styles";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SelectProps {
  options: any[];
  label?: string;
  backgroundColor?: string;
  width?: number | string;
  value?: string;
  onChange?: (value: string) => void;
  boxShadow?: boolean;
  borderColor?: string;
  background?: string;
  color?: string;
  padding?: string;
}

interface HTMLCustomSelectElement extends HTMLDivElement {
  value: string;
}
type OptionsPosition = "top" | "bottom";

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  width,
  backgroundColor,
  value,
  onChange,
  boxShadow,
  borderColor,
  background,
  color,
  padding,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [optionsFiltered, setOptionsFiltered] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [optionsPosition, setOptionsPosition] =
    useState<OptionsPosition>("bottom");
  const [contentHeight, setContentHeight] = useState(0);

  const selectRef = useRef<HTMLCustomSelectElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: selectRef,
    callback: () => {
      setIsOpen(false);
    },
  });

  useEffect(() => {
    if (value) {
      const currentValue = options.find((option) => option.value === value);
      if (currentValue != null) {
        setSelectedOption(currentValue);
      }
    }
  }, [value]);

  useEffect(() => {
    setOptionsFiltered(
      options.filter((option) => option.value !== selectedOption?.value)
    );
  }, [options, selectedOption]);

  const toggleSelect = () => {
    if (optionsRef?.current) {
      const optionsPosition = optionsRef?.current?.getBoundingClientRect();
      const { height, bottom } = optionsPosition;
      setContentHeight(height);

      const bottomBorder = bottom + height;

      if (bottomBorder > window.innerHeight) {
        setOptionsPosition("top");
      } else {
        setOptionsPosition("bottom");
      }
    }

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => () => {
    setIsOpen(false);
    setSelectedOption(option);
    if (onChange != null) onChange(option.value);
  };

  if (options?.length === 1) {
    const [option] = options;
    return (
      <Wrapper>
        <Container style={{ width, backgroundColor }} disabled>
          <Button open={false} disabled>
            <p>{option.label}</p>

            <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path
                d="M3 5L6 8L9 5"
                stroke="#252728"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Container
      borderColor={borderColor}
      boxShadow={boxShadow}
      background={background}
      ref={selectRef}
      tabIndex={0}
      style={{ width, backgroundColor }}
    >
      <Button
        padding={padding}
        color={color}
        type="button"
        onClick={toggleSelect}
        open={isOpen}
      >
        <div>
          {selectedOption?.icon}
          <p>{label ?? selectedOption?.label}</p>
        </div>

        {/* <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
          <path
            d="M3 5L6 8L9 5"
            stroke="#252728"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg> */}
      </Button>

      <Content
        ref={optionsRef}
        open={isOpen}
        position={optionsPosition}
        height={contentHeight}
      >
        {optionsFiltered.map((option) => (
          <OptionItem key={option.value} onClick={handleOptionClick(option)}>
            {option?.icon}
            <p>{option.label}</p>
          </OptionItem>
        ))}
      </Content>
    </Container>
  );
};
