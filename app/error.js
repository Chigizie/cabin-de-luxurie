"use client";

function error({ error }) {
  return (
    <div className="p-3 text-red-600 flex justify-center items-center h-screen ">
      <h2> {`errror occured: ${error.message}`} </h2>
    </div>
  );
}

export default error;
