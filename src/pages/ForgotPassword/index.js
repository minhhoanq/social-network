import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { InstagramTextIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(0);
    const [disable, setDisable] = useState('');

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    useEffect(() => {
        if (ValidateEmail() === false) {
            setDisabled(true);
            setDisable('disable');
        } else {
            setDisabled(false);
            setDisable('');
        }
    }, [email]);

    const ValidateEmail = () => {
        if (email === '') {
            return false;
        }
        return true;
    };

    const onClickSendLogin = (e) => {
        e.preventDefault();
        const valid = ValidateEmail();
        if (valid) {
            console.log('check');
        }
    };

    return (
        <form className={cx('wrapper')}>
            <div className={cx('login_form')}>
                <div className={cx('login_form_logo')}>
                    <InstagramTextIcon />
                </div>

                <div className={cx('trouble')}>
                    <h4 className={cx('trouble_text')}>Trouble logging in?</h4>
                </div>

                <div className={cx('description')}>
                    <p className={cx('description_text')}>
                        Enter your email, phone, or username and we'll send you a link to get back into your account.
                    </p>
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
                                onChange={onChangeEmail}
                            ></input>
                        </div>
                        {/* btn login */}
                        <div className={cx('enter_info_wrapper_btn')}>
                            <button
                                className={cx('enter_info_btn', disable)}
                                disabled={disabled}
                                onClick={onClickSendLogin}
                            >
                                Send login link
                            </button>
                        </div>

                        <div className={cx('cant_rs_pass')}>
                            <Link to={''} className={cx('cant_rs_pass-link')}>
                                Can't reset your password?
                            </Link>
                        </div>

                        {/* bulkhead */}
                        <div className={cx('wrapper_bul')}>
                            <div className={cx('wrapper_bul_line')}></div>
                            <div className={cx('wrapper_bul_or')}>OR</div>
                            <div className={cx('wrapper_bul_line')}></div>
                        </div>

                        <div className={cx('create_acc')}>
                            <Link to={''}>Create new account</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('register_temp')}>
                <Link to={''}>Back to login</Link>
            </div>
        </form>
    );
}

export default ForgotPassword;
