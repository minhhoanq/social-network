import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = true, onChange = defaultFn }) {
    const [history, setHistory] = useState([
        {
            data: items,
        },
    ]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu_popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={() => {
                            setHistory(handleBack);
                        }}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleBack = (prev) => prev.slice(0, prev.length - 1);

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            offset={[0, 18]}
            interactive
            trigger="click"
            placement="top-start"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
