import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faKeyboard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { useEffect, useState } from 'react';
import * as suggestedService from '~/apiServices/suggestedService';
import * as postsService from '~/apiServices/postsService';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '~/features/user/userSlice';
// import db from '~/firebase';
import { selectPosts, setPosts } from '~/features/posts/postsSlice';
// import * as postsService from '~/apiServices/postsService';
import NewsFeedItem from '~/components/NewsFeedItem/NewsFeedItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'FeedBack and helps',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'KeyBroard Shotcuts',
    },
];

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

function Home() {
    const [suggestedUser, setSuggestedUser] = useState([]);
    const [posts, setPosts] = useState([]);
    // const dispatch = useDispatch();
    // const username = useSelector(selectUserName);
    // const newPosts = useSelector(selectPosts);

    // newPosts?.map((data) => console.log('check'));

    // let posts = [];

    // useEffect(() => {
    //     // db.collection('posts').onSnapshot((snapshot) => {
    //     //     // console.log('hello');
    //     //     snapshot.docs.map((doc) => {
    //     //         // console.log(posts);
    //     //         posts = [...posts, { id: doc.id, ...doc.data() }];
    //     //     });
    //     // });

    // }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await suggestedService.getSuggested();
            setSuggestedUser(result);
        };
        fetchApi();

        const fetchApiPost = async () => {
            const result = await postsService.getPosts();
            setPosts(result);
        };
        fetchApiPost();
    }, []);

    return (
        <div className={cx('main_home')}>
            <div className={cx('wrapper')}>
                <div className={cx('news')}>
                    {/* news feed item */}
                    {posts.map((post) => (
                        <NewsFeedItem dataPost={post} />
                    ))}
                </div>
                {/* SuggestedAccounts */}
                <SuggestedAccounts label="Suggestions for you" datas={suggestedUser} />
            </div>
        </div>
    );
}

export default Home;
