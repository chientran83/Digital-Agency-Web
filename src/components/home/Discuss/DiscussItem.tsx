const DiscussItem: React.FC<any> = ({user}) => {
    return <div className="discuss-user__item">
        <img src={user.image} alt="user image" className="discuss-user__img"></img>
        <p className="discuss-user__name">
            {user.name}
        </p>
        <p className="discuss-user__content">
            {user.content}
        </p>
    </div>
}

export default DiscussItem