import { ReactNode, useState, createContext } from "react";

export const FormContext = createContext<undefined | null | any>(null);

const FormProvider = ({ children }: ReactNode | any) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [country_of_origin, setCountryOfOrigin] = useState("");

  return (
    <FormContext.Provider
      value={{
        email,
        name,
        password,
        phone_number,
        country_of_origin,
        setEmail,
        setPassword,
        setPhoneNumber,
        setCountryOfOrigin,
        setName,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
