import { useNavigate } from "@tanstack/react-location";
import classNames from "classnames";
import { useState } from "react";
import { Form } from "~/components/custom-form/form";
import { Input } from "~/components/custom-form/input";
import type { ResultPageGenerics } from "~/types/routes";
import styles from "./home.module.scss";

type FormValues = {
  userReq: string;
};

export const Home: React.VFC = () => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate<ResultPageGenerics>()

  const onSubmit = ({ userReq }: FormValues) => {
    if (typeof userReq !== "undefined") {
      navigate({
        to: '/result',
        search: (old) => ({
          ...old,
          search: userReq
        })
      })
    }
  };

  return (
    <div className={styles.homePage}>
      <div
        className={classNames(
          styles.formContainer,
          isActive ? styles.isActive : null
        )}
      >
        <Form onSubmit={onSubmit} className={styles.form}>
          <Input
            className={styles.searchWordInput}
            type="text"
            placeholder="検索するワードを入力してね〜"
            name="userReq"
            onFocus={() => {
              setIsActive(!isActive);
            }}
            onBlur={() => {
              setIsActive(false);
            }}
          />
        </Form>
      </div>
    </div>
  );
};
