"use client";
import { createContext, useState } from "react";

export const SiteTitle = createContext("Guinevere");

function TitleContext({ children }) {
  const { siteTitle, setSiteTitle } = useState("Guinevere");

  return (
    <SiteTitle.Provider value={{ siteTitle, setSiteTitle }}>
      {children}
    </SiteTitle.Provider>
  );
}

export default TitleContext;
