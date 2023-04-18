import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { useEffect, useState } from 'react';
import * as postsService from '~/apiServices/postsService';
import Modal from '~/components/Modal/Modal';
import { createPortal } from 'react-dom';

const cx = classNames.bind(styles);

function Explore() {
    const [datas, setDatas] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await postsService.getPosts();
            setDatas(result);
        };
        fetchApi();
    }, []);

    const setClickPicture = (data) => {
        setOpen(true);
        setValue(data);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('image-grid')}>
                    {datas.map((data) => (
                        <li key={data.id}>
                            <button onClick={() => setClickPicture(data)} className={cx('image-btn')}>
                                <img className={cx('item-image')} src={data.image} />
                            </button>
                        </li>
                    ))}

                    {open &&
                        createPortal(
                            <Modal
                                onClose={() => {
                                    setOpen(false);
                                    document.body.style.overflow = 'unset';
                                }}
                                data={value}
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
