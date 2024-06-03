import { useMemo } from "react";
import useTranslation from "next-translate/useTranslation";
import cls from "./Select.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Select({
  placeholder,
  className = "",
  options = [],
  register,
  name = "name",
  disabled = false,
  isError,
  required,
  errors,
  ...restProps
}) {
  const { t } = useTranslation("common");
  const registerProps = useMemo(
    () => (register ? { ...register(name, { required }) } : {}),
    [name]
  );

  return (
    <div className={`${cls.selectBox} ${className}`}>
      <select
        placeholder={placeholder}
        {...restProps}
        {...registerProps}
        disabled={disabled}
        className={`${cls.select} 
          ${isError || (errors && errors[name]) ? cls.error : ""} ${
          disabled ? cls.disabled : ""
        }`}
      >
        <option style={{ display: "none" }}></option>
        {options.map(({ name }, i) => (
          <option key={name + i} value={name}>
            {name}
          </option>
        ))}
      </select>

      <div className={cls.arrow}>
        <ExpandMoreIcon />
      </div>

      {errors && errors[name] && <span>{errors && errors[name]?.message}</span>}
      {errors && errors[name] && errors[name]?.type === "required" && (
        <span>{t("required_field")}</span>
      )}
    </div>
  );
}
