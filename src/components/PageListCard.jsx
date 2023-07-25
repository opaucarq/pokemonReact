import styled from "@emotion/styled";
import React from "react";
import { useState, useRef } from "react";
import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from "react-icons/bs";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  input {
    width: 64px;
    margin: 0 4px;
  }
  .disable-button {
    pointer-events: none;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PageListCard = ({ page, setPage, max, pages }) => {
  const [inputValue, setInputValue] = useState(String(page));
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const data = e.target.value;
    setInputValue(data);
  };

  const handleBlur = () => {
    const newPage = parseInt(inputValue);
    if (!isNaN(newPage) && newPage >= 1 && newPage <= pages) {
      setPage(newPage);
    } else {
      setInputValue(String(page));
    }
  };

  const handleClick = () => {
    inputRef.current.select();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBlur();
  };

  return (
    <Container>
      <BsCaretLeftSquareFill
        onClick={() => {
          setPage((val) => Math.max(val - 1, 1));
          setInputValue((val) => Math.max(val - 1, 1));
        }}
        className={page === pages ? "disable-button" : ""}
        style={{ width: "24px", height: "24px", cursor: "pointer" }}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={handleClick}
          ref={inputRef}
        />
      </form>

      <BsCaretRightSquareFill
        onClick={() => {
          setPage((val) => Math.min(val + 1, pages));
          setInputValue((val) => Math.min(val + 1, pages));
        }}
        className={page === pages ? "disable-button" : ""}
        style={{ width: "24px", height: "24px", cursor: "pointer" }}
      />
    </Container>
  );
};

export default PageListCard;
