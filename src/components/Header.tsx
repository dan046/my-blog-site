interface Props {
  title?: string
  home?: string
  blog?: string
  contact?: string
}
const Header = ({
  title = "My Blog",
  home = "Home",
  blog = "Blog",
  contact = "Contact",
}: Props) => {
  return (
    <nav className="bg-slate-900 pt-6 md:py-6 text-white md:flex md:items-center md:justify-between px-4">
      <header>
        <h1 className="mb-4 md:mb-0 text-2xl">{title}</h1>
      </header>
      <ul className="md:flex md:items-center list-reset text-xl">
        <li className="border-t md:border-0 md:ml-4 py-2 md:py-0">
          <a
            className="block md:inline no-underline text-green-500 hover:text-green-300"
            href="#"
          >
            {home}
          </a>
        </li>
        <li className="border-t md:border-0 md:ml-4 py-2 md:py-0">
          <a
            className="block md:inline no-underline text-green-500 hover:text-green-300"
            href="#"
          >
            {blog}
          </a>
        </li>
        <li className="border-t md:border-0 md:ml-4 py-2 md:py-0">
          <a
            className="block md:inline no-underline text-green-500 hover:text-green-300"
            href="#"
          >
            {contact}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
