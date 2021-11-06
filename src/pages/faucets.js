// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Faucets = () => 
        (
        <Layout pageTitle="Faucets">
            <main>
                <ul>
                    <li><Link to="/skatefaucet">Skate Tokens</Link></li>
                </ul>
            </main>
        </Layout>
        );



export default Faucets;