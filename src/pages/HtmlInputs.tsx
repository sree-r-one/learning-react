import React, { useState } from "react";

const BrowserSelector: React.FC = () => {
  const [selectedBrowser, setSelectedBrowser] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrowser(e.target.value);
  };

  return (
    <>
      <h1 className="mb-2 text-2xl">Select Input</h1>
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
      <BrowserSelector />
    </>
  );
};

export default HtmlInputs;
