import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ dataUser, className }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview dataUser={dataUser} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[-45, 0]} interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item', className)}>
                    <img className={cx('avatar')} alt="Minh Hoang" src={dataUser.image} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>{dataUser.username}</p>
                        <p className={cx('name')}>{`${dataUser.f_name} ${dataUser.l_name}`}</p>
                    </div>
                    <button className={cx('button')}>Follow</button>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
