import MainLogo from "../assets/main-logo";

export default function Nav() {
  return (
    <nav className="py-4">
      <div className="container max-w-screen-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MainLogo />
          </div>
          <label
            htmlFor="my-drawer"
            className="btn btn-circle drawer-button lg:hidden"
          >
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul className="flex hidden gap-6 text-lg lg:flex">
            {/* Sidebar content here */}
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
