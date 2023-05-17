import styles from '../../styles/Blog.module.scss';
import * as contentful from 'contentful';
import Image from 'next/image';
import { ReactElement } from 'react';
import Layout from '../../components/layout';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BlogPostSkeleton } from '.';

interface Post {
    title: string,
    imageUrl: string,
    createdAt: string,
    content: string
}

const Post = ({ post }: { post: Post }) => {
    return (
            <div className={styles.postContainer}>
                <div className={styles.heroContainer}>
                    <Image src={post.imageUrl} layout='fill' alt="Hero image" />
                    <div className={styles.heroText}>
                        <h1>{post.title}</h1>
                        <div><i>{new Date(post.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</i></div>
                    </div>
                </div>
                <div className={styles.nonHeroContainer}>
                    <div className={styles.heroTextMobile}>
                        <h1>{post.title}</h1>
                        <div><i>{new Date(post.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</i></div>
                    </div>
                    <div className={styles.bodyContainer} dangerouslySetInnerHTML={{__html: post.content}}></div>
                </div>
            </div>
    );
};

export async function getStaticProps(context) {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const postData = (await client.getEntries<BlogPostSkeleton>({content_type: 'post', 'fields.slug[in]': context.params.slug})).items[0];

    const headerImageURL = (await client.getAsset(postData.fields.headerImage.sys.id)).fields.file.url;
    const content = await documentToHtmlString(postData.fields.content);
    
    return { props: {
        post: {
            title: postData.fields.title,
            imageUrl: `https:${headerImageURL}`,
            createdAt: postData.sys.createdAt,
            content
        }
    }}
}

export async function getStaticPaths() {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.getEntries();

    const paths = entries.items.map(item => {
        return { params: { slug: item.fields.slug }};
    });

    return { paths, fallback: false }
}

Post.getLayout = (page: ReactElement) => {
    return (
        <Layout containsHero={true}>
            {page}
        </Layout>
    );
}

export default Post;