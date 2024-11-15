import { MdErrorOutline } from "react-icons/md";
export default function Errorpage() {
  return (
    <div className="flex flex-col justify-center items-center h-lvh text-6xl">
      <MdErrorOutline />
      <h2 className="text-6xl font-semibold">No Found!</h2>
    </div>
  )
}
