import Findus from "../components/Findus";
import SocialBtn from "../components/SocialBtn";

export default function RightNavLayout() {
  return (
    <div>
        <h2 className="text-xl font-semibold">Login With</h2>
        <div className="space-y-4">
            <SocialBtn/>
            <Findus/>
        </div>
    </div>
  )
}
