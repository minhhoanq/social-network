import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        not_border_bottom: data.not_border_bottom,
    });
    return (
        <Button className={classes} rightIcon={data.icon} to={data.to} onClick={onClick}>
            <span className={cx('menu-text')}>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
