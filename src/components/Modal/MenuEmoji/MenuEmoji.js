import classNames from 'classnames/bind';
import styles from './MenuEmoji.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function MenuEmoji({ children }) {
    return (
        <Tippy
            placement="top-start"
            offset={[4, 20]}
            trigger="click"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu_popper')}>title</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuEmoji;
