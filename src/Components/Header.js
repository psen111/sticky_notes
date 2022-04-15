import React from "react";
import Fixedsidebar from "./FixedSideBar";

const Header = (props) => {

    console.log(props);

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <h1 className="navbar-brand ">eNotes</h1>
                <div className="d-flex align-items-center">
                    <form className="d-flex">
                        <input onChange={(event) => { event.preventDefault(); props.handleSearchNote(event.target.value) }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                    </form>
                    <Fixedsidebar  isgrouped={props.isgrouped} setG={props.setGrouped} />
                </div>

            </div>
        </nav>
    )
}

export default Header;