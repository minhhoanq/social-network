import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import ExploreItem from './ExploreItem/ExploreItem';
import { useEffect, useState } from 'react';
import * as exploreService from '~/apiServices/exploreService';

const cx = classNames.bind(styles);

function Explore() {
    const [data, setData] = useState([]);
    const [disableScroll, setDisableScroll] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await exploreService.getExplore(1);
            console.log(result);
            setData(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper', `${disableScroll}`)}>
            <div className={cx('inner')}>
                <ExploreItem data={data} onDisableScroll={() => setDisableScroll(true)} />
            </div>
        </div>
    );
}

export default Explore;
