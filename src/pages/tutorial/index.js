import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

const Tutorials = () => {

     const data = useStaticQuery(graphql`
        query TutorialIndexQuery {
            allMdx {
                nodes {
                  slug
                  frontmatter {
                    title
                    date
                  }
                  id
                }
              }
            }
    `);

    return (
        <Layout pageTitle="tutorials">
            <div>
                <ul>
                    {
                        data.allMdx.nodes.map(node => {
                            return (
                                <article key={node.id}>
                                    <Link to={`/tutorial/${node.slug}`}>{node.frontmatter.title}</Link>
                                </article> 
                            )
                        })
                    }
                </ul>
            </div>
        </Layout>
    );
    }


export default Tutorials;