import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useCurrentAccount } from "../../../hooks/useCurrentAccount";

const RecruitmentIndexPage = () => {
  const { account } = useCurrentAccount();
  return (
    <div className={styles.text}>
      求人一覧ページ
      <Link to="/sign_in">サインイン</Link>
    </div>
  );
};

export default RecruitmentIndexPage;
