import classNames from "classnames/bind";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

const Button: React.FC<any> = ({secondary,children}) => {
    console.log(secondary)
    const classes = cx('btn',{
        secondary
    })

    return <button className={classes}>
                {children}
            </button>
}

export default Button;