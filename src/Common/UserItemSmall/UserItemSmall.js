import classNames from 'classnames/bind';
import styles from './UserItemSmall.module.scss';
import { HeartIcon, NotificationsIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserItemSmall({ dataPost = '', dataComment = '', dataUser }) {
    const [like, setLike] = useState(false);
    const [viewReplies, setViewReplies] = useState(false);
    const [textBtnReplies, setTextBtnReplies] = useState('View');

    const handleLike = () => {
        setLike(!like);
    };

    const handleViewReplies = () => {
        setViewReplies(!viewReplies);
        if (!viewReplies) {
            setTextBtnReplies('Hide');
        } else {
            setTextBtnReplies('View');
        }
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
            {dataComment.childrencomments?.length > 0 && (
                <button className={cx('hide_view-reply')} onClick={handleViewReplies}>
                    <div className={cx('line')} />
                    <span className={cx('text-line')}>{textBtnReplies} replies</span>
                </button>
            )}

            {viewReplies && (
                <li>
                    <ul className={cx('list_reply')}>
                        {dataComment.childrencomments?.map((childrencomment) => (
                            <div className={cx('user')}>
                                <img className={cx('avatar')} src={'https://via.placeholder.com/600/51aa97'} />
                                <div className={cx('info')}>
                                    <div className={cx('info-up')}>
                                        <div className={cx('nickname')}>{childrencomment.id}</div>
                                        <span className={cx('content')}>{childrencomment.comment}</span>
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
                        ))}
                    </ul>
                </li>
            )}
        </ul>
    );
}

export default UserItemSmall;
