import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;

const Div = styled.div`
  border: 1px solid #d1d5db;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    outline: 2px solid #4f46e5;
    outline-offset: -1px;
  }
`;

export const Dropdown = ({ label, value, setValue, options, labelStyle = {}, required = false }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleSelect = (item) => {
    setSelectedValue(item);
    setValue(item);
    setIsFocus(false);
  };

  return (
    <div className="dropdown-container">
      <Label>{label}</Label>
      <div className={`custom-dropdown ${isFocus ? "focused" : ""}`}>
        <Div onClick={handleFocus}>
          {selectedValue || "Select item"}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
            version="1.1"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"></path>
          </svg>{" "}
        </Div>
        {isFocus && (
          <ul className=" z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((item, index) => (
              <li
                className="block px-4 py-4 text-2xl border-t-2 border-gray-100"
                key={index}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
