import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

const InputGroup = ({
  icon,
  label,
  type,
  id,
  options,
  isDate,
  value,
  onChange,
  reset,
}) => {
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  useEffect(() => {
    if (reset) {
      setIsTouched(false);
      setIsPhoneValid(true);
    }
  }, [reset]);

  useEffect(() => {
    if (type === "tel" && isTouched) {
      setIsPhoneValid(value.length === 10 && /^[9876]/.test(value));
    }
  }, [value, type, isTouched]);

  const handleDateChange = (date) => {
    onChange(id, date);
  };

  const handlePhoneChange = (event) => {
    let newValue = event.target.value.replace(/\D/g, "");
    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }
    setIsPhoneValid(newValue.length === 10 && /^[9876]/.test(newValue));
    onChange(id, newValue);
    setIsTouched(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (id === "fullName" && newValue.length > 40) {
      return;
    }

    onChange(id, newValue);
    if (type === "tel") setIsTouched(true);
  };
  return (
    <>
      <div className="create-apt__inputGroup">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', color: '#686d76', fontSize: '3rem', marginRight: '12px' }}>
      {icon}
      </div>

        {type === "select" ? (
          <select
            className="inputGroup-select"
            id={id}
            aria-label={label}
            required
            onChange={handleInputChange}
            value={value}
          >
            <option value="" disabled>
              {label}
            </option>
            {options.map((option, index) => (
              <option
                className="inputGroup-option"
                key={index}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        ) : isDate ? (
          <DatePicker
            className="inputGroup-datePicker"
            selected={value}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            required
          />
        ) : type === "tel" ? (
          <input
            className="inputGroup-labelStyle"
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handlePhoneChange}
            pattern="\d*"
            required
          />
        ) : (
          <input
            className="inputGroup-labelStyle"
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handleInputChange}
            required
          />
        )}
      </div>
      {type === "tel" && !isPhoneValid && isTouched && (
        <div className="inputGroup-errMsg">
          Please enter a 10 digit number starting with 9, 8, 7, or 6
        </div>
      )}
    </>
  );
};

export default InputGroup;
