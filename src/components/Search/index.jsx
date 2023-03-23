import React from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus()
  };

  return (
    <div className={styles.root}>
      {/* Иконка поиска */}
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        height="32px"
        id="_x3C_Layer_x3E_"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="search_x2C__magnifier_x2C__magnifying_x2C__emoji_x2C__happy">
          <g id="XMLID_1949_">
            <g id="XMLID_2132_">
              <path
                d="M12,14.521h2c0,0.55-0.45,1-1,1S12,15.07,12,14.521z"
                fill="#263238"
                id="XMLID_2137_"
              />
              <path
                d="M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z     "
                fill="#263238"
                id="XMLID_2134_"
              />
              <path
                d="M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z"
                fill="#263238"
                id="XMLID_2133_"
              />
            </g>
          </g>
          <g id="XMLID_1838_">
            <g id="XMLID_4088_">
              <line
                fill="none"
                id="XMLID_4094_"
                stroke="#455A64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="23.43"
                x2="21.214"
                y1="23.401"
                y2="21.186"
              />
              <path
                d="     M29.914,27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828,0C23.208,23.964,23,24.466,23,25s0.208,1.036,0.586,1.414l3.5,3.5     c0.378,0.378,0.88,0.586,1.414,0.586s1.036-0.208,1.414-0.586S30.5,29.034,30.5,28.5S30.292,27.464,29.914,27.086z"
                fill="none"
                id="XMLID_4093_"
                stroke="#455A64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <circle
                cx="13"
                cy="13"
                fill="none"
                id="XMLID_4092_"
                r="11.5"
                stroke="#455A64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="     M12,14.521h2c0,0.55-0.45,1-1,1S12,15.07,12,14.521z"
                fill="none"
                id="XMLID_4091_"
                stroke="#455A64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="     M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z"
                fill="none"
                id="XMLID_4090_"
                stroke="#455A64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="     M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z"
                fill="none"
                id="XMLID_4089_"
                stroke="#455A64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
            </g>
            <g id="XMLID_3004_">
              <line
                fill="none"
                id="XMLID_4087_"
                stroke="#263238"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                x1="23.43"
                x2="21.214"
                y1="23.401"
                y2="21.186"
              />
              <path
                d="     M29.914,27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828,0C23.208,23.964,23,24.466,23,25s0.208,1.036,0.586,1.414l3.5,3.5     c0.378,0.378,0.88,0.586,1.414,0.586s1.036-0.208,1.414-0.586S30.5,29.034,30.5,28.5S30.292,27.464,29.914,27.086z"
                fill="none"
                id="XMLID_3009_"
                stroke="#263238"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <circle
                cx="13"
                cy="13"
                fill="none"
                id="XMLID_3008_"
                r="11.5"
                stroke="#263238"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="     M12,14.521h2c0,0.55-0.45,1-1,1S12,15.07,12,14.521z"
                fill="none"
                id="XMLID_3007_"
                stroke="#263238"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="     M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z"
                fill="none"
                id="XMLID_3006_"
                stroke="#263238"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="     M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z"
                fill="none"
                id="XMLID_3005_"
                stroke="#263238"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </g>
      </svg>
      {/* Поле поиска */}
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы"
      />
      {/* иконка Закрытие */}
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
