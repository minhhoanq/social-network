import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview';

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
                    <img
                        className={cx('avatar')}
                        alt="Minh Hoang"
                        src={
                            data.url ||
                            'https://kenh14cdn.com/2019/9/2/6644667323865452016205704822306513987975655n-15674195344681116486461.jpg'
                        }
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>{data.username || 'thichngghenhac'}</p>
                        <p className={cx('name')}>{data.name || 'Thành phố Hồ Chí Minh'}</p>
                    </div>
                    <button className={cx('button')}>Follow</button>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
