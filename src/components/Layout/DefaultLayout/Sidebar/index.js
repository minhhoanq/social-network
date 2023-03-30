import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Menu from '~/components/Popper/Menu';
import {
    CreateIcon,
    ExploreIcon,
    HomeIcon,
    MessagesIcon,
    NotificationsIcon,
    ReelsIcon,
    SearchIcon,
    MoreIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MORE_ITEMS = [
    {
        icon: (
            <svg
                aria-label="Settings"
                class="x1lliihq x1n2onr6"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <title>Settings</title>
                <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></circle>
                <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></path>
            </svg>
        ),
        title: 'Settings',
    },
    {
        icon: (
            <svg
                aria-label="Your activity"
                class="x1lliihq x1n2onr6"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <title>Your activity</title>
                <path
                    d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></path>
                <polyline
                    fill="none"
                    points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></polyline>
                <circle cx="7.24" cy="2.651" r="1.125"></circle>
                <circle cx="3.515" cy="5.83" r="1.125"></circle>
                <circle cx="1.636" cy="10.353" r="1.125"></circle>
                <circle cx="2.01" cy="15.235" r="1.125"></circle>
            </svg>
        ),
        title: 'Your activity',
    },

    {
        icon: (
            <svg
                aria-label="Saved"
                class="x1lliihq x1n2onr6"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <title>Saved</title>
                <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></polygon>
            </svg>
        ),
        title: 'Saved',
    },
    {
        icon: (
            <svg
                aria-label="Theme icon"
                class="x1lliihq x1n2onr6"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 16 16"
                width="24"
            >
                <title>Theme icon</title>
                <path
                    d="M8.05 16C3.61 16 0 12.39 0 7.95 0 3.99 2.83.65 6.72 0c.49-.03.87.22.99.6.11.38-.05.78-.41 1-1.7.93-2.75 2.69-2.75 4.61 0 2.89 2.35 5.25 5.25 5.25a5.25 5.25 0 0 0 4.61-2.74c.19-.37.61-.54 1.01-.4.42.14.66.56.58 1.01A8.044 8.044 0 0 1 8.05 16zM5.8 1.32c-2.78.93-4.73 3.56-4.73 6.63 0 3.85 3.13 6.99 6.99 6.99 3.04 0 5.66-1.93 6.61-4.72a6.301 6.301 0 0 1-4.87 2.31c-3.48 0-6.31-2.83-6.31-6.31-.01-1.93.86-3.71 2.31-4.9zm9.54 7.89s0 .01 0 0c0 .01 0 0 0 0z"
                    fill="currentColor"
                ></path>
            </svg>
        ),
        title: 'Switch appearance',
    },

    {
        icon: (
            <svg
                aria-label="Report a problem"
                class="x1lliihq x1n2onr6"
                color="rgb(38, 38, 38)"
                fill="rgb(38, 38, 38)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <title>Report a problem</title>
                <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
            </svg>
        ),
        title: 'Report a problem',
    },
    {
        title: 'Switch account',
    },

    {
        title: 'Log out',
        not_border_bottom: true,
    },
];

function Sidebar() {
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
        <div className={cx('wrapper_temp')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper_components')}>
                    {/* logo */}
                    <div className={cx('logo')}>
                        <div className={cx('logo_space')}>
                            <div className={cx('logo_wrapper-link')}>
                                <Link to={''} className={cx('logo_link')}>
                                    <div className={cx('logo_wrapper_svg')}>
                                        <div className={cx('logo_svg')}>
                                            <svg
                                                aria-label="Instagram"
                                                className={cx('_ab6-')}
                                                color="rgb(38, 38, 38)"
                                                fill="rgb(38, 38, 38)"
                                                height="29"
                                                role="img"
                                                viewBox="32 4 113 32"
                                                width="103"
                                            >
                                                <path
                                                    clipRule={'evenodd'}
                                                    d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* option */}
                    <div className={cx('options')}>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <HomeIcon />
                                        </div>
                                        <div className={cx('common_text')}>Home</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <SearchIcon />
                                        </div>
                                        <div className={cx('common_text')}>Search</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <ExploreIcon />
                                        </div>
                                        <div className={cx('common_text')}>Explore</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <ReelsIcon />
                                        </div>
                                        <div className={cx('common_text')}>Reels</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp', 'focus')}>
                                        <div className={cx('common_logo')}>
                                            <MessagesIcon />
                                        </div>
                                        <div className={cx('common_text')}>Messages</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <NotificationsIcon />
                                        </div>
                                        <div className={cx('common_text')}>Notifications</div>

                                        <div className={cx('comon_dot_notify')}></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <CreateIcon />
                                        </div>
                                        <div className={cx('common_text')}>Create</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('common')}>
                            <Link className={cx('common_link')}>
                                <div className={cx('common_wrapper')}>
                                    <div className={cx('common_wrapper_temp')}>
                                        <div className={cx('common_logo')}>
                                            <img
                                                alt="user1819292918182"
                                                className={'hCL kVc L4E MIw'}
                                                fetchpriority="auto"
                                                loading="auto"
                                                src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                                            />
                                        </div>
                                        <div className={cx('common_text')}>Profile</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* more */}
                    <div className={cx('more')}>
                        <div className={cx('more_temp')}>
                            <div className={cx('more_temp_link')}>
                                {/* <Link className={cx('more_link')}>
                                    <div className={cx('more_wrapper')}>
                                        <div className={cx('more_wrapper_logo')}>
                                            <div>
                                                <div className={cx('more_logo')}>
                                                    <svg
                                                        aria-label="Settings"
                                                        className={'_ab6-'}
                                                        color="rgb(38, 38, 38)"
                                                        fill="rgb(38, 38, 38)"
                                                        height="24"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                    >
                                                        <line
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                            x1="3"
                                                            x2="21"
                                                            y1="4"
                                                            y2="4"
                                                        ></line>
                                                        <line
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                            x1="3"
                                                            x2="21"
                                                            y1="12"
                                                            y2="12"
                                                        ></line>
                                                        <line
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                            x1="3"
                                                            x2="21"
                                                            y1="20"
                                                            y2="20"
                                                        ></line>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('more_text')}>More</div>
                                    </div>
                                </Link> */}
                                {/* <div className={cx('more_option')}>
                                    <div className={cx('more_option_temp')}>
                                        <Link className={cx('more_option-link', 'more_option-link-settings')}>
                                            <div className={cx('more_option_wrapper', 'more_option_wrapper-settings')}>
                                                <div className={cx('more_option-text')}>Settings</div>
                                                <div className={cx('more_option-logo')}>
                                                    <svg
                                                        aria-label="Settings"
                                                        className={cx('_ab6-')}
                                                        color="rgb(38, 38, 38)"
                                                        fill="rgb(38, 38, 38)"
                                                        height="24"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="8.635"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                        ></circle>
                                                        <path
                                                            d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className={cx('more_option-link')}>
                                            <div className={cx('more_option_wrapper')}>
                                                <div className={cx('more_option-text')}>Your activity</div>
                                                <div className={cx('more_option-logo')}>
                                                    <svg
                                                        aria-label="Your activity"
                                                        className={cx('_ab6-')}
                                                        color="rgb(38, 38, 38)"
                                                        fill="rgb(38, 38, 38)"
                                                        height="24"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                    >
                                                        <path
                                                            d="M12 1.505a10.5 10.5 0 11-7.424 17.924"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                        ></path>
                                                        <polyline
                                                            fill="none"
                                                            points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                        ></polyline>
                                                        <circle cx="7.24" cy="2.651" r="1.125"></circle>
                                                        <circle cx="3.515" cy="5.83" r="1.125"></circle>
                                                        <circle cx="1.636" cy="10.353" r="1.125"></circle>
                                                        <circle cx="2.01" cy="15.235" r="1.125"></circle>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className={cx('more_option-link')}>
                                            <div className={cx('more_option_wrapper')}>
                                                <div className={cx('more_option-text')}>Saved</div>
                                                <div className={cx('more_option-logo')}>
                                                    <svg
                                                        aria-label="Saved"
                                                        className={cx('_ab6-')}
                                                        color="rgb(38, 38, 38)"
                                                        fill="rgb(38, 38, 38)"
                                                        height="24"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                    >
                                                        <polygon
                                                            fill="none"
                                                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                                            stroke="currentColor"
                                                            strokeLinecap={'round'}
                                                            strokeLinejoin={'round'}
                                                            strokeWidth={'2'}
                                                        ></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className={cx('more_option-link')}>
                                            <div className={cx('more_option_wrapper')}>
                                                <div className={cx('more_option-text')}>Switch appearance</div>
                                                <div className={cx('more_option-logo')}>
                                                    <svg
                                                        aria-label="Theme icon"
                                                        className={cx('_ab6-')}
                                                        color="rgb(38, 38, 38)"
                                                        fill="rgb(38, 38, 38)"
                                                        height="24"
                                                        role="img"
                                                        viewBox="0 0 16 16"
                                                        width="24"
                                                    >
                                                        <path
                                                            d="M8.05 16C3.61 16 0 12.39 0 7.95 0 3.99 2.83.65 6.72 0c.49-.03.87.22.99.6.11.38-.05.78-.41 1-1.7.93-2.75 2.69-2.75 4.61 0 2.89 2.35 5.25 5.25 5.25a5.25 5.25 0 0 0 4.61-2.74c.19-.37.61-.54 1.01-.4.42.14.66.56.58 1.01A8.044 8.044 0 0 1 8.05 16zM5.8 1.32c-2.78.93-4.73 3.56-4.73 6.63 0 3.85 3.13 6.99 6.99 6.99 3.04 0 5.66-1.93 6.61-4.72a6.301 6.301 0 0 1-4.87 2.31c-3.48 0-6.31-2.83-6.31-6.31-.01-1.93.86-3.71 2.31-4.9zm9.54 7.89s0 .01 0 0c0 .01 0 0 0 0z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className={cx('more_option-link')}>
                                            <div className={cx('more_option_wrapper')}>
                                                <div className={cx('more_option-text')}>Report a problem</div>
                                                <div className={cx('more_option-logo')}>
                                                    <svg
                                                        aria-label="Report a problem"
                                                        className={cx('_ab6-')}
                                                        color="rgb(38, 38, 38)"
                                                        fill="rgb(38, 38, 38)"
                                                        height="24"
                                                        role="img"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                    >
                                                        <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className={cx('more_option-link')}>
                                            <div className={cx('more_option_wrapper', 'more_option_wrapper-swacc')}>
                                                <div className={cx('more_option-text')}>Switch accounts</div>
                                            </div>
                                        </Link>

                                        <Link className={cx('more_option-link')}>
                                            <div className={cx('more_option_wrapper', 'more_option_wrapper-logout')}>
                                                <div className={cx('more_option-text')}>Log out</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div> */}

                                <Menu items={MORE_ITEMS} onChange={HandleMenuChange}>
                                    <button className={cx('icon-menu')}>
                                        <MoreIcon />
                                        <span className={cx('icon-text')}>More</span>
                                    </button>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
