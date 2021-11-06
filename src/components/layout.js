import { Link } from 'gatsby';
import * as React from 'react';
import { 
    container,
    navLinkItem,
    navLinkText,
    navLinks,
    heading,
} from './layout.module.css';

// Destructurizing extracts properties of the of obj arg passed in and assigns to variables.
const Layout = ({pageTitle, children}) => (
    <div className={container}>
        <title>{pageTitle}</title>
        <nav>
            <h5>Navigation</h5>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/">Home</Link>
                </li>
                <li className={navLinkItem}>
                    <Link className={navLinkText} to="/faucets">Faucets</Link>
                </li>
            </ul>
        </nav>
        <main>
            <h2 className={heading}>{pageTitle}</h2>
            {children}
        </main>
    </div>
);


export default Layout;