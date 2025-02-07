import Logo from "/icon.svg"
export const AdminNavigation = () => {
  return (
    <nav className="h-14 w-full border-1 border-gray-400 p-3 flex fixed">
        <a href="/" className="px-5 h-full w-auto flex justify-center items-center gap-3">
            <img src={Logo} className="h-[80%]" alt="logo" />
            <p className="font-poppins font-semibold">SerbaIlmu ID</p>
        </a>
        <div className="w-14 h-full absolute top-0 right-10">
          <div className="w-full h-full skeleton rounded-full scale-75">
            
          </div>
        </div>
    </nav>
  )
}
