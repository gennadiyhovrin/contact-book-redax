import { useState } from "react";

export default function useContactBook() {
  const [isForm, setIsForm] = useState(false);

  function toggleForm() {
    setIsForm(!isForm);
  }

  return { isForm, toggleForm };
}
