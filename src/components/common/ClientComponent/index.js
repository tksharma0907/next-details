"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment, reset } from "@/redux/slice/counterSlice";
import Link from "next/link";
import { useTranslation } from "../../../app/i18n";
import { Footer } from "@common";

const ClientPage = ({ lng }) => {
  const { t } = useTranslation(lng, "client-page");

  console.log("lng ", lng);

  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{t("title")}</h1>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        redux implementation
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <Footer t={t} lng={lng} />
    </>
  );
};

export default ClientPage;
