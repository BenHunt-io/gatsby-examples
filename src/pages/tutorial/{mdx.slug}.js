import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import Layout from '../../components/layout';




const TutorialTemplate = ({data}) => {

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <article key={data.mdx.id}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </article>
        </Layout>
    );

};

// id query parameter automatically available by gatsby under the hood
// gatsby passes this page query into the component.
export const query = graphql`
    query tutorialQuery($id: String) {
        mdx(id: {eq: $id}) {
        body
        id
        frontmatter {
            date
            title
        }
        }
    }
`;


export default TutorialTemplate;