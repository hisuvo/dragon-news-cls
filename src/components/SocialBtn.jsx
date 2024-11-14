import { FaGoogle, FaGithub } from "react-icons/fa";
export default function SocialBtn() {
  return (
    <div className="join flex gap-2 join-vertical *:border-2 *:bg-transparent *:rounded-none mt-4">
        <button className="btn btn-wide">
          <FaGoogle/> Login With Google 
        </button>
        <button className="btn btn-wide">
        <FaGithub /> Login With Github
        </button>
    </div>
  )
}
