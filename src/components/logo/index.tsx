import stl from "./logo.module.css"
import { Link } from "react-router-dom";
import { BsFeather } from "react-icons/bs";

export function LogoHeader() {

    return (
        <Link to={"/"} className={stl.logo}>
            <BsFeather />
            <div>
                <span>n</span>tra
            </div>
        </Link>
    )
}
