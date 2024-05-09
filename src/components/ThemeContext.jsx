import PropTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

export const LightModeContext = createContext();

export default function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);

  const memo = useMemo(
    () => ({ lightMode, setLightMode }),
    [lightMode, setLightMode]
  );

  return (
    <LightModeContext.Provider value={memo}>
      {children}
    </LightModeContext.Provider>
  );
}

LightModeProvider.protoTypes = {
  children: PropTypes.node.isRequired,
};
