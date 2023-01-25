import './home.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import './home.css'
import {Outlet} from "@mui/icons-material";


export default function Home(){
    return (
        <>
            <Topbar/>
            <Outlet/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>


    )
}
