import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { CommentIcon, HeartIcon, SavedIcon, ShareIcon } from '../Icons';
import MenuEmoji from './MenuEmoji/MenuEmoji';
import { useEffect, useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';
import CommentItems from '~/Common/CommentsItem/CommentItem';
import * as commentsServiceS from '~/apiServices/commentsService';
import DescriptionPost from '~/Common/DescriptionPost/DescriptionPost';

const cx = classNames.bind(styles);

function Modal({ onClose, data, urlImg }) {
    const [dataComments, setDataComments] = useState([]);

    const [valueComment, setValueCommnent] = useState('');
    const [disPost, setDisPost] = useState(true);
    const [disablePost, setDisablePost] = useState(true);

    const handleInput = (e) => {
        const value = e.target.value;
        setValueCommnent(value);
    };

    useEffect(() => {
        if (valueComment.trim().length > 0) {
            setDisPost(false);
            setDisablePost('');
        } else {
            setDisablePost('disable_post');
            setDisPost(true);
        }
    }, [valueComment]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await commentsServiceS.getComments(1);
            console.log(result);
            setDataComments(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <button onClick={onClose} className={cx('btn')}>
                    <svg
                        aria-label="Close"
                        class="x1lliihq x1n2onr6"
                        color="rgb(255, 255, 255)"
                        fill="rgb(255, 255, 255)"
                        height="18"
                        role="img"
                        viewBox="0 0 24 24"
                        width="18"
                    >
                        <title>Close</title>
                        <polyline
                            fill="none"
                            points="20.643 3.357 12 12 3.353 20.647"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                        ></polyline>
                        <line
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                            x1="20.649"
                            x2="3.354"
                            y1="20.649"
                            y2="3.354"
                        ></line>
                    </svg>
                </button>
                <div className={cx('inner')}>
                    <img className={cx('img')} src={urlImg} />
                    <div className={cx('comment')}>
                        <div className={cx('header')}>
                            <div className={cx('user')}>
                                <img className={cx('avatar')} src={urlImg} />
                                <div className={cx('info')}>
                                    <div className={cx('info-up')}>
                                        <div className={cx('nickname')}>hanthichxemphim</div>
                                        <span className={cx('dot')}>•</span>
                                        <button className={cx('btn-follow')}>Follow</button>
                                    </div>
                                    <div className={cx('info-down')}>Ho Chi Minh City, Vietnam</div>
                                </div>
                            </div>
                            <div className={cx('btn-options')}>
                                <svg
                                    aria-label="More options"
                                    class="_ab6-"
                                    color="rgb(0, 0, 0)"
                                    fill="rgb(0, 0, 0)"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <circle cx="12" cy="12" r="1.5"></circle>
                                    <circle cx="6" cy="12" r="1.5"></circle>
                                    <circle cx="18" cy="12" r="1.5"></circle>
                                </svg>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('body_comment')}>
                                <div className={cx('description')}>
                                    {dataComments.map((datacomment) => (
                                        <DescriptionPost data={datacomment} />
                                    ))}
                                </div>
                                <div></div>
                            </div>
                            <div className={cx('body_actions')}>
                                <div className={cx('icon_3')}>
                                    <span className={cx('icon-heart')}>
                                        <HeartIcon />
                                    </span>
                                    <span className={cx('icon')}>
                                        <CommentIcon />
                                    </span>
                                    <span className={cx('icon')}>
                                        <ShareIcon />
                                    </span>
                                </div>
                                <SavedIcon />
                            </div>
                            <div className={cx('likes')}>
                                <span className={cx('like')}>6,042</span>
                                <span className={cx('like-text')}>likes</span>
                            </div>
                            <div className={cx('days')}>
                                <span className={cx('day')}>2</span>
                                <span className={cx('day-text')}>DAYS AGO</span>
                            </div>
                            <div className={cx('action_comment')}>
                                <MenuEmoji>
                                    <button className={cx('emoji')}>
                                        <svg
                                            aria-label="Emoji"
                                            class="x1lliihq x1n2onr6"
                                            color="rgb(0, 0, 0)"
                                            fill="rgb(0, 0, 0)"
                                            height="24"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <title>Emoji</title>
                                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                        </svg>
                                    </button>
                                </MenuEmoji>

                                <input
                                    value={valueComment}
                                    className={cx('input-comment')}
                                    placeholder="Add a comment..."
                                    onChange={handleInput}
                                />

                                <button
                                    disabled={disPost}
                                    className={cx('btn-post', disablePost)}
                                    onClick={() => console.log('my vui ve')}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
