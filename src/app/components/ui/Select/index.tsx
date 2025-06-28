"use client";

import {
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./select.module.css";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  LeftIcon?: ReactNode;
};

const Select: FC<SelectProps> = ({ value, onChange, options, LeftIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = useCallback(() => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Если мало места снизу и сверху больше — открыть вверх
      setDropUp(spaceBelow < 200 && spaceAbove > spaceBelow);
    }

    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (selectedValue: string) => {
      onChange(selectedValue);
      setIsOpen(false);
    },
    [onChange]
  );

  // Закрытие при клике вне селекта
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <div className={styles.customSelect} onClick={toggleDropdown}>
        <span className={styles.label}>
          {selectedOption?.label || "Выбрать"}
        </span>
        {LeftIcon && <span>{LeftIcon}</span>}
      </div>

      {isOpen && (
        <div className={`${styles.optionList} ${dropUp ? styles.dropUp : ""}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${styles.label} ${
                option.value === value ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
