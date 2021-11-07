import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';


const Tutorials = () => {

     const data = useStaticQuery(graphql`
        query TutorialsQuery {
            allFile(filter: {sourceInstanceName: {eq: "tutorial-examples"}}) {
                nodes {
                    name
                }
            }
        }
    `);

    return (
        <Layout pageTitle="tutorials">
            <div>
                <ul>
                    {
                        data.allFile.nodes.map(node => {
                            return (
                                <li>{node.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    );
    }


export default Tutorials;