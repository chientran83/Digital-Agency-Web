import User1Image from '../../../assets/images/western-man-4975942-4159828 1.png'
import User2Image from '../../../assets/images/western-man-4975942-4159828 2.png'
import User3Image from '../../../assets/images/western-man-4975942-4159828 3.png'
import styles from './Discuss.module.scss'
import classNames from 'classnames/bind'
import DiscussItem from './DiscussItem'

const cx = classNames.bind(styles);

const Discuss: React.FC = () => {
    const users = [
        {
            image : User1Image,
            name : "Andrew Rathore",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel"
        },
        {
            image : User2Image,
            name : "Vera Duncan",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel"
        },
        {
            image : User3Image,
            name : "Mark Smith",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel"
        },
    ];
    return (
        <>
            <div className="discuss">
                <p className="discuss__caption">
                    TESTIMONIALS
                </p>
                <p className="discuss__title">
                    Read What Other have to Say
                </p>
                <div className="discuss-user__list">
                    {users.map((user,key) => {
                        return <DiscussItem user={user} key={key}/>
                    })}
                </div>
            </div>
        </>
    )
}

export default Discuss;