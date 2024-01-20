import React, { useEffect, useState } from "react";
import {
  CollapseContainer,
  CollapseHeader,
  CollapseContent,
  ItemCollapseOptions,
  ContentItemCollapse,
  ContentInput,
  InputCollapse,
  ButtonInput,
} from "./styles";
import { IconArrowSelect } from "@/icons";
import { useDebounce } from "@/hooks/useDebounce";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomCollapse: React.FC<CollapseProps> = ({
  title,
  options,
  type,
  openCollapse,
  ref,
  filterBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setIsOpen(openCollapse);
  }, [openCollapse]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSearch = () => {
    filterBy && filterBy(startDate.toLocaleDateString());
  };

  return (
    <CollapseContainer ref={ref}>
      <CollapseHeader onClick={toggleCollapse}>
        {title} <IconArrowSelect />
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>
        {type === "input" ? (
          <ContentInput>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onSelect={(date) => {
                filterBy && filterBy(new Date(date).toLocaleDateString());
                setStartDate(new Date(date));
              }}
              onChange={(date) => {
                if (date) {
                  setStartDate(new Date(date));
                }
              }}
            />
            <ButtonInput onClick={handleDateSearch}>Enviar</ButtonInput>
          </ContentInput>
        ) : (
          React.Children.toArray(
            options.map((item) => (
              <ContentItemCollapse
                onClick={() => {
                  filterBy && filterBy(item.value);
                }}
              >
                <ItemCollapseOptions>{item.label}</ItemCollapseOptions>
              </ContentItemCollapse>
            ))
          )
        )}
      </CollapseContent>
    </CollapseContainer>
  );
};

export default CustomCollapse;
