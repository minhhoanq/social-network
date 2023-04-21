import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faKeyboard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import { useEffect, useState } from 'react';
import * as suggestedService from '~/apiServices/suggestedService';
import * as postsService from '~/apiServices/postsService';
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
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(initUser);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await suggestedService.getSuggested();
            setSuggestedUser(result);
        };
        fetchApi();
        // const getUsersApi = async () => {
        //     const result = await suggestedService.getSuggested();
        //     setUsers(result);
        // };
        // getUsersApi();

        // const getPostsApi = async () => {
        //     const result = await postsService.getPosts();
        //     setPosts(result);
        // };
        // getPostsApi();
    }, []);

    // const getUserByPostId = (id) => {
    //     users.filter((user) => {
    //         if (user.id === id) {
    //             setUser(user);
    //         }
    //     });
    // };

    //Handle logic
    const HandleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle logic
                break;
            default:
                break;
        }
    };

    return (
        <div className={cx('main_home')}>
            <div className={cx('wrapper')}>
                <div className={cx('news')}>
                    {/* news feed item */}
                    {/* {posts.map((post) => {
                        getUserByPostId(post.id);
                        <NewsFeedItem dataPost={post} dataUser={user} />;
                    })} */}
                </div>
                {/* SuggestedAccounts */}
                <SuggestedAccounts label="Suggestions for you" data={suggestedUser} />
            </div>
        </div>
    );
}

export default Home;
