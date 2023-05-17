import Head from 'next/head';
import styles from '../../styles/Blog.module.scss';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Image from 'next/image';

export type BlogPostSkeleton = {
    contentTypeId: 'post',
    fields: {
        title: contentful.EntryFieldTypes.Text,
        slug: contentful.EntryFieldTypes.Text,
        preview: contentful.EntryFieldTypes.Text,
        headerImage: contentful.EntryFieldTypes.AssetLink,
        content: contentful.EntryFieldTypes.RichText
    }
}

interface PostPreview {
    title: string,
    imageUrl: string,
    preview: string,
    slug: string,
    createdAt: string
}

const Blog = ({ posts }: { posts: PostPreview[] }) => {
    return (
        <>
            <Head>
                <title>Blog | Caravan K9</title>
            </Head>
            <div className={styles.container}>
                <h1>THE CARAVAN BLOG</h1>
                <div className='separator-container'>
                    <div className='separator-dark' />
                </div>
                <div className={styles.previewsContainer}>
                    {posts.map(post => {
                        return (
                            <div className={styles.postPreview}>
                                <div className={styles.imageContainer}>
                                    <a href={`/blog/${post.slug}`}>
                                        <Image src={post.imageUrl} layout='fill' alt='Post header image' />
                                    </a>
                                </div>
                                <div className={styles.nonImageContainer}>
                                    <a href={`/blog/${post.slug}`}><h2>{post.title}</h2></a>
                                    <div className={styles.date}>- {new Date(post.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})} -</div>
                                    <div className={styles.previewText}>{post.preview}</div>
                                    <a href={`/blog/${post.slug}`}>
                                        Read more...
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.getEntries<BlogPostSkeleton>({content_type: 'post'});

    let posts = [];

    for (const entry of entries.items) {
        const headerImageURL = (await client.getAsset(entry.fields.headerImage.sys.id)).fields.file.url;
        const post = {
            title: entry.fields.title,
            imageUrl: `https:${headerImageURL}`,
            preview: entry.fields.preview,
            slug: entry.fields.slug,
            createdAt: entry.sys.createdAt
        }
        posts.push(post);
    }

    posts = posts.sort((a, b) => {
        return -1 * (Date.parse(a.sys.createdAt) - Date.parse(b.sys.createdAt));
    });

    return { props: { posts }};
}

export default Blog;