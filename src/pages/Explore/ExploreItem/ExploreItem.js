import classNames from 'classnames/bind';
import styles from './ExploreItem.module.scss';
import Modal from '~/components/Modal/Modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const cx = classNames.bind(styles);

function ExploreItem({ data }) {
    const [open, setOpen] = useState(false);
    const [thisPic, setThisPic] = useState('');
    const [value, setValue] = useState({});

    const setClickPicture = (data) => {
        setOpen(true);
        setThisPic(data.url);
        setValue(data);
    };

    return (
        <div className={cx('image-grid')}>
            {data.map((data, key) => (
                <button onClick={() => setClickPicture(data)} className={cx('image-btn')}>
                    <img
                        // className={cx('item-1')}
                        key={key}
                        src={data.url}
                    />
                </button>
            ))}

            {open &&
                createPortal(
                    <Modal data={value} urlImg={thisPic} onClose={() => setOpen(false)}></Modal>,
                    document.body,
                )}
            {/* <img
                className={cx('item-1')}
                src={data.id}
                alt="architecture"
            />
            <img
                className={cx('item-2')}
                src="https://disantrangan.vn/wp-content/uploads/2021/06/pho_co_ha_noi_01-2.jpg"
                alt="architecture"
            />
            <img
                className={cx('item-3')}
                src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
                alt="architecture"
            />
            <img
                className={cx('item-4')}
                src="https://cdn.tcdulichtphcm.vn/upload/3-2022/images/2022-09-17/1663400047-thumbnail-width750height563.jpg"
                alt="architecture"
            />
            <img
                className={cx('item-5')}
                src="https://file1.dangcongsan.vn/data/0/images/2022/10/24/upload_37/abdffce43449f317aa58.jpg"
                alt="architecture"
            />

            <img
                className={cx('item-6')}
                src="https://img6.thuthuatphanmem.vn/uploads/2022/02/09/anh-thanh-pho-ho-chi-minh-lung-linh-mau-sac_031028495.jpeg"
                alt="architecture"
            />
            <img
                className={cx('item-7')}
                src="https://disantrangan.vn/wp-content/uploads/2021/06/pho_co_ha_noi_01-2.jpg"
                alt="architecture"
            />
            <img
                className={cx('item-8')}
                src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
                alt="architecture"
            />
            <img
                className={cx('item-9')}
                src="https://cdn.tcdulichtphcm.vn/upload/3-2022/images/2022-09-17/1663400047-thumbnail-width750height563.jpg"
                alt="architecture"
            />
            <img
                className={cx('item-10')}
                src="https://file1.dangcongsan.vn/data/0/images/2022/10/24/upload_37/abdffce43449f317aa58.jpg"
                alt="architecture"
            /> */}
        </div>
    );
}

export default ExploreItem;
