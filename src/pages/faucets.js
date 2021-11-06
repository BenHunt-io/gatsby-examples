// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby';

const Faucets = () => 
        (
        <main>
            <h2>Web3 Faucets</h2>
            <ul>
                <li><Link to="/skatefaucet">Skate Tokens</Link></li>
            </ul>
        </main>
        );



export default Faucets;