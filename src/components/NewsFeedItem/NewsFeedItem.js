import classNames from 'classnames/bind';
import styles from './NewsFeedItem.module.scss';
import AccountItem from '../SuggestedAccounts/AccountItem';
import { CommentIcon, NotificationsIcon, SavedIcon, ShareIcon } from '../Icons';
import DescriptionPost from '~/Common/DescriptionPost/DescriptionPost';

const cx = classNames.bind(styles);

function NewsFeedItem({ dataPost, dataUser }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>{/* <AccountItem data={user} /> */}</div>
            <div className={cx('image_block')}>{/* <img src={post.image} /> */}</div>
            <div className={cx('body')}>
                <div className={cx('reaction')}>
                    <div className={cx('wrapper_icon')}>
                        <button className={cx('btn_icon', 'btn_icon_like')}>
                            <NotificationsIcon />
                        </button>
                        <button className={cx('btn_icon')}>
                            <CommentIcon />
                        </button>
                        <button className={cx('btn_icon')}>
                            <ShareIcon />
                        </button>
                        <button className={cx('btn_icon', 'btn_icon_save')}>
                            <SavedIcon />
                        </button>
                    </div>
                    <div div className={cx('text_likes')}>
                        3 likes
                    </div>
                </div>

                <div>{/* <DescriptionPost dataPost={dataPost} dataUser={dataUser} /> */}</div>
            </div>
        </div>
    );
}

export default NewsFeedItem;
