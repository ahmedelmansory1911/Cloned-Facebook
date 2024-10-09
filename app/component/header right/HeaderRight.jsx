import React from 'react'
import IconsRight from './IconsRight'
const first = <path d="M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z" />
const third = <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
const second = <g fillRule="evenodd" transform="translate(-450 -1073)">
    <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82">
    </path>
</g>
function HeaderRight() {
    return (
        <div>
            <div className="flex items-end justify-end space-x-2 mr-4 xds687c x1pi30zi x1e558r4 xixxii4 x13vifvy xzkaem6">
                <div className='x6s0dn4 x78zum5 x1s65kcs x1n2onr6 x1ja2u2z'>
                    {/* first */}
                    <IconsRight path={first} link='/menu' box={'0 0 24 24 '} />
                    {/* the second  */}
                    <IconsRight path={second} link='/friend' box={'0 0 12 13 '} />



                    {/* the third */}
                  <IconsRight path={third} link='/notification' box={'0 0 24 24'} />
                    {/* the fourth */}

                    <div
                        aria-expanded="false"
                        aria-label="Your profile"
                        className="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1q0g3np x87ps6o x1lku1pv x1a2a7pz xzsf02u x1rg5ohu"
                        role="button"

                    >
                        <div className="x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z">
                            <svg
                                aria-label="Your profile"
                                className="x3ajldb"
                                data-visualcompletion="ignore-dynamic"
                                role="img"
                                style={{ height: '40px', width: '40px' }}
                            >
                                <mask id=":R3arcdad5qq9papd5aq:">
                                    <circle cx="20" cy="20" fill="white" r="20"></circle>
                                </mask>
                                <g mask="url(#:R3arcdad5qq9papd5aq:)">
                                    <image
                                        style={{ height: '40px', width: '40px' }}
                                        x="0"
                                        y="0"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid slice"
                                        width="100%"
                                        xlinkHref="https://images.tarmeezacademy.com/profile-pics/3.png"
                                    ></image>
                                    <circle
                                        className="xbh8q5q x1pwv2dq xvlca1e"
                                        cx="20"
                                        cy="20"
                                        r="20"
                                    ></circle>
                                </g>
                            </svg>
                            <div
                                className="x1ey2m1c xds687c x17qophe xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h xzolkzo x12go9s9 x1rnf11y xprq8jg"
                                role="none"
                                data-visualcompletion="ignore"
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderRight
