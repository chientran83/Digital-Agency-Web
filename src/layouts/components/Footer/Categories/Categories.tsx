import React from 'react';
import classNames from 'classnames/bind'

import styles from './Categories.module.scss'
import { getCategories } from '../../../../services'
import CategoriesItem from './CategoriesItem';

const cx = classNames.bind(styles)


const Categories: React.FC = () => {
    interface Categories {
        title: String,
        children?: Categories[]
    }

    const [cateogries, setCategories] = React.useState<Categories[] | null>(null);

    React.useEffect(() => {
        const setStateCategories = async () => {
            const response = await getCategories();
            setCategories(response)
        }

        setStateCategories()
    }, [])

    return <>
        <div className={cx("category__list")}>
            {cateogries && cateogries.map((category: Categories, key: Number) => {
                return <CategoriesItem category={category} key={key} />
            })}

        </div>
    </>
}

export default Categories;