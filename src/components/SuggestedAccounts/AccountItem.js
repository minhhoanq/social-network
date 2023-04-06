import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                alt="Minh Hoang"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/547108c96d0169c6ed945fd0bb5e2d3e~c5_100x100.jpeg?x-expires=1680962400&x-signature=3ie2YFW0GMOsWyKWCj%2B4FSplCyo%3D"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>minhoanq_</p>
                <p className={cx('name')}>Minh Hoàng</p>
            </div>
            <button className={cx('button')}>Follow</button>
        </div>
    );
}

export default AccountItem;
