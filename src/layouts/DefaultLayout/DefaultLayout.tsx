import React from 'react'
import {Header,Footer} from '../components'
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";
import { ScrollTop } from '../../components/common/ScrollTop';

const cx = classNames.bind(styles)

const DefaultLayout : React.FC<any> = ({children}) => {
    return (
        <>
            <div className={cx('container')}>
                <Header />
                {children}
            </div>
            <Footer />
            <ScrollTop />
        </>
    )
}

export default DefaultLayout;