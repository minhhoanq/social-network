import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div>
            <header>
                <img
                    className={cx('avatar')}
                    alt="Minh Hoang"
                    src="https://kenh14cdn.com/2019/9/2/6644667323865452016205704822306513987975655n-15674195344681116486461.jpg"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>minhoanq_</p>
                    <p className={cx('name')}>Minh Hoàng</p>
                </div>
            </header>
            <div>
                <p>
                    <strong></strong>
                </p>
                <Button primary>Follow</Button>
            </div>
        </div>
    );
}

export default AccountPreview;
