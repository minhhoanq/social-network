import classNames from 'classnames/bind';
import styles from './UserItemSmall.module.scss';

const cx = classNames.bind(styles);

function UserItemSmall({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <img className={cx('avatar')} src={'https://via.placeholder.com/600/51aa97'} />
                <div className={cx('info')}>
                    <div className={cx('info-up')}>
                        <div className={cx('nickname')}>{data.email}</div>
                        {/* <span className={cx('dot')}>•</span> */}
                        {/* <button className={cx('btn-follow')}>Follow</button> */}
                        <span className={cx('content')}>{data.name}</span>
                        <div className={cx('info-down')}>1d1 likeReply See translation</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserItemSmall;
