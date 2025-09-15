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
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    setVisible(true)
  }, [])
  return (
    <div
      className={`${visible ? "fade-in" : "fade-out"} uilayoutWrapper`}
    >
      <AppMessage
        Message={serverMessage?.text}
        backgroundColor={serverMessage?.backgroundColor}
      />
      <div className={styles.wrapper}>
        <Toolbar toggleMenuFunction={() => { setCollapsed(!collapsed) }} />
        <div className={`${styles.contentWrapper}`}>
          <Menu className={`${styles.menu} ${collapsed ? styles.menuCollapsed : styles.menuOpen}`} />
          <div className={`${styles.content} ${!collapsed ? styles.contentCollapsed : styles.contentOpen}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UiLayout;
