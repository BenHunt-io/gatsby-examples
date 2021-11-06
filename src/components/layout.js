import { Link } from 'gatsby';
import * as React from 'react';


const Layout = ({pageTitle, children}) => (
    <div>
        <title>{pageTitle}</title>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/faucets">Faucets</Link></li>
            </ul>
        </nav>
        <main>
            <h2>{pageTitle}</h2>
            {children}
        </main>
    </div>
);


export default Layout;