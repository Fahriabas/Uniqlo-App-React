import React from "react";
import { Outlet } from "react-router-dom";
import ColorSchemesExample from "./Navbar";
import FooterAdmin from "./FooterAdmin";


export default function Layout() {
    return (
        <div>
            <ColorSchemesExample/>
            <Outlet/>
            <FooterAdmin/>
        </div>
    )
}