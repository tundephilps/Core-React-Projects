import axios from "axios";
import { createContext, useState } from "react";
import InputForm from "./InputForm";
import QrCode from "./QrCode";

// Create context
export const InputContext = createContext();

function Generator() {
  const [inputValue, setInputValue] = useState({
    url: '',
    color: ''
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

//4c014720-4409-11ed-8075-5b8e706813ba

  const config = {
    headers: { Authorization: 'Bearer 4c014720-4409-11ed-8075-5b8e706813ba' }
  }
  const bodyParameters = {
    "colorDark": inputValue.color,
    "qrCategory": "url",
    "text": inputValue.url
  }
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        'https://qrtiger.com/api/qr/static',
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error
  }

  return (
    <div className=" h-screen pt-4 md:pt-80 px-2">
        <h3 className="text-center">QR Code Generator</h3>
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Generator;