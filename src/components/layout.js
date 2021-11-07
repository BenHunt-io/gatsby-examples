import { Link } from 'gatsby';
import * as React from 'react';
import { 
    container,
    navLinkItem,
    navLinkText,
    navLinks,
    heading,
    siteTitle,
} from './layout.module.css';
import { useStaticQuery, graphql } from 'gatsby';


// Destructurizing extracts properties of the of obj arg passed in and assigns to variables.
const Layout = ({pageTitle, children}) => {


    const data = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    
    return(
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <h2 className={siteTitle}>{data.site.siteMetadata.title}</h2>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/faucets">Faucets</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/payments">Payments</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/tutorials">Tutorials</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h2 className={heading}>{pageTitle}</h2>
                {children}
            </main>
        </div>
    );
};


export default Layout;