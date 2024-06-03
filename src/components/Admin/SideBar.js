
import 'react-pro-sidebar/dist/css/styles.css';
import '.././Admin/SideBar.scss';

import {
    Sidebar,
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import {DiReact} from 'react-icons/di';
import {MdDashBoard, MdDashboard
} from 'react-icons/md';
const SideBar =(props)=>{
    const { image, collapsed, toggled, handleToggleSidebar }=props;
    return(
        <>
               <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
            <DiReact size={'1cm'} color={'00bfff'}></DiReact>
          <span>Đế Bá</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            // suffix={<span className="badge red">New</span>}
          >
          dashbroasd
          </MenuItem>
          <MenuItem icon={<FaGem />}>components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
         
            icon={<MdDashboard />}
            title='Feature'
          >
            <MenuItem> Quản lý Users</MenuItem>
            <MenuItem> Quản lý bài Quiz</MenuItem>
            <MenuItem> Quản lý câu hỏi </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
             Cửu Giới
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>   
        </>
    )
}
export default SideBar;