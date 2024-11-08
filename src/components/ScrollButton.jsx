import React from 'react';

export default function ScrollButton() {
  const scrollToInfo = () => {
    const infoSection = document.getElementById("info");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={scrollToInfo} className="z-10 mt-10 px-4 py-2 bg-red-600 text-white font-bold rounded-lg transition transform hover:scale-105">
      Descubre más
    </button>
  );
}
