interface Props {
  warning?: string
}

const NoContent = ({ warning = "No content" }: Props) => {
  return (
    <main className="flex justify-center border-none rounded bg-slate-100 p-10">
      <h1 className="text-2xl font-semibold bg-white py-4 px-4 rounded-xl shadow hover:drop-shadow-xl cursor-pointer">
        {warning}
      </h1>
    </main>
  )
}

export default NoContent
