import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('profile_avatar')}>
            <div className={cx('profile_wrapper_avatar')}>
                <div className={cx('profile_inner_avatar')}>
                    <Link className={cx('profile_avatar_link')}>
                        <img src="https://ddxcu89oqzgqh.cloudfront.net/uploads/account/avatar/5c92181f98f4500bb0003fbc/44884218_345707102882519_2446069589734326272_n.jpg" />
                    </Link>
                </div>
            </div>
            <div className={cx('profile_wrapper_username')}>
                <div className={cx('profile_username')}>
                    <Link className={cx('profile_username_link')}>set_shoppp</Link>
                </div>
                <div className={cx('profile_name')}>STREET STYLE</div>
            </div>
        </div>
    );
}

export default User;
