import classNames from 'classnames/bind'

import styles from './Categories.module.scss'

const cx = classNames.bind(styles)

const CategoriesItem: React.FC<any> = ({category}) => {
    interface Categories {
        title: String,
        children?: Categories[]
    }
    return <>
        <div className={cx("category__item")}>
            <p className={cx("category__title")}>
                {category.title}
            </p>
            {category.children && category.children.map((categoryChildren : Categories, key:any) => {
                return <p className={cx("category__action")} key={key}>
                    {categoryChildren.title}
                </p>

            })}
        </div>
    </>
}

export default CategoriesItem;