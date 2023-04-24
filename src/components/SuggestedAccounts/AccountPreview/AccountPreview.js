import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { AddFollowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountPreview({ dataUser }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} alt="Minh Hoang" src={dataUser.image} />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>{dataUser.username}</p>
                    <p className={cx('name')}>{`${dataUser.f_name} ${dataUser.l_name}`}</p>
                </div>
            </header>
            <div className={cx('analytics')}>
                <div className={cx('detail')}>
                    <strong className={cx('number')}>1</strong>
                    <p className={cx('text')}>post</p>
                </div>
                <div className={cx('detail')}>
                    <strong className={cx('number')}>{dataUser.followers_count}</strong>
                    <p className={cx('text')}>followers</p>
                </div>
                <div className={cx('detail')}>
                    <strong className={cx('number')}>{dataUser.followings_count}</strong>
                    <p className={cx('text')}>following</p>
                </div>
            </div>

            <div className={cx('images')}>
                <img className={cx('image')} alt="" src={dataUser.image} />
                <img className={cx('image')} alt="" src={dataUser.image} />
                <img className={cx('image')} alt="" src={dataUser.image} />
            </div>
            <Button className={cx('button')}>
                <AddFollowIcon />
                <p className={cx('text-btn')}>Follow</p>
            </Button>
        </div>
    );
}

export default AccountPreview;
