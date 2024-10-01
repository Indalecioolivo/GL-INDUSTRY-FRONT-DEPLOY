import { createContext, useState } from "react";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {
  const [titleContentHome, setTitleContentHome] = useState("Estoque");
  const [stockHome, setStockHome] = useState(true);
  const [productHome, setProductHome] = useState(false);
  const [flowHome, setFlowHome] = useState(false);
  const [showModalRegisterFlow, setShowModalRegisterFlow] = useState(false);
  const [showModalProductInfo, setShowModalProductInfo] = useState(false);
  const [toModalProductInfo, setToModalProductInfo] = useState({
    showModal: false,
    id: "",
    bar_code: "",
    name: "",
    description: "",
    volume: "",
    stock: "",
    price: "",
  });

  function setContentHome(content) {
    setTitleContentHome(content);
    setStockHome(content === "Estoque");
    setProductHome(content === "Produtos");
    setFlowHome(content === "Fluxo Estoque");
  }

  return (
    <GeneralContext.Provider
      value={{
        titleContentHome,
        stockHome,
        productHome,
        flowHome,
        setContentHome,
        showModalRegisterFlow,
        setShowModalRegisterFlow,
        showModalProductInfo,
        setShowModalProductInfo,
        toModalProductInfo,
        setToModalProductInfo,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
