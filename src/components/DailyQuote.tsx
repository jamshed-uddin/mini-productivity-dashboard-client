import React from "react";

const DailyQuote = async () => {
  const res = await fetch("https://zenquotes.io/api/random");
  const [quote] = await res.json();
  console.log(quote.q);

  return (
    <div className="relative p-4">
      <span className="text-9xl absolute  top-0 left-0 opacity-20 ">
        &rdquo;
      </span>
      <h3 className="text-3xl font-medium">{quote?.q}</h3>
      <h4 className="text-end mt-4 text-lg">_{quote?.a}</h4>
    </div>
  );
};

export default DailyQuote;
