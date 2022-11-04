import React from 'react'
import classNames from 'classnames/bind'

import styles from './Discuss.module.scss'
import DiscussItem from './DiscussItem'
import { getUsers } from '../../../services'

const cx = classNames.bind(styles);

interface User {
    image: String,
    name: String,
    content: String
}

const Discuss: React.FC = () => {
    const [users, setUsers] = React.useState<User[] | null>(null);
    React.useEffect(() => {
        const setStateUsers = async () => {
            const data = await getUsers();
            setUsers(data)
        }
        setStateUsers();
    }, [])

    return (
        <>
            <div className={cx("discuss")}>
                <p className={cx("discuss__caption")}>
                    TESTIMONIALS
                </p>
                <p className={cx("discuss__title")}>
                    Read What Other have to Say
                </p>
                <div className={cx("discuss-user__list")}>
                    {users && users.map((user: User, key : Number) => {
                        return <DiscussItem user={user} key={key} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Discuss;