import React from "react";

function HeaderSection() {
  return (
    <header className="mt-10">
      <div className="text-center md:w-1/2 mx-auto">
        <h1 className="text-4xl font-semibold bg-black text-slate-200 py-2 rounded hover:text-white transition-colors">
          Bank of React
        </h1>
      </div>
    </header>
  );
}

export default HeaderSection;
