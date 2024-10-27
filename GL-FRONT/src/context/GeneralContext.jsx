import { createContext, useState } from "react";
import api from "../services/api";
import { getItem, removeItem } from "../utils/storage";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {
  const [credentials, setCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [productsData, setProductsData] = useState([]);
  const [userData, setUserData] = useState({});
  const [flowData, setFlowData] = useState([]);
  const [titleContentHome, setTitleContentHome] = useState("Estoque");
  const [stockHome, setStockHome] = useState(true);
  const [productHome, setProductHome] = useState(false);
  const [flowHome, setFlowHome] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState({
    showModal: false,
    currentPage: "",
  });
  const [productRegister, setProductRegister] = useState({
    id: "",
    bar_code: "",
    name: "",
    description: "",
    volume: "",
    stock: "",
    price: "",
    formattedValue: "",
  });
  const [flowRegister, setFlowRegister] = useState({
    id: "",
    name: "",
    amount: "",
    date: "",
    type: "",
    bar_code: "",
  });
  const [toModalInformations, setToModalInformations] = useState({
    showModal: false,
    currentPage: "Estoque",
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
  const [errorsRegisterFlow, setErrorsRegisterFlow] = useState({
    name: false,
    amount: false,
    date: false,
    bar_code: false,
    type: false,
  });

  const [errorsRegisterProduct, setErrorsRegisterProduct] = useState({
    bar_code: false,
    name: false,
    description: false,
    volume: false,
    price: false,
  });

  function setContentHome(content) {
    setTitleContentHome(content);
    setShowModalRegister({ ...showModalRegister, currentPage: content });
    setToModalInformations({ ...toModalInformations, currentPage: content });
    setStockHome(content === "Estoque");
    setProductHome(content === "Produtos");
    setFlowHome(content === "Fluxo Estoque");
  }

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
    if (
      toModalInformations.currentPage === "Produtos" ||
      toModalInformations.currentPage === "Estoque"
    ) {
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

  function handleProductRegister(event) {
    const value = event.target.value;
    setProductRegister({ ...productRegister, [event.target.name]: value });
  }

  function handleFlowRegister(event) {
    const value = event.target.value;
    setFlowRegister({ ...flowRegister, [event.target.name]: value });
    validateFields(event, value);
  }

  function validateFields(event, value) {
    event.preventDefault();
    if (showModalRegister.currentPage === "Produtos") {
      if (event.target.name == "bar_code") {
        if (value == "" || value.length != 13) {
          setErrorsRegisterProduct({
            ...errorsRegisterProduct,
            [event.target.name]: true,
          });
        } else {
          setErrorsRegisterProduct({
            ...errorsRegisterProduct,
            [event.target.name]: false,
          });
        }
      } else {
        if (value == "") {
          setErrorsRegisterProduct({
            ...errorsRegisterProduct,
            [event.target.name]: true,
          });
        } else {
          setErrorsRegisterProduct({
            ...errorsRegisterProduct,
            [event.target.name]: false,
          });
        }
      }
    } else {
      if (event.target.name == "bar_code") {
        if (value == "" || value.length != 13) {
          setErrorsRegisterFlow({
            ...errorsRegisterFlow,
            [event.target.name]: true,
          });
        } else {
          setErrorsRegisterFlow({
            ...errorsRegisterFlow,
            [event.target.name]: false,
          });
        }
      } else {
        if (value == "") {
          setErrorsRegisterFlow({
            ...errorsRegisterFlow,
            [event.target.name]: true,
          });
        } else {
          setErrorsRegisterFlow({
            ...errorsRegisterFlow,
            [event.target.name]: false,
          });
        }
      }
    }
  }

  function handleCoinChange(event) {
    const inputCoin = event.target.value;
    const coinValue = inputCoin.replace(/\D/g, "");
    let formattedValue = "";

    if (coinValue.length === 0) {
      formattedValue = "";
    } else {
      const numericValue = Number(coinValue) / 100;

      formattedValue = numericValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
    setProductRegister({
      ...productRegister,
      formattedValue: formattedValue,
      valor: coinValue,
    });
  }
  function resetApplication() {
    removeItem("tokenGL");
    removeItem("userEmail");
  }

  async function getUserData() {
    const userEmail = getItem("userEmail");
    const result = await api.get(`/users/findUser/${userEmail}`);

    if (result.status === 200) {
      const { data } = result;
      setUserData({ ...data });
    }
  }
  async function getAllProducts() {
    const result = await api.get("/products");
    if (result.status === 200) {
      const { data } = result;
      setProductsData([...data]);
    }
  }
  async function getAllFlows() {
    try {
      const result = await api.get("/flows");
      const { data } = result;
      setFlowData([...data]);
    } catch (error) {
      console.log(error);
    }
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
        productRegister,
        setProductRegister,
        handleProductRegister,
        handleCoinChange,
        flowRegister,
        setFlowRegister,
        handleFlowRegister,
        errorsRegisterFlow,
        validateFields,
        errorsRegisterProduct,
        credentials,
        setCredentials,
        userData,
        setUserData,
        getUserData,
        productsData,
        getAllProducts,
        flowData,
        getAllFlows,
        resetApplication,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
