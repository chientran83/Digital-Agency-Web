const Image : React.FC<any> = ({src,alt,className = ""}) => {
    return <img src={src} alt={alt} className={`banner__image ${className}`} />
}
export default Image;