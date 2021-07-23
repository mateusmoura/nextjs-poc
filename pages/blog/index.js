import Link from 'next/link';
import Image from 'next/image';
import { useAmp } from 'next/amp';

import Header from '../../components/Header';
import MenuPrincial from '../../components/MenuPrincial';

// data
import { getAllPosts } from '../../lib/api';

// styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

export const config = { amp: 'hybrid' };

const Blog = ({ allPosts: { edges } }) => {
  const isAmp = useAmp();

  return (
    <div className={styles.container}>
      <Header title='Listagem de todos os Posts' />

      <MenuPrincial />

      <main className={styles.main}>
        <h1 className={styles.title}>Latest blog articles</h1>
        <hr />
        <section>
          {edges.map(({ node }) => (
            <div className={blogStyles.listitem} key={node.id}>
              <div className={blogStyles.listitem__thumbnail}>
                <figure>
                  {node?.extraPostInfo?.thumbnailImage &&
                    (isAmp ? (
                      <amp-img
                        alt={node.title}
                        layout='responsive'
                        src={node.extraPostInfo.thumbnailImage.mediaItemUrl}
                        width={
                          node.extraPostInfo.thumbnailImage.mediaDetails
                            .width || 250
                        }
                        height={
                          node.extraPostInfo.thumbnailImage.mediaDetails
                            .height || 250
                        }
                      ></amp-img>
                    ) : (
                      <Image
                        alt={node.title}
                        unoptimized={true}
                        width={
                          node.extraPostInfo.thumbnailImage.mediaDetails
                            .width || 250
                        }
                        height={
                          node.extraPostInfo.thumbnailImage.mediaDetails
                            .height || 250
                        }
                        src={node.extraPostInfo.thumbnailImage.mediaItemUrl}
                      />
                    ))}
                </figure>
              </div>
              <div className={blogStyles.listitem__content}>
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo.authorExcerpt}</p>
                <Link href={`/blog/${node.slug}`}>Read more</Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 5,
  };
}

export default Blog;
