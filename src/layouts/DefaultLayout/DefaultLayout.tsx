import React from 'react'
import {Header,Footer} from '../components'
import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles)

const DefaultLayout : React.FC<any> = ({children}) => {
    return (
        <>
            <div className='container'>
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout;