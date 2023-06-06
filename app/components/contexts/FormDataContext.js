"use client";
import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);

  if (context === undefined) {
    throw new Error("useAuthContext was used outside of its Provider");
  }

  return context;
};

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    date: "",
    provider: "",
    service: "",
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    note: "",
  });

  const value = { formData, setFormData };

  return (
    <FormDataContext.Provider value={value}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
