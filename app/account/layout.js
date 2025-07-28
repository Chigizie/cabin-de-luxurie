import Navigation from "../_components/Navigation";

function layout({ children }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-6 h-screen">
      <Navigation />
      {children}
    </div>
  );
}

export default layout;
