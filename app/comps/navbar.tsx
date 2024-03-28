"use client"
export default function Navbar() {
    const handleButtonClick = () => {
      window.open("https://github.com/parteekahlawat/file-convertor.git", "_blank");
    };
  
    const handleServicesClick = () => {
      alert("Bro can't you see it's a file convertor services website");
    };
  
    const handleMenuButtonClick = () => {
      const navbar = document.getElementById("navbar-sticky");
      if(navbar)
      navbar.classList.toggle("hidden");
    };
  
    return (
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleMenuButtonClick}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">File Convertor</span>
            </a>
          </div>
          <div className="md:block hidden" id="navbar-sticky">
            <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
              </li>
              <li>
                <a onClick={handleButtonClick} target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">GitHub Repo</a>
              </li>
              <li>
                <a onClick={handleServicesClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  