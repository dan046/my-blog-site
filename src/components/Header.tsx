interface Prop {
  brand?: string
  menu1?: string
  menu2?: string
  menu3?: string
}
const Header = ({
  brand = "Your Brand",
  menu1 = "Nav1",
  menu2 = "Nav2",
  menu3 = "Nav3",
}: Prop) => {
  return (
    <header className="bg-neutral-600 px-4 pt-6 text-white md:flex md:items-center md:justify-between md:py-4">
      <div>
        <h1 className="mb-4 cursor-default p-2 font-serif text-2xl font-medium antialiased hover:subpixel-antialiased md:mb-0">
          {brand}
        </h1>
      </div>
      <nav>
        <ul className="list-reset text-xl md:flex md:items-center">
          <li className="border-t py-2 md:ml-4 md:border-0 md:py-0">
            <a
              href="#"
              className="block font-semibold text-emerald-300 no-underline hover:text-green-300 md:inline"
            >
              {menu1}
            </a>
          </li>
          <li className="border-t py-2 md:ml-4 md:border-0 md:py-0">
            <a
              href="#"
              className="block font-semibold text-emerald-300 no-underline hover:text-green-300 md:inline"
            >
              {menu2}
            </a>
          </li>
          <li className="border-t py-2 md:ml-4 md:border-0 md:py-0">
            <a
              href="#"
              className="block font-semibold text-emerald-300 no-underline hover:text-green-300 md:inline"
            >
              {menu3}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
