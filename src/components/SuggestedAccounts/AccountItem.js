import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountItem({ data, className }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[30, 0]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item', className)}>
                    <img className={cx('avatar')} alt="Minh Hoang" src={data.image} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>{data.username}</p>
                        <p className={cx('name')}>{`${data.f_name} ${data.l_name}`}</p>
                    </div>
                    <button className={cx('button')}>Follow</button>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
