import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

function MenuSidebarItem({ title, to, icon, activeIcon }) {
    const renderResult = (attrs) => (
        <div className={cx('search')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('wrapper')}>
                <Search />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            {to === '/search' && (
                <Tippy offset={[0, 15]} interactive trigger="click" placement="right-start" render={renderResult}>
                    <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
                        <span className={cx('icon')}>{icon}</span>
                        <span className={cx('active-icon')}>{activeIcon}</span>
                        <span className={cx('title')}>{title}</span>
                    </NavLink>
                </Tippy>
            )}
            {to !== '/search' && (
                <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
                    <span className={cx('icon')}>{icon}</span>
                    <span className={cx('active-icon')}>{activeIcon}</span>
                    <span className={cx('title')}>{title}</span>
                </NavLink>
            )}
        </div>
    );
}

MenuSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuSidebarItem;
