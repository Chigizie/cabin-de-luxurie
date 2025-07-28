import Logo from "./Logo";
import RootNavigation from "./RootNavigation";

function Header() {
  return (
    <div className="flex items-center justify-between p-4  border-b border-gray-200">
      <Logo />
      <RootNavigation />
    </div>
  );
}

export default Header;
