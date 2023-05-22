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
    <footer className="flex-col bg-neutral-600 px-4 py-3 text-sm font-medium text-white md:flex md:items-center md:justify-between">
      <p>
        email:
        <span className="cursor-pointer hover:underline">{" " + email}</span>
      </p>
      <p>
        Address:
        <span className="cursor-pointer hover:underline">{" " + address}</span>
      </p>
      <p>
        Contact no.:
        <span className="cursor-pointer hover:underline">{" " + contact}</span>
      </p>
    </footer>
  )
}

export default Footer
