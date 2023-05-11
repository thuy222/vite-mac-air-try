import { ThemeProvider, theme } from "@chakra-ui/react";
import Select, { CSSObjectWithLabel } from "react-select";

export enum SelectSize {
  LG = "lg",
  MD = "md",
  SM = "sm",
}

interface SelectProps {
  size?: SelectSize;
  options: { value: string; label: string }[];
}

const sizeOptions = {
  [SelectSize.LG]: {
    height: "48px",
    minHeight: "48px",
    fontSize: "18px",
    backgroundColor: "red",
  },
  [SelectSize.MD]: {
    height: "40px",
    minHeight: "40px",
    fontSize: "16px",
  },
  [SelectSize.SM]: {
    height: "32px",
    minHeight: "32px",
    fontSize: "14px",
  },
};

export const selectStyles = (size?: SelectSize) => ({
  singleValue: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    color: "white",
    fontSize: "var(--chakra-fontSizes-sm)",
  }),
  control: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    ...(size && sizeOptions[size]),
    background: "transparent",
    padding: "4px 8px",
    borderRadius: 6,
    height: "44px",
    borderColor: "var(--chakra-colors-hwGray-3)",
    cursor: "pointer",
    "&:hover": {
      borderColor: "var(--chakra-colors-primary)",
      outline: "none",
      boxShadow: "unset",
    },
    "&:focus": {
      borderColor: "var(--chakra-colors-primary)",
      outline: "none",
      boxShadow: "unset",
    },
    "&:focus-visible": {
      borderColor: "var(--chakra-colors-primary)",
      outline: "none",
      boxShadow: "unset",
    },
    "&:focus-within": {
      borderColor: "var(--chakra-colors-primary)",
      outline: "none",
      boxShadow: "unset",
    },
  }),
  valueContainer: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    padding: "0 6px",
  }),
  input: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    color: "inherit",
    margin: "0px",
  }),
  indicatorSeparator: (state: any) => ({
    display: "none",
  }),
  indicatorsContainer: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
  }),
  menu: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    zIndex: 11,
    borderRadius: "8px",
  }),
  menuList: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    paddingBlock: "4px",
    background: "var(--chakra-colors-hwGray-1)",
    borderRadius: "8px",
    zIndex: 100,
  }),

  option: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    paddingInline: "8px",
    paddingBlock: "4px",
    color: "#ffffff",
    cursor: "pointer",
    backgroundColor: "var(--chakra-colors-hwGray-1)",
    "&:hover": {
      backgroundColor: "var(--chakra-colors-hwGray-2)",
    },
    "&:focus": {
      backgroundColor: "var(--chakra-colors-hwGray-2)",
    },
    "&:selected": {
      backgroundColor: "var(--chakra-colors-hwGray-3)",
    },
  }),
  groupHeading: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    paddingTop: 10,
    color: "var(--chakra-colors-hwGray-3)",
  }),
  group: (provided: CSSObjectWithLabel, state: any) => ({
    ...provided,
    padding: 0,
  }),
});

export const MySelect = () => {
  return (
    <Select
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "var(--chakra-colors-primaryLight)",
          primary50: "var(--chakra-colors-yellow-100)",
          primary: "var(--chakra-colors-primary)",
        },
      })}
      styles={{
        groupHeading: (provided, state) => {
          return {
            ...selectStyles(SelectSize.LG).groupHeading(provided, state),
          };
        },
        group: (provided, state) => {
          return {
            ...selectStyles().group(provided, state),
          };
        },
        option: (provided, state) => {
          return {
            ...selectStyles().option(provided, state),
            backgroundColor: state.isSelected
              ? "var(--chakra-colors-hwGray-1)"
              : state.isFocused
              ? "var(--chakra-colors-hwGray-3)"
              : undefined,
          };
        },
        menu: (provided, state) => {
          return {
            ...selectStyles().menuList(provided, state),
          };
        },
        menuList: (provided, state) => {
          return {
            ...selectStyles().menuList(provided, state),
          };
        },
      }}
      options={[
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" },
        { value: "watermelon", label: "Watermelon" },
      ]}
    />
  );
};
