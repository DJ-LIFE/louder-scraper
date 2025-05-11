
const Skeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-pulse bg-neutral-100 shadow-xl cursor-pointer hover:scale-102 hover:transition-all hover:duration-300 rounded-lg m-4 w-96  pb-20 pt-0">
    <span
      className="rounded-lg w-full h-48 object-cover bg-gray-300"
    />
    <div className="space-y-2 w-full rounded-lg">
      <h2 className="text-xl font-bold mt-2 h-8 w-full bg-gray-300"></h2>
      <p className="text-gray-600 dark:text-gray-300 text-left w-full h-4 bg-gray-300" />
      <p className="text-gray-800 text-left text-sm font-semibold h-4 w-full bg-gray-300" />
      <p className="text-gray-800 text-left text-sm font-semibold h-8 mt-6 w-full bg-gray-300" />

    </div>
  </div>
  )
}

export default Skeleton