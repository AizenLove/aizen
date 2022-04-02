// @ts-nocheck react-hook 公式サンプルなので
import React from "react";
import { useForm } from "react-hook-form";
import type { UseFormProps, FieldValues } from "react-hook-form";

type PublicFormProps = React.PropsWithChildren<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 抽象度が高すぎて無理ポ
  onSubmit: (data: any) => void;
}>;

type FormProps = React.PropsWithChildren<{
  defaultValues: Exclude<
    UseFormProps<FieldValues, Record<string, unknown>>["defaultValues"],
    undefined
  >;
  onSubmit: (data: Record<string, unknown>) => void;
}>;

export const Form: React.VFC<PublicFormProps> = ({
  defaultValues,
  children,
  onSubmit,
}: FormProps) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};
