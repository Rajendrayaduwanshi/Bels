// "use client";
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white py-4 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/images/bels-hospital.png"
//               alt="Bels Hospital"
//               width={150}
//               height={40}
//               className="h-auto w-auto"
//             />
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden rounded-lg p-2 z-[9999] hover:bg-gray-100"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="/"
//               className="text-gray-700 hover:text-gray-900 font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-gray-700 hover:text-gray-900 font-medium"
//             >
//               About
//             </Link>
//             <Link
//               href="/departments"
//               className="text-gray-700 hover:text-gray-900 font-medium"
//             >
//               Departments
//             </Link>
//             <Link
//               href="/doctors"
//               className="text-gray-700 hover:text-gray-900 font-medium"
//             >
//               Doctors
//             </Link>
//             <Link
//               href="/gallery"
//               className="text-gray-700 hover:text-gray-900 font-medium"
//             >
//               Gallery
//             </Link>

//             <Button variant="default" className="bg-black hover:bg-gray-800 ">
//               Contact
//             </Button>
//           </div>

//           {/* Mobile Navigation */}
//           <div
//             className={`${
//               isMenuOpen ? "block" : "hidden"
//             } absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden`}
//           >
//             <div className="px-4 pt-2 pb-3 space-y-1">
//               <Link
//                 href="/"
//                 className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/services"
//                 className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/doctors"
//                 className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
//               >
//                 Doctors
//               </Link>
//               <div className="px-3 py-2">
//                 <Button
//                   variant="default"
//                   className="w-full bg-black hover:bg-gray-800"
//                 >
//                   Contact
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white py-4 shadow-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-evenly">
          {/* Logo */}
          <div className="hidden md:flex  flex-shrink-0">
            <Image
              src="/images/bels-hospital.png"
              alt="Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal"
              width={100}
              height={40}
              className="h-auto w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              About
            </Link>
            <Link
              href="/departments"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Departments
            </Link>
            <Link
              href="/doctors"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Doctors
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Gallery
            </Link>
          </div>
          <Button
            variant="default"
            className="hidden md:flex bg-black hover:bg-gray-800"
            onClick={() => (window.location.href = "/contactUs")}
          >
            Contact
          </Button>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <div className="md:hidden  flex-shrink-0">
            <Image
              src="/images/bels-hospital.png"
              alt="Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal"
              width={100}
              height={40}
              className="h-auto w-auto"
            />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/images/bels-hospital.png"
                      alt="Best Endoscopy Hospital in Bhopal | Best IVF Centre in Bhopal | Best Laser Surgery in Bhopal | Best Gyne Doctor in Bhopal"
                      width={120}
                      height={32}
                      className="h-auto w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-700 hover:text-gray-900"
                  >
                    About
                  </Link>
                  <Link
                    href="/departments"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Departments
                  </Link>
                  <Link
                    href="/doctors"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Doctors
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Gallery
                  </Link>
                  <Button
                    variant="default"
                    className="w-full bg-black hover:bg-gray-800"
                    onClick={() => (window.location.href = "/contactUs")}
                  >
                    Contact
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
