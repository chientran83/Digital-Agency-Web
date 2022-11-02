import classNames from "classnames/bind";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

const Button: React.FC<any> = ({secondary,children,iconRight,onClick}) => {
    const classes = cx('btn',{
        secondary
    })
    const props = {
        onClick
    }

    return <button className={classes} {...props}>
                {children}
                {iconRight && <span className={cx("btn__icon")}>{iconRight}</span>}
            </button>
}

export default Button;