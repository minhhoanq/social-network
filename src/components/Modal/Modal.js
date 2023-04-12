import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { CommentIcon, HeartIcon, MessagesIcon, SavedIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function Modal({ onClose, data, urlImg }) {
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
                            <div className={cx('body_comment')}></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
