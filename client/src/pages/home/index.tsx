import classNames from "classnames";
import { useState } from "react";
import { AttractTextBackground } from "~/components/attract-text-background/index.stories";
import { Form } from "~/components/custom-form/form";
import { Input } from "~/components/custom-form/input";
import { useNavigate } from "~/hooks/use-navigate";
import type { ResultPageGenerics } from "~/types/routes";
import styles from "./home.module.scss";

type FormValues = {
  userReq: string;
};

export const Home: React.VFC = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const onSubmit = ({ userReq }: FormValues) => {
    if (typeof userReq !== "undefined" && userReq !== "") {
      navigate<ResultPageGenerics["Search"]>({
        to: "result",
        params: {
          search: userReq,
        },
      });
    }
    // バリデーションこけたらエラーメッセージ出してあげたいね
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageBackground}>
        <AttractTextBackground />
      </div>
      <div className={styles.homePageContent}>
        <div
          className={classNames(
            styles.formContainer,
            isActive ? styles.isActive : null
          )}
        >
          <h3 className={styles.aizen}>aizen</h3>
          <p className={styles.question}>
            Q あなたの求めるエッチなシチュエーションは?
          </p>
          <Form onSubmit={onSubmit} className={styles.form}>
            <Input
              className={styles.searchWordInput}
              type="text"
              placeholder="入力してね♥"
              name="userReq"
              onFocus={() => {
                setIsActive(!isActive);
              }}
              onBlur={() => {
                setIsActive(false);
              }}
            />
            <Input type="submit" className={styles.submit} value="シコる" />
          </Form>
        </div>
      </div>
    </div>
  );
};
