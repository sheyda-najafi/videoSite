"use client";
import React, { useContext, useEffect, useState } from "react";
import AppMessage from "@/components/general/AppMessage"
import { LayoutContext } from "@/context/LayoutContext";
import styles from "./page.module.css";
import Toolbar from "@/components/structure/Toolbar";
import Menu from "@/components/structure/Menu";

const UiLayout = ({ children }: { children: React.ReactNode }) => {
  const { serverMessage, } = useContext(LayoutContext)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true)
  }, [])
  return (
    <div
      className={visible ? "fade-in" : "fade-out"}
    >
      <AppMessage
        Message={serverMessage?.text}
        backgroundColor={serverMessage?.backgroundColor}
      />
      <div className={styles.wrapper}>
        <Toolbar />
        <div className={`${styles.content}`}>
          <Menu />
          {children}
        </div>
      </div>
    </div>
  );
};
export default UiLayout;
