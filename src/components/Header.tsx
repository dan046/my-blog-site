interface Props {
  title?: string
  home?: string
  blog?: string
  contact?: string
}
const Header = ({
  title = "Your Logo",
  home = "Menu 1",
  blog = "Menu 2",
  contact = "Menu 3",
}: Props) => {
  return (
    <nav className="bg-zinc-950 px-4 pt-6 text-white md:flex md:items-center md:justify-between md:py-6">
      <header>
        <h1 className="mb-4 text-2xl md:mb-0">{title}</h1>
      </header>
      <ul className="list-reset text-xl md:flex md:items-center">
        <li className="border-t py-2 md:ml-4 md:border-0 md:py-0">
          <a
            className="block text-green-500 no-underline hover:text-green-300 md:inline"
            href="#"
          >
            {home}
          </a>
        </li>
        <li className="border-t py-2 md:ml-4 md:border-0 md:py-0">
          <a
            className="block text-green-500 no-underline hover:text-green-300 md:inline"
            href="#"
          >
            {blog}
          </a>
        </li>
        <li className="border-t py-2 md:ml-4 md:border-0 md:py-0">
          <a
            className="block text-green-500 no-underline hover:text-green-300 md:inline"
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
