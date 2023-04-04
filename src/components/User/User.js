import PropTypes from 'prop-types';
import styles from './User.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function User({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('profile_avatar')}>
            <div className={cx('profile_wrapper_avatar')}>
                <div className={cx('profile_inner_avatar')}>
                    <Link className={cx('profile_avatar_link')}>
                        <img src={data.avatar} alt={data.full_name} />
                    </Link>
                </div>
            </div>
            <div className={cx('profile_wrapper_username')}>
                <div className={cx('profile_username')}>
                    <Link className={cx('profile_username_link')}>{data.nickname}</Link>
                </div>
                <div className={cx('profile_name')}>{data.full_name}</div>
            </div>
        </Link>
    );
}

User.propTypes = {
    data: PropTypes.object.isRequired,
};

export default User;