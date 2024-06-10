import React, { useState } from "react";

const FormInput = ({ name, onChange, description, value }) => {
  return (
    <div className="m-2 w-64">
      <form>
        <label className="mb-1 block text-sm">{description}</label>
        <input
          type="number"
          name={name}
          placeholder="Please enter amount"
          onChange={onChange}
          value={value}
          className="w-full rounded-lg px-3 py-2 outline-none ring-2 focus:border-red-300 focus:ring-red-600"
        />
      </form>
    </div>
  );
};

const UserInput = () => {
  // Initial Values
  const initialValues = {
    form1: 0,
    form2: 0,
    form3: 0,
    form4: 0,
  };

  // State to manage the values
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <pre>{JSON.stringify(values)}</pre>
      <div className="m-3 grid grid-cols-2 rounded-md bg-blue-100 p-3">
        <FormInput
          description="Initial Investment"
          name="form1"
          onChange={handleChange}
          value={values.form1}
        />
        <FormInput
          description="Annual Investment"
          name="form2"
          onChange={handleChange}
          value={values.form2}
        />
        <FormInput
          description="Expected Return"
          name="form3"
          onChange={handleChange}
          value={values.form3}
        />
        <FormInput
          description="Duration"
          name="form4"
          onChange={handleChange}
          value={values.form4}
        />

        <button
          onClick={() => setValues(initialValues)}
          className="m-2 w-64 rounded-lg bg-red-400 p-2"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default UserInput;
