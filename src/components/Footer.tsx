interface Props {
  email?: string
  address?: string
  contact?: string
}
const Footer = ({
  email = "username@email.com",
  address = "123 Main St. City, State 12345",
  contact = "1-234-567-XXX",
}: Props) => {
  return (
    <footer className="bg-stone-900 py-3 text-white md:flex flex-col md:items-center md:justify-between px-4">
      <p className="text-sm hover:underline cursor-pointer">
        Contact me at <span className="font-medium">{email}</span>
      </p>
      <p className="text-sm hover:underline cursor-pointer">Address: {address}</p>
      <p className="text-sm hover:underline cursor-pointer">Contact no.: {contact}</p>
    </footer>
  )
}

export default Footer
