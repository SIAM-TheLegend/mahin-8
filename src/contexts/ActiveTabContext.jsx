import { createContext, useState } from "react";

const ActiveTabContext = createContext();

const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("cart"); // default value

  return <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>{children}</ActiveTabContext.Provider>;
};

export { ActiveTabProvider, ActiveTabContext };
