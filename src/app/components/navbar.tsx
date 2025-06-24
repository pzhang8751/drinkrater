import Link from "next/link";

interface Menu {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export default function NavBar() {

  return (
    <>
      <nav className="px-4 md:px-8 h-16 w-screen fixed flex flex-row bg-white gap-x-4 text-sm sm:text-lg z-20 items-center">
        <Link href="/" className="w-min font-bold underline-offset-4 hover:underline">
          Drinkrater
        </Link>
        <div className="ml-auto">
          {/* <Link href="/" className="hover:text-red-500">
            Daily Drink
          </Link> */}
          <Link
            id="browse"
            href="/browse"
            className="hover:text-red-500"
          >
            Browse
          </Link>
          {/* <Link href="/" className="hover:text-red-500">
            My Account
          </Link> */}
        </div>
      </nav>
    </>
  );
}

// function DropDown({ open, close, isOpen }: Menu) {
//   return (
//     <div
//       className={
//         "px-5 bg-blue-100 border-b border-black z-10 fixed flex flex-row space-x-5 transition-all ease-in-out overflow-hidden " +
//         (isOpen ? "translate-y-16" : "-translate-y-44")
//       }
//       onMouseOver={open}
//       onMouseLeave={close}
//     >
//       <section className="flex flex-col gap-y-2">
//         <h2 className="mt-1 font-bold">Types</h2>
//         {links({ category: "type", action: close })}
//         <Link
//           href="/browse/type"
//           className="mb-1 font-semibold hover:underline"
//           onClick={close}
//         >
//           All types
//         </Link>
//       </section>
//       <section className="flex flex-col gap-y-2">
//         <h2 className="mt-1 font-bold">Brands</h2>
//         {links({ category: "brand", action: close })}
//         <Link
//           href="/browse/brand"
//           className="mb-1 font-semibold hover:underline"
//           onClick={close}
//         >
//           All brands
//         </Link>
//       </section>
//     </div>
//   );
// }
