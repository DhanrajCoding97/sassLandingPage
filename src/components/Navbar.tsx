import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg"
export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to-rigth,rgb(248,_146,_207),rgb(255,_221,_155),rgb(194,_240,_129),rgb(47,_216,_254))] blur-md"></div>
            <Image
              src={logoImage}
              alt="Sass logo"
              className="h-12 w-12 relative "
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition" >Customers</a>
            <button className="bg-white py-2 px-4 rounded">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  )

};
