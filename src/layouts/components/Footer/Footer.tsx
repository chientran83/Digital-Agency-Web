import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
import   {Categories}   from './Categories'

const cx = classNames.bind(styles)

const Footer: React.FC = () => {
    return (
        <>
            <div className={cx("footer")}>
                <div className={cx("container")}>
                    <div className={cx("footer-inner")}>

                       <Categories />

                        <p className={cx("footer-copyright")}>
                            © Matheus. Todos os direitos reservados
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;