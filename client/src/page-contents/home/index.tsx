import classNames from "classnames";
import { useState } from "react";
import { Form } from "~/components/custom-form/form";
import { Input } from "~/components/custom-form/input";
import { Layout } from "~/components/layout";
import { useAddMessage } from "~/features/message/hooks/use-add-message";
import { AttractTextBackground } from "~/features/search/components/attract-text-background";
import { useNavigate } from "~/hooks/use-navigate";
import type { ResultPageGenerics } from "~/types/routes";
import styles from "./home.module.scss";

type FormValues = {
  userReq: string;
};

export type HomePageContentProps = Record<string, never>;

export const HomePageContent: React.VFC<HomePageContentProps> = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const addMessage = useAddMessage();

  const onSubmit = ({ userReq }: FormValues) => {
    if (typeof userReq === "undefined" || userReq === "") {
      addMessage("error", "検索する文字を入力してね♥", 2000);
    }

    navigate<ResultPageGenerics["Search"]>({
      to: "result",
      params: {
        search: userReq,
      },
    });
  };

  return (
    <Layout>
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
    </Layout>
  );
};
