import { createContext, useState } from "react";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {
  const [titleContentHome, setTitleContentHome] = useState("Estoque");
  const [stockHome, setStockHome] = useState(true);
  const [productHome, setProductHome] = useState(false);
  const [flowHome, setFlowHome] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState({
    showModal: false,
    currentPage: "",
  });
  const [toModalInformations, setToModalInformations] = useState({
    showModal: false,
    currentPage: "",
    productInfos: {
      id: "",
      bar_code: "",
      name: "",
      description: "",
      volume: "",
      stock: "",
      price: "",
    },
    flowInfos: {
      id: "",
      name: "",
      amount: "",
      date: "",
      type: "",
      bar_code: "",
    },
  });

  function handleOpenModalInformations(
    openClose,
    id,
    bar_code,
    name,
    description,
    volume,
    stock,
    price,
    amount,
    date,
    type
  ) {
    if (toModalInformations.currentPage === "Produtos") {
      if (!openClose) {
        setToModalInformations({
          ...toModalInformations,
          showModal: openClose,
          productInfos: {
            id: "",
            bar_code: "",
            name: "",
            description: "",
            volume: "",
            stock: "",
            price: "",
          },
        });
      } else {
        setToModalInformations({
          ...toModalInformations,
          showModal: openClose,
          productInfos: {
            id: id,
            bar_code: bar_code,
            name: name,
            description: description,
            volume: volume,
            stock: stock,
            price: price,
          },
        });
      }
    } else {
      if (!openClose) {
        setToModalInformations({
          ...toModalInformations,
          showModal: openClose,
          flowInfos: {
            id: "",
            name: "",
            amount: "",
            date: "",
            type: "",
            bar_code: "",
          },
        });
      } else {
        setToModalInformations({
          ...toModalInformations,
          showModal: openClose,
          flowInfos: {
            id: id,
            name: name,
            amount: amount,
            date: date,
            type: type,
            bar_code: bar_code,
          },
        });
      }
    }
  }

  function setContentHome(content) {
    setTitleContentHome(content);
    setShowModalRegister({ ...showModalRegister, currentPage: content });
    setToModalInformations({ ...toModalInformations, currentPage: content });
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
        showModalRegister,
        setShowModalRegister,
        toModalInformations,
        setToModalInformations,
        handleOpenModalInformations,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
