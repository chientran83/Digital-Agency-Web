import MenuItem from './MenuItem'
const Menu: React.FC<any> = ({menuList}) => {
    return <ul className="menus">
       {menuList.map((menuItem : any,key : Number) => <MenuItem data={menuItem} key={key}/>)}
    </ul>
}

export default Menu;