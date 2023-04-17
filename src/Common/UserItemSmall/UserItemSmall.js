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
                        <div className={cx('info-down')}>
                            <button className={cx('time')}>1h</button>
                            <button className={cx('like')}>like </button>
                            <button className={cx('reply')}>Reply</button>
                            <button className={cx('translation')}>See translation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserItemSmall;
