import React from 'react'
import className from 'classnames/bind'

import styles from './ScrollTop.module.scss'
import {Button} from '../Button'

const cx = className.bind(styles);

class ScrollTop extends React.Component <any,any> {
    constructor(props : any) {
        super(props);
        this.state = {showButton : false};
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll); 
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }
    handleScroll = () => {
        if(window.scrollY > 800){
            this.setState({showButton : true})
        }else{
            this.setState({showButton : false})
        }
    }
    handleScrollToTop(){
        window.scrollTo({top:0});
    }
    render() {
      return (
        <>
            {this.state.showButton &&  <div className={cx('scroll-top')}>
                <Button iconRight={<span> ^ </span>} onClick={this.handleScrollToTop}>Top</Button>
            </div>}
        </>
      );
    }
}

export default ScrollTop;