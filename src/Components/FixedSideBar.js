import React from 'react';
import SideBar from 'react-fixed-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { BsKey } from 'react-icons/bs'
import { RiStickyNoteLine } from 'react-icons/ri'
import { MdOutlineHighlight } from 'react-icons/md'
import { BiSort } from 'react-icons/bi'

export default class Fixedsidebar extends React.Component {

    toggleSideBar = () => {
        // use our 'ref' to the sidebar component
        // to open it
        this.sidebar.toggle();
    }
    switchGroup = () => {

        //toggle the sidebar if isgrouped is false
        this.toggleSideBar();
        this.props.setG(!this.props.isgrouped);
    }

    sortNotes = ()=>{
        this.toggleSideBar();
    }

    render() {

        return (
            <div>

                <button
                    onClick={this.toggleSideBar}
                    className="sidebar-menu"
                >
                    <GiHamburgerMenu />
                </button>
                <SideBar className="sidebar" ref={(sidebar => { this.sidebar = sidebar; })}>
                    <div style={{ cursor: 'pointer' }} className='d-flex align-items-center'>
                        <RiStickyNoteLine style={{ color: 'white' }} className='user-icon' />
                        <h2>eNotes</h2>
                    </div>
                    <hr className='mb-3' />

                    <div className=' d-flex align-items-center mb-2 sidebar-icons'>
                        <AiOutlineHome className='user-icon' />
                        <small>Home</small>
                    </div>
                    <div className=' d-flex align-items-center mb-2 sidebar-icons' >
                        <FaRegUserCircle className='user-icon' />
                        <small>Profile</small>
                    </div>
                    <div className=' d-flex align-items-center mb-2 sidebar-icons' >
                        <BsKey className='user-icon' />
                        <small>Log in/ Sign up</small>
                    </div>


                    <div onClick={this.switchGroup} className=' d-flex align-items-center mb-2 sidebar-icons' >
                        <MdOutlineHighlight className='user-icon' />
                        {!this.props.isgrouped ? <small>Group Highlights</small> : <small> Ungroup Highlights</small>}
                    </div>


                    <div onClick={this.sortNotes} className=' d-flex align-items-center mb-2 sidebar-icons' >
                        <BiSort className='user-icon' />
                        <small>Sort</small>
                    </div>
                </SideBar>
            </div>
        );
    }
}
