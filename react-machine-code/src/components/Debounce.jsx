import React, { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceValue;
}

const Debounce = () => {
  const [searchItem, setSearchItem] = useState("");
  const debouncedValue = useDebounce(searchItem, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Searched item...", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <input
      value={searchItem}
      placeholder="Type value to search"
      onChange={(e) => setSearchItem(e.target.value)}
    />
  );
};

export default Debounce;
