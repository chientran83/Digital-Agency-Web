const MenuItem : React.FC<any> = ({data}) => {
    return <li className="dropdown">
        {data.title}
    </li>;
}
export default MenuItem;