import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { AddFollowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt="Minh Hoang"
                    src="https://kenh14cdn.com/2019/9/2/6644667323865452016205704822306513987975655n-15674195344681116486461.jpg"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>vox.ngoc.traan</p>
                    <p className={cx('name')}>Võ Ngọc Trân</p>
                </div>
            </header>
            <div className={cx('analytics')}>
                <div className={cx('detail')}>
                    <strong className={cx('number')}>1</strong>
                    <p className={cx('text')}>post</p>
                </div>
                <div className={cx('detail')}>
                    <strong className={cx('number')}>5</strong>
                    <p className={cx('text')}>followers</p>
                </div>
                <div className={cx('detail')}>
                    <strong className={cx('number')}>11</strong>
                    <p className={cx('text')}>following</p>
                </div>
            </div>

            <div className={cx('images')}>
                <img
                    className={cx('image')}
                    alt=""
                    src="https://image-us.24h.com.vn/upload/3-2020/images/2020-09-09/Tung-gay-tranh-cai-vi-tat-che-day-dao-keo-nu-sinh-Sai-Thanh-nay-gay-sot-tro-lai-voi-than-hinh-boc-lu-3-1599637905-73-width496height578.jpg"
                />
                <img
                    className={cx('image')}
                    alt=""
                    src="https://cafefcdn.com/203337114487263232/2022/3/9/photo-1-1646783225090604277749.jpg"
                />
                <img
                    className={cx('image')}
                    alt=""
                    src="https://cdn.24h.com.vn/upload/3-2021/images/2021-07-05/Khoe-vo-ngoc-tran-chi-fan-chieu-tao-dang-de-khoe-vong-3-1625481403-300-width660height825.jpg"
                />
            </div>
            <Button className={cx('button')}>
                <AddFollowIcon />
                <p className={cx('text-btn')}>Follow</p>
            </Button>
        </div>
    );
}

export default AccountPreview;
