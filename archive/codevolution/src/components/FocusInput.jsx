import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the current element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" name="text" id="text" />
    </div>
  );
};

export default FocusInput;
