import React, { memo, useRef } from "react";
import "./search_header.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header>
      <div className="logo">
        <img
          src="https://images.velog.io/images/playck/post/daad2e1c-26ad-4651-bf0f-59525a1d3a56/logo.png"
          alt="logo"
        />
        <h1 className="title">YouTube</h1>
      </div>
      <input
        ref={inputRef}
        className="input"
        type="search"
        placeholder="검색"
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        <img
          src="https://media.vlpt.us/images/playck/post/f53dfb05-2b5d-436f-828d-8b8c7ce9ac5d/1093183.svg"
          alt="검색"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
