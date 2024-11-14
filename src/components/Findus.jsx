import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Findus() {
  return (
    <div>
        <h2 className="text-xl font-semibold">Find Us On</h2>

        <div className="mt-4 join flex join-vertical *:rounded-none *:bg-transparent">
            <button className="btn join-item justify-start">
                <FaFacebookF/> Fackbook
            </button>
            <button className="btn join-item justify-start">
                <FaTwitter/> Twitter
            </button>
            <button className="btn join-item justify-start">
                <FaInstagram/> Instragram
            </button>
        </div>
    </div>
  )
}
