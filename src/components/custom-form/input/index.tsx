// @ts-nocheck react-hook 公式サンプルなので
import type { UseFormRegister } from "react-hook-form";

type PublicInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  register: UseFormRegister<unknown>;
} & React.InputHTMLAttributes<HTMLInputElement>;

// 正しくは InputProps だけど動的に書き換えるので外向けのインタフェースは PublicInputProps で良い
export const Input: React.VFC<PublicInputProps> = ({
  register,
  name,
  ...rest
}: InputProps) => {
  if (name === undefined) {
    return <input {...rest} />;
  }

  return <input {...register(name)} {...rest} />;
};

type PublicSelectProps = {
  options: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;

type SelectProps = InputProps & {
  options: string[];
};

export const Select: React.VFC<PublicSelectProps> = ({
  register,
  options,
  name,
  ...rest
}: SelectProps) => {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
