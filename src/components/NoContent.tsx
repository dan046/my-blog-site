interface Props {
  warning?: string
}

const NoContent = ({ warning = "No content" }: Props) => {
  return (
    <main className="flex justify-center border-none border-2 rounded ">
      <h1 className="text-2xl font-semibold bg-slate-200 py-4 px-4 rounded-xl drop-shadow-md hover:drop-shadow-xl cursor-pointer">
        {warning}
      </h1>
    </main>
  )
}

export default NoContent
