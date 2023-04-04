import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        not_border_bottom: data.not_border_bottom,
        bulkhead: data.bulkhead,
    });
    return (
        <Button className={classes} rightIcon={data.icon} to={data.to} onClick={onClick}>
            <span className={cx('menu-text')}>{data.title}</span>
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
