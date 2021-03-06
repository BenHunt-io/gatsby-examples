import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import Layout from '../../components/layout';




const TutorialTemplate = ({data}) => {


    const heroImage = getImage(data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <GatsbyImage image={heroImage}
                alt={data.mdx.frontmatter.hero_image_alt}/>
            <article key={data.mdx.id}>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </article>
        </Layout>
    );

};

// graphql gets parsed out of file during build process
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
            hero_image {
            childImageSharp {
                gatsbyImageData(height: 200, width: 300)
            }
            }
        }
        }
    }
`;


export default TutorialTemplate;