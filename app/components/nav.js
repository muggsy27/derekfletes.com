import HamburgerMenu from "../assets/hamburger-menu";
import MainLogo from "../assets/main-logo";

export default function Nav() {
  return (
    <nav className="py-4">
      <div className="container">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <MainLogo />
          </div>
        </div>
      </div>
    </nav>
  );
}
