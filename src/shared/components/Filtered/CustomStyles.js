export const customStyles = {
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    border: "none",
    outline: "none",
    boxShadow: "none",
    padding: "4px 14px",
    borderRadius: "14px",
    margin: "0px",
    cursor: "pointer",
    fontFamily: "Medium",
    background: "#FFF",
    color: isSelected ? "#121417" : "rgba(18, 20, 23, 0.3)",
    ":hover": {
      color: "rgba(18, 20, 23, 1)",
    },
    ":active": {
      color: "rgba(18, 20, 23, 1)",
    },
    ":focus": {
      color: "rgba(18, 20, 23, 1)",
    },
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    display: "none",
    background: "FFF",
  }),
  menuList: (base) => ({
    ...base,
    background: "FFF",
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,

    cursor: "pointer",
    borderRadius: "14px",
    fontFamily: "Medium",
    padding: "0px",
    background: "FFF",
    width: "189px",
    minHeight: "100%",
    justifyСontent: "center",
    alignItems: "center",
    border: "#FFF",

    color: "rgba(25, 26, 21, 0.30)",
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    cursor: "pointer",
    color: "rgba(18, 20, 23, 1)",
    padding: "0px",
    margin: "0px",

    background: "FFF",
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "rgba(18, 20, 23, 1)",

    fontFamily: "Medium",
    cursor: "pointer",
    borderRadius: "14px",
    background: "FFF",
    ":active": {
      color: "rgba(18, 20, 23, 1)",
    },
  }),
  valueContainer: (defaultStyles) => ({
    ...defaultStyles,
    background: "FFF",
    color: "rgba(18, 20, 23, 1)",

    ":hover": {
      color: "rgba(18, 20, 23, 1)",
    },
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
    cursor: "pointer",
    borderRadius: "20px",
    boxShadow: "none",
    color: "rgba(18, 20, 23, 1)",
    fontFamily: "Medium",
    width: "calc(100vw - 24px)",
    maxWidth: "375px",
    padding: "14px 14px",
    border: "1px solid rgba(18, 20, 23, 0.1)",

    ":active": {
      color: "rgba(18, 20, 23, 1)",
      border: "1px solid #85aa9f",
    },
    ":focus": {
      color: "rgba(18, 20, 23, 1)",
      border: "1px solid #85aa9f",
    },
    ":hover": {
      background: "#FFF",
      border: "1px solid #85aa9f",
    },
    "@media screen and (min-width: 768px)": {
      width: "auto",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(18, 20, 23, 1)",
  }),
};
