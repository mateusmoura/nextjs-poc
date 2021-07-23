import { useRouter } from 'next/router';
import Link from 'next/link';
// import { useAmp } from 'next/amp';
import
  {
    Dimmer,
    Loader,
    Segment,
    Container,
  } from 'semantic-ui-react';

import Header from '../../components/Header';
import MenuPrincial from '../../components/MenuPrincial';

// data
import { getAllPostsWithSlug, getPost } from '../../lib/api';

// styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

export const config = { amp: 'hybrid' };

const Post = ({ postData }) =>
{
  const router = useRouter();

  if (!router.isFallback && !postData?.slug || !postData) {
    return (
      <Container text textAlign="center">
        <Segment inverted style={{ height: '100vh' }}>
          <Dimmer inverted active>
            <Loader inverted content='Carregando' />
          </Dimmer>

          {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
        </Segment>
      </Container>
    )
  }

  const formatDate = date =>
  {
    const newDate = new Date(date);

    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
  }

  return (
    <div className={styles.container}>
      <Header title={postData.title} />

      <MenuPrincial />

      <main className={styles.main}>
        {router.isFallback ? (
          <h2>Loading...</h2>
        ) : (
          <article className={blogStyles.article}>
            <div className={blogStyles.postmeta}>
              <h1 className={styles.title}>{postData.title}</h1>
              <p>{formatDate(postData.date)}</p>
            </div>

            <div className="post-content content" dangerouslySetInnerHTML={{ __html: postData.content }} />
          </article>
        )}

        <p>
          <Link href="/blog">
            <a>back to articles</a>
          </Link>
        </p>
      </main>
    </div>
  )
}

export default Post;

export const getStaticPaths = async () =>
{
  const allPosts = await getAllPostsWithSlug();

  return {
    fallback: true,
    paths: allPosts.edges.map(({ node }) => ({ params: { slug: `blog/${node.slug}` } })) || [],
  };
};

export const getStaticProps = async ({ params }) =>
{
  const data = await getPost(params.slug);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      postData: data.post || {},
    },
    revalidate: 1,
  };
};
