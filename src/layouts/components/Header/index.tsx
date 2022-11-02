import MenuMobileImg from '../../../assets/images/30-302578_hamburger-menu-icon-png-transparent-hamburger-menu-icon.jpeg'
import {Menu} from '../../../components/common/Menu'
const Header: React.FC = () => {
    const menuList = [
        {
            title : "Home"
        },
        {
            title : "about"
        },
        {
            title : "testimonials"
        },
        {
            title : "contact"
        },
    ];
    return (
        <>
            <div className="head">
                <h3 className="logo">
                    Digital Agency
                </h3>
                <ul className="menus">
                    <Menu menuList={menuList}/>
                </ul>
                <img src={MenuMobileImg} alt="menus mobile" className="menus-mobile">                   
                </img>

            </div>
        </>
    )
}

export default Header;