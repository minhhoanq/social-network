import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import ExploreItem from './ExploreItem/ExploreItem';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ExploreItem />
            </div>
        </div>
    );
}

export default Explore;
