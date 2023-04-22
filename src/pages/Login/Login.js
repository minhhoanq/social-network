import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { AiFillFacebook } from 'react-icons/ai';
import { useEffect, useState } from 'react';
// import isEmpty from 'validator/lib/isEmpty';
import { InstagramTextIcon } from '~/components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '~/firebase';
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '~/features/user/userSlice';

const cx = classNames.bind(styles);

function Login() {
    // const [user, setUser] = useState('');
    // const [password, setPassword] = useState('');
    // const [disabled, setDisable] = useState(0);
    // const [dis, setDis] = useState('');
    // const [disp, setDisp] = useState('');

    //
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);

    // useEffect(() => {
    //     if (ValidateAll() === false) {
    //         setDisable(true);
    //         setDis('disable');
    //         setDisp('none');
    //     } else {
    //         setDisable(false);
    //         setDis('');
    //     }
    // }, [user, password]);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/');
            }
        });
    }, [username]);

    const handleAuth = () => {
        if (!username) {
            auth.signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }),
        );
    };

    // const onChangeUserName = (e) => {
    //     const value = e.target.value;
    //     // setUser(value);
    // };

    // const onChangePassword = (e) => {
    //     const value = e.target.value;
    //     setPassword(value);
    // };

    // const ValidateAll = () => {
    //     if (isEmpty(user)) {
    //         return false;
    //     }

    //     if (isEmpty(password)) {
    //         return false;
    //     }

    //     return true;
    // };

    // const onCLickSubmit = (e) => {
    //     e.preventDefault();
    //     const valid = ValidateAll();
    //     if (!valid) {
    //         return;
    //     } else {
    //         setDisp('block');
    //         console.log(`check`);
    //     }
    // };

    return (
        <form className={cx('wrapper')}>
            <div className={cx('login_form')}>
                <div className={cx('login_form_logo')}>
                    <InstagramTextIcon />
                </div>

                <div className={cx('login_form_body')}>
                    {/* inputs */}
                    <div className={cx('login_form_enter_info')}>
                        {/* input user name */}
                        <div className={cx('enter_info_ipnut')}>
                            <input
                                className={cx('enter_info_ipnut-user')}
                                placeholder="Phone number, username, or email"
                                type={'text'}
                                // onChange={onChangeUserName}
                            ></input>
                        </div>
                        {/* input password */}
                        <div className={cx('enter_info_ipnut')}>
                            <input
                                className={cx('enter_info_ipnut-user')}
                                placeholder="Password"
                                type={'password'}
                                // onChange={onChangePassword}
                            ></input>
                        </div>
                        {/* btn login */}
                        <div className={cx('enter_info_wrapper_btn')}>
                            <button
                                className={cx('enter_info_btn', {
                                    /*dis*/
                                })}
                                // onClick={onCLickSubmit} disabled={disabled}
                            >
                                Login
                            </button>
                        </div>
                        {/* bulkhead */}
                        <div className={cx('wrapper_bul')}>
                            <div className={cx('wrapper_bul_line')}></div>
                            <div className={cx('wrapper_bul_or')}>OR</div>
                            <div className={cx('wrapper_bul_line')}></div>
                        </div>
                        {/* login with fb */}
                        <div className={cx('wrapper_link_fb')}>
                            {!username ? (
                                <a className={cx('wrapper_link_fb-btn')} onClick={handleAuth}>
                                    <span className={cx('wrapper_link_fb-icon')}>
                                        <AiFillFacebook className={cx('fb-icon')}></AiFillFacebook>
                                    </span>
                                    <span className={cx('wrapper_link_fb-text')}>Login with Facebook</span>
                                </a>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>

                    <div
                        className={cx('wrapper_msg')}
                        id="msgError"
                        // style={{ display: disp }}
                    >
                        <p className={cx('msg_notify')}>
                            Sorry, your password was incorrect. Please double-check your password.
                        </p>
                    </div>

                    <div className={cx('login_form_fogot_pw')}>
                        <a href={'https://vietnix.vn/'}>Fogot password</a>
                    </div>
                </div>
            </div>

            <div className={cx('register_temp')}>
                <div className={cx('register_temp_wrapper_text')}>
                    <span className={cx('register_temp_text')}>
                        Don't have an account?
                        <a href={'https://www.instagram.com/accounts/emailsignup/'} className={cx('pppp')}>
                            Sign up
                        </a>
                    </span>
                </div>
            </div>

            <div className={cx('get_the_app')}>
                <div className={cx('get_the_app_wapper_text')}>
                    <span className={cx('get_the_app_text')}>Get the app.</span>
                </div>
                <div className={cx('get_the_app_wrapper')}>
                    <a href="https://www.instagram.com/" className={cx('get_the_app_link-google-play')}>
                        <img
                            alt="Get it on Google Play"
                            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                        />
                    </a>
                    <a href="https://www.instagram.com/" className={cx('get_the_app_link-microsoft')}>
                        <img
                            alt="Get it from Microsoft"
                            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                        />
                    </a>
                </div>
            </div>
        </form>
    );
}

export default Login;
