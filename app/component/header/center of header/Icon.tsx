import React from 'react'
import '../stylehead.css'
import '../../../globals.css'
import "../../Posts/SVG.css"
function Icon({ path ,link}: any) {


    type CustomCSSProperties = React.CSSProperties & {
        '--color'?: string;
    };



    const customStyle: CustomCSSProperties = {
        '--color': 'var(--primary-button-background)',
        // other styles here if needed
    };
    return (

      
                <li className="x1iyjqo2 xmlsiyf x1hxoosp x1l38jg0 x1awlv9s x1gz44f">
                    <span className="x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j">
                        <div className="x6s0dn4 x78zum5 x1s65kcs x1n2onr6">
                            <div className="xtvsq51 x11t77rh x146dn1l x1ey2m1c xuoj239 x177n6bx xb1c2wi x10l6tqk xhmqdbg x1k90msu x11xpdln x1qfuztq x1c071of"></div>
                            <a
                                aria-current="page"
                                aria-label="Home"
                                className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x6s0dn4 x78zum5 xdt5ytf x5yr21d xl56j7k x1n2onr6 xh8yej3"
                                href={link}
                                role="link"
                            >
                                <span className="x1n2onr6">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="x19dipnz x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
                                        style={customStyle}
                                    >
                                        {path}
                                    </svg>
                                    <span className="x11f4b5y x10l6tqk x1v4kod4">
                                        <div data-visualcompletion="ignore"></div>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </span>
                </li>
          
    )
}

export default Icon
