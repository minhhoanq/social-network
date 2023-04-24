import classNames from 'classnames/bind';
import styles from './NewsFeedItem.module.scss';
import AccountItem from '../SuggestedAccounts/AccountItem';
import { CommentIcon, NotificationsIcon, SavedIcon, ShareIcon } from '../Icons';
import DescriptionPost from '~/Common/DescriptionPost/DescriptionPost';
import * as suggestedService from '~/apiServices/suggestedService';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function NewsFeedItem(props) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchApiUser = async () => {
            const result = await suggestedService.getSuggested(`${props.dataPost.idUser}`);
            setUser(result);
        };
        fetchApiUser();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                {user.map((u) => (
                    <AccountItem dataUser={u} />
                ))}
            </div>
            <div className={cx('image_block')}>
                <img src={props.dataPost.image} />
            </div>
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

                <div>
                    {user.map((u) => (
                        <DescriptionPost dataPost={props.dataPost} dataUser={u} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsFeedItem;
