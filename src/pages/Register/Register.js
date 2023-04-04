import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { InstagramTextIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('register_form')}>
                <div className={cx('register_form_logo')}>
                    <InstagramTextIcon className={cx('register_form_logo-link')} />
                </div>

                <div className={cx('register_form_body')}>
                    {/* description */}
                    <div className={cx('register_form_desc')}>
                        <h2>Sign up to see photos and videos from your friends.</h2>
                    </div>

                    {/* inputs */}
                    <div className={cx('register_form_enter_info')}>
                        {/* input user name */}
                        <div className={cx('enter_info_ipnut')}>
                            <input className={cx('enter_info_ipnut-user')} placeholder="Username" type={'text'}></input>
                        </div>
                        {/* input full name */}
                        <div className={cx('enter_info_ipnut_wrapper')}>
                            <div className={cx('enter_info_ipnut-fname')}>
                                <input
                                    className={cx('enter_info_ipnut-user-fname')}
                                    placeholder="First name"
                                    type={'text'}
                                ></input>

                                <input
                                    className={cx('enter_info_ipnut-user-fname')}
                                    placeholder="Last name"
                                    type={'text'}
                                ></input>
                            </div>
                        </div>

                        {/* input user sex */}
                        <div className={cx('enter_info_ipnut')}>
                            <div className={cx('enter_info_wrapper_radio')}>
                                <div className={cx('enter_radio-male')}>
                                    <input name="gender" type="radio" value="male" className={cx('enter_info_radio')} />
                                    Male
                                </div>
                                <div className={cx('enter_radio-female')}>
                                    <input
                                        name="gender"
                                        type="radio"
                                        value="female"
                                        className={cx('enter_info_radio')}
                                    />
                                    Female
                                </div>
                                <div className={cx('enter_radio-orther')}>
                                    <input
                                        name="gender"
                                        type="radio"
                                        value="orther"
                                        className={cx('enter_info_radio')}
                                    />
                                    Orther
                                </div>
                            </div>
                        </div>
                        {/* input birth */}
                        <div className={cx('enter_info_ipnut-select')}>
                            <div className={cx('wrapper_temp_select')}>
                                <span className={cx('wrapper_select')}>
                                    <span className="_aav1 _9z-6"></span>
                                    <select className={cx('selector_day')} title="Month:">
                                        <option title="January" value="1">
                                            January
                                        </option>
                                        <option title="February" value="2">
                                            February
                                        </option>
                                        <option title="March" value="3">
                                            March
                                        </option>
                                        <option title="April" value="4">
                                            April
                                        </option>
                                        <option title="May" value="5">
                                            May
                                        </option>
                                        <option title="June" value="6">
                                            June
                                        </option>
                                        <option title="July" value="7">
                                            July
                                        </option>
                                        <option title="August" value="8">
                                            August
                                        </option>
                                        <option title="September" value="9">
                                            September
                                        </option>
                                        <option title="October" value="10">
                                            October
                                        </option>
                                        <option title="November" value="11">
                                            November
                                        </option>
                                        <option title="December" value="12">
                                            December
                                        </option>
                                    </select>
                                </span>
                                <span className={cx('wrapper_select')}>
                                    <span className="_aav1 _9z-6"></span>
                                    <select className={cx('selector_day')} title="Day:">
                                        <option title="1" value="1">
                                            1
                                        </option>
                                        <option title="2" value="2">
                                            2
                                        </option>
                                        <option title="3" value="3">
                                            3
                                        </option>
                                        <option title="4" value="4">
                                            4
                                        </option>
                                        <option title="5" value="5">
                                            5
                                        </option>
                                        <option title="6" value="6">
                                            6
                                        </option>
                                        <option title="7" value="7">
                                            7
                                        </option>
                                        <option title="8" value="8">
                                            8
                                        </option>
                                        <option title="9" value="9">
                                            9
                                        </option>
                                        <option title="10" value="10">
                                            10
                                        </option>
                                        <option title="11" value="11">
                                            11
                                        </option>
                                        <option title="12" value="12">
                                            12
                                        </option>
                                        <option title="13" value="13">
                                            13
                                        </option>
                                        <option title="14" value="14">
                                            14
                                        </option>
                                        <option title="15" value="15">
                                            15
                                        </option>
                                        <option title="16" value="16">
                                            16
                                        </option>
                                        <option title="17" value="17">
                                            17
                                        </option>
                                        <option title="18" value="18">
                                            18
                                        </option>
                                        <option title="19" value="19">
                                            19
                                        </option>
                                        <option title="20" value="20">
                                            20
                                        </option>
                                        <option title="21" value="21">
                                            21
                                        </option>
                                        <option title="22" value="22">
                                            22
                                        </option>
                                        <option title="23" value="23">
                                            23
                                        </option>
                                        <option title="24" value="24">
                                            24
                                        </option>
                                        <option title="25" value="25">
                                            25
                                        </option>
                                        <option title="26" value="26">
                                            26
                                        </option>
                                        <option title="27" value="27">
                                            27
                                        </option>
                                        <option title="28" value="28">
                                            28
                                        </option>
                                        <option title="29" value="29">
                                            29
                                        </option>
                                        <option title="30" value="30">
                                            30
                                        </option>
                                        <option title="31" value="31">
                                            31
                                        </option>
                                    </select>
                                </span>
                                <span className={cx('wrapper_select')}>
                                    <span className="_aav1 _9z-6"></span>
                                    <select className={cx('selector_day')} title="Year:">
                                        <option title="2023" value="2023">
                                            2023
                                        </option>
                                        <option title="2022" value="2022">
                                            2022
                                        </option>
                                        <option title="2021" value="2021">
                                            2021
                                        </option>
                                        <option title="2020" value="2020">
                                            2020
                                        </option>
                                        <option title="2019" value="2019">
                                            2019
                                        </option>
                                        <option title="2018" value="2018">
                                            2018
                                        </option>
                                        <option title="2017" value="2017">
                                            2017
                                        </option>
                                        <option title="2016" value="2016">
                                            2016
                                        </option>
                                        <option title="2015" value="2015">
                                            2015
                                        </option>
                                        <option title="2014" value="2014">
                                            2014
                                        </option>
                                        <option title="2013" value="2013">
                                            2013
                                        </option>
                                        <option title="2012" value="2012">
                                            2012
                                        </option>
                                        <option title="2011" value="2011">
                                            2011
                                        </option>
                                        <option title="2010" value="2010">
                                            2010
                                        </option>
                                        <option title="2009" value="2009">
                                            2009
                                        </option>
                                        <option title="2008" value="2008">
                                            2008
                                        </option>
                                        <option title="2007" value="2007">
                                            2007
                                        </option>
                                        <option title="2006" value="2006">
                                            2006
                                        </option>
                                        <option title="2005" value="2005">
                                            2005
                                        </option>
                                        <option title="2004" value="2004">
                                            2004
                                        </option>
                                        <option title="2003" value="2003">
                                            2003
                                        </option>
                                        <option title="2002" value="2002">
                                            2002
                                        </option>
                                        <option title="2001" value="2001">
                                            2001
                                        </option>
                                        <option title="2000" value="2000">
                                            2000
                                        </option>
                                        <option title="1999" value="1999">
                                            1999
                                        </option>
                                        <option title="1998" value="1998">
                                            1998
                                        </option>
                                        <option title="1997" value="1997">
                                            1997
                                        </option>
                                        <option title="1996" value="1996">
                                            1996
                                        </option>
                                        <option title="1995" value="1995">
                                            1995
                                        </option>
                                        <option title="1994" value="1994">
                                            1994
                                        </option>
                                        <option title="1993" value="1993">
                                            1993
                                        </option>
                                        <option title="1992" value="1992">
                                            1992
                                        </option>
                                        <option title="1991" value="1991">
                                            1991
                                        </option>
                                        <option title="1990" value="1990">
                                            1990
                                        </option>
                                    </select>
                                </span>
                            </div>
                        </div>

                        {/* input email */}
                        <div className={cx('enter_info_ipnut')}>
                            <input className={cx('enter_info_ipnut-user')} placeholder="Email" type={'text'}></input>
                        </div>
                        {/* input phone */}
                        <div className={cx('enter_info_ipnut')}>
                            <input className={cx('enter_info_ipnut-user')} placeholder="Phone" type={'text'}></input>
                        </div>

                        {/* input user password */}
                        <div className={cx('enter_info_ipnut')}>
                            <input
                                className={cx('enter_info_ipnut-user')}
                                placeholder="Password"
                                type={'password'}
                            ></input>
                        </div>
                        {/* input confirm password */}
                        <div className={cx('enter_info_ipnut')}>
                            <input
                                className={cx('enter_info_ipnut-user')}
                                placeholder="Confirm password"
                                type={'password'}
                            ></input>
                        </div>
                    </div>

                    {/* rules */}
                    <p className={cx('rules')}>
                        <span className={cx('rules_wrapper')}>
                            <span className={cx('rules_wrapper_text')}>
                                People who use our service may have uploaded your contact information to Instagram.{' '}
                                <a href="https://cv.fullstack.edu.vn/">Learn More</a>
                            </span>
                            <br />
                            <br />
                            By signing up, you agree to our <a href="https://cv.fullstack.edu.vn/">Terms</a>
                            {' , '}
                            <a href="https://cv.fullstack.edu.vn/">Privacy Policy</a>
                            {' and '}
                            <a href="https://cv.fullstack.edu.vn/">Cookies Policy</a>
                            {' .'}
                        </span>
                    </p>

                    {/* btn register */}
                    <div className={cx('enter_info_wrapper_btn')}>
                        <button className={cx('enter_info_btn')}>Sign up</button>
                    </div>
                </div>
            </div>

            <div className={cx('register_temp')}>
                <div className={cx('register_temp_wrapper_text')}>
                    <span className={cx('register_temp_text')}>
                        Have an account?
                        <a href={'https://www.instagram.com/accounts/emailsignup/'} className={cx('pppp')}>
                            Log in
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
        </div>
    );
}

export default Register;
