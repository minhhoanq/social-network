import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, datas }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {datas.map((data) => (
                <AccountItem dataUser={data} />
            ))}

            <p className={cx('seeall')}>See All</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
