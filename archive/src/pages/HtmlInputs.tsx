import React, { useState } from "react";

const EmailValidator: React.FC = () => {
  // Handle the state
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setEmail(e.target.value);
    const value = e.target.value;
    setEmail(value);
    // setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    setIsValid(/^[^\s]+@[^\s]+.com$/.test(value));
    // setIsValid(/^[].test(value))
  };

  return (
    <>
      <h1 className="text-2xl">Input Formatter</h1>

      <input
        type="email"
        value={email}
        placeholder="Please enter the email"
        onChange={handleChange}
        className="outline-none"
      />

      {isValid ? <p>Valid Email</p> : <p>Invalid Email</p>}
    </>
  );
};

const BrowserSelector: React.FC = () => {
  const [selectedBrowser, setSelectedBrowser] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrowser(e.target.value);
  };

  return (
    <>
      <h1 className="text-2xl">Select Input</h1>
      <label htmlFor="browser-select">Choose Browser</label>

      <h1 className="m-4 bg-red-300 p-4">{selectedBrowser}</h1>

      <select
        name="browser"
        id="browser-select"
        value={selectedBrowser}
        onChange={handleChange}
        className="bg-teal-500 p-2 shadow-lg outline-none"
      >
        <option value="default">-- Please Choose an Option</option>
        <option value="safari">Safari</option>
        <option value="firefox">Firefox</option>
        <option value="chrome">Chrome</option>
        <option value="opera">Opera</option>
      </select>
    </>
  );
};

const HtmlInputs: React.FC = () => {
  return (
    <>
      <div className="space-y-4">
        <BrowserSelector />
        <EmailValidator />
      </div>
    </>
  );
};

export default HtmlInputs;
