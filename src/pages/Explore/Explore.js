import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { useEffect, useState } from 'react';
import * as exploreService from '~/apiServices/exploreService';
import Modal from '~/components/Modal/Modal';
import { createPortal } from 'react-dom';

const cx = classNames.bind(styles);

function Explore() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [thisPic, setThisPic] = useState('');
    const [value, setValue] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await exploreService.getExplore(1);
            console.log(result);
            setData(result);
        };
        fetchApi();
    }, []);

    const setClickPicture = (data) => {
        setOpen(true);
        setThisPic(data.url);
        setValue(data);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
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
                            <Modal
                                data={value}
                                urlImg={thisPic}
                                onClose={() => {
                                    setOpen(false);
                                    document.body.style.overflow = 'unset';
                                }}
                            ></Modal>,
                            document.body,
                            (document.body.style.overflow = 'hidden'),
                        )}
                </div>
            </div>
        </div>
    );
}

export default Explore;
