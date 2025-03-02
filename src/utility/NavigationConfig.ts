import { IconType } from "react-icons"
import { BiHome, BiLogoProductHunt, BiUser } from "react-icons/bi"
import { BsEye } from "react-icons/bs"
import { FaUserSlash } from "react-icons/fa"
import { IoSettings } from "react-icons/io5"

interface EnumOption {
    title : string
    url : string,
    iconElement : IconType
}

export interface Config {
    role : string
    option : Array<EnumOption>
}


export const admin_config : Config = {
    role : "admin",
    option : [{
            title : "Dashboard",
            url : "/admin/dashboard",
            iconElement : BiHome
        },{
            title : "Mentor Control",
            url : "/admin/dashboard/mentor",
            iconElement : BiUser
        },{
            title : "Content Setting",
            url : "",
            iconElement : IoSettings
        }, {
            title : "Monitor",
            url : "",
            iconElement : BsEye
        } , {
            title : "User & Blacklist",
            url : "",
            iconElement : FaUserSlash
        },
        
    ]
}

export const mentor_config : Config = {
    role : "mentor",
    option : [
        {
            title : "Dashboard",
            url : "/mentor/dashboard",
            iconElement : BiHome
        },
        {
            title : "Product",
            url : "/mentor/dashboard/product",
            iconElement : BiLogoProductHunt
        }
    ]
}