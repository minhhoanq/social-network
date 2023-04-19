import classNames from 'classnames/bind';
import styles from './UserItemSmall.module.scss';
import { HeartIcon, NotificationsIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserItemSmall({ dataPost = '', dataComment = '', dataUser }) {
    const [like, setLike] = useState(false);

    console.log(dataPost);
    console.log(dataComment);

    const handleLike = () => {
        setLike(!like);
    };

    return (
        <ul className={cx('wrapper')}>
            <div className={cx('user')}>
                <img className={cx('avatar')} src={dataUser.image} />
                <div className={cx('info')}>
                    <div className={cx('info-up')}>
                        <div className={cx('nickname')}>{dataUser.username}</div>
                        {/* <span className={cx('dot')}>•</span> */}
                        {/* <button className={cx('btn-follow')}>Follow</button> */}
                        <span className={cx('content')}>{dataPost.description || dataComment.comment}</span>
                        <div className={cx('info-down')}>
                            <button className={cx('time')}>1h</button>
                            {like && <button className={cx('like')}>Like</button>}
                            <button className={cx('reply')}>Reply</button>
                            <button className={cx('translation')}>See translation</button>
                        </div>
                    </div>
                </div>
                <button className={cx('react_btn')} onClick={handleLike}>
                    {like === true ? <HeartIcon /> : <NotificationsIcon />}
                </button>
            </div>
            {/* <li>
                <ul className={cx('list_reply')}>
                    <button className={cx('hide_view-reply')}>
                        <div className={cx('line')} />
                        <span className={cx('text-line')}>Hide replies</span>
                    </button>
                    <div className={cx('user')}>
                        <img className={cx('avatar')} src={'https://via.placeholder.com/600/51aa97'} />
                        <div className={cx('info')}>
                            <div className={cx('info-up')}>
                                <div className={cx('nickname')}>{data.email}</div>
                                <span className={cx('content')}>{data.name}</span>
                                <div className={cx('info-down')}>
                                    <button className={cx('time')}>1h</button>
                                    {like && <button className={cx('like')}>Like</button>}
                                    <button className={cx('reply')}>Reply</button>
                                    <button className={cx('translation')}>See translation</button>
                                </div>
                            </div>
                        </div>
                        <button className={cx('react_btn')} onClick={handleLike}>
                            {like === true ? <HeartIcon /> : <NotificationsIcon />}
                        </button>
                    </div>
                </ul>
                <ul className={cx('list_reply')}>
                    <div></div>
                    <div className={cx('user')}>
                        <img className={cx('avatar')} src={'https://via.placeholder.com/600/51aa97'} />
                        <div className={cx('info')}>
                            <div className={cx('info-up')}>
                                <div className={cx('nickname')}>{data.email}</div>
                                <span className={cx('content')}>{data.name}</span>
                                <div className={cx('info-down')}>
                                    <button className={cx('time')}>1h</button>
                                    {like && <button className={cx('like')}>Like</button>}
                                    <button className={cx('reply')}>Reply</button>
                                    <button className={cx('translation')}>See translation</button>
                                </div>
                            </div>
                        </div>
                        <button className={cx('react_btn')} onClick={handleLike}>
                            {like === true ? <HeartIcon /> : <NotificationsIcon />}
                        </button>
                    </div>
                </ul>
            </li> */}
        </ul>
    );
}

export default UserItemSmall;
