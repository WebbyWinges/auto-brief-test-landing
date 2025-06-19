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
import { ArrowDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  LeftIcon: ReactNode;
};

const Select: FC<SelectProps> = ({ value, onChange, options, LeftIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  // Закрытие выпадающего списка при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (selectedValue: string): void => {
      onChange(selectedValue);
      setIsOpen(false);
    },
    [onChange]
  );

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );
  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <div className={styles.customSelect} onClick={toggleDropdown}>
        <span className={styles.label}>
          {selectedOption?.label || "Select"}
        </span>
        {LeftIcon && <span>{LeftIcon}</span>}
      </div>
      {isOpen && (
        <div className={styles.optionList}>
          {options.map((option) => (
            <div
              className={`${styles.option} ${styles.label} ${
                option.value === value ? styles.selected : ""
              }`}
              key={option.value}
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
