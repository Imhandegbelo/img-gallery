export default function Navbar() {
  return (
    <nav id="header" className="">
      <div className="w-full flex items-center justify-between mb-4 px-12 md:px-20 shadow-xl">
        <div className="py-4">
          <h1 className="text-2xl font-black md:hidden">[PL]</h1>
          <h1 className="text-2xl font-black hidden md:block">[PhotoLux]</h1>
        </div>
        <div className="">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <svg
              className="fill-current text-slate-600"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
}
