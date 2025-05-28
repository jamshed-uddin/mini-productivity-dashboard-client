import React from "react";
import ErrorMessage from "./ErrorMessage";

type Quote = {
  q: string;
  a: string;
  h: string;
};
const DailyQuote = async () => {
  let quote: Quote | null;

  try {
    const res = await fetch("https://zenquotes.io/api/random");

    if (!res.ok) {
      throw new Error(`Something went wrong`);
    }

    const data: Quote[] = await res.json();
    quote = data[0];
  } catch (error) {
    console.error("Failed to load daily quote:", error);
    return <ErrorMessage />;
  }

  if (!quote) {
    <ErrorMessage />;
  }

  return (
    <div className="relative p-4">
      <span className="text-9xl absolute top-0 left-0 opacity-20">&rdquo;</span>
      <h3 className="text-3xl font-medium">{quote?.q}</h3>
      <h4 className="text-end mt-4 text-lg">_{quote?.a}</h4>
    </div>
  );
};

export default DailyQuote;
