import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { CommentIcon, HeartIcon, NotificationsIcon, SavedIcon, ShareIcon } from '../Icons';
import MenuEmoji from './MenuEmoji/MenuEmoji';
import { useEffect, useRef, useState } from 'react';
import * as commentsService from '~/apiServices/commentsService';
import * as suggestedService from '~/apiServices/suggestedService';
import * as likesService from '~/apiServices/likesService';
import DescriptionPost from '~/Common/DescriptionPost/DescriptionPost';
import AccountItem from '../SuggestedAccounts/AccountItem';

const cx = classNames.bind(styles);

const initUser = {
    id: 0,
    f_name: '',
    l_name: '',
    username: '',
    address: '',
    image: '',
    email: '',
    bio: '',
    created_at: '',
    updated_at: '',
    followings_count: '',
    followers_count: '',
    likes_count: '',
    website_url: '',
};

const initLike = {
    createdDate: '',
    updateDate: '',
    userId: 0,
    postId: 0,
};

//Login account, development post comment

function Modal({ onClose, data }) {
    //useState
    const [dataComments, setDataComments] = useState([]);
    const [valueComment, setValueCommnent] = useState('');
    const [disPost, setDisPost] = useState(true);
    const [disablePost, setDisablePost] = useState(true);
    const [suggestedUser, setSuggestedUser] = useState(initUser);
    const [like, setLike] = useState(false);
    const [dataLike, setDataLike] = useState(initLike);

    // ref comment
    const refComment = useRef();

    //get Api user by user id
    const fetchApiUser = async () => {
        const result = await suggestedService.getSuggested(`${data.idUser}`);
        setSuggestedUser(result[0]);
    };

    //get Api post by post id
    const fetchApiPost = async () => {
        const result = await commentsService.getComments(`${data.id}`);
        setDataComments(result);
    };

    const fetchApiLikes = async () => {
        const result = await likesService.getLikes(data.id);
        setDataLike(result);
        if (result[0]?.postId === data.id) {
            setLike(true);
        } else {
            setLike(false);
        }
    };

    console.log(data.id);

    useEffect(() => {
        fetchApiUser();
        fetchApiPost();
        fetchApiLikes();
    }, []);

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

    //Method POST
    const postCommentApi = (data, callBackApiPost, callBackApiUser) => {
        commentsService.postComments(data).then(callBackApiPost, callBackApiUser);
    };

    //Method POST
    const postLikesApi = (data, callBackApiPost) => {
        //
        likesService.postLikes(data).then(callBackApiPost);
    };

    //Method DELETE
    const deleteLikesApi = (id, callBackApiPost) => {
        likesService.deleteLikes(id).then(callBackApiPost);
    };

    //handle Click like post
    const handleClickLike = (e) => {
        e.preventDefault();
        setLike(!like);
        const formLikes = {
            createdDate: '',
            updateDate: '',
            userId: 2,
            postId: data.id,
        };

        if (dataLike[0]?.postId === data.id) {
            deleteLikesApi(dataLike[0]?.id, fetchApiLikes);
        } else {
            postLikesApi(formLikes, fetchApiLikes);
        }
    };

    //handle comment users
    const handleButton = (e) => {
        e.preventDefault();
        var formData = {
            comment: valueComment,
            createdDate: '',
            updateDate: '',
            postId: data.id,
            userId: 2,
            childrencomments: [
                // {
                //     comment: 'test children comment 2!',
                //     createdDate: '',
                //     updateDate: '',
                //     userId: 3,
                //     id:1,
                // },
            ],
        };
        postCommentApi(formData, fetchApiPost, fetchApiUser);

        setValueCommnent('');
    };

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
                    <img className={cx('img')} src={data.image} />
                    <div className={cx('comment')}>
                        <div className={cx('header')}>
                            <AccountItem data={suggestedUser} className={cx('user')} />
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
                                    <div className={cx('description-post')}>
                                        {<DescriptionPost dataPost={data} dataUser={suggestedUser} />}
                                    </div>
                                </div>

                                <div>
                                    {dataComments.map((dataComment) => (
                                        <div>
                                            {<DescriptionPost dataComment={dataComment} dataUser={suggestedUser} />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('body_actions')}>
                                <div className={cx('action_3')}>
                                    <button
                                        className={cx('icon-heart')}
                                        onClick={handleClickLike}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {like ? <HeartIcon /> : <NotificationsIcon />}
                                    </button>
                                    <button
                                        className={cx('icon')}
                                        onClick={() => refComment.current.focus()}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <CommentIcon />
                                    </button>
                                    <span className={cx('icon')}>
                                        <ShareIcon />
                                    </span>
                                    <span className={cx('icon')}>
                                        <SavedIcon />
                                    </span>
                                </div>
                            </div>
                            <button className={cx('likes')}>
                                <span className={cx('like')}>6,042</span>
                                <span className={cx('like-text')}>likes</span>
                            </button>
                            <button className={cx('days')}>
                                <span className={cx('day')}>2</span>
                                <span className={cx('day-text')}>DAYS AGO</span>
                            </button>
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
                                    ref={refComment}
                                />

                                <button
                                    disabled={disPost}
                                    className={cx('btn-post', disablePost)}
                                    onClick={handleButton}
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
