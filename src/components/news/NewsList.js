import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import styles from './NewsList.css';

export default function NewsItemsList({ news }) {
  const newsList = news.map(({
    title,
    description,
    urlToImage,
    author,
    publishedAt,
    source,
    url,
    tagColor
  }) => (
    <li key={url}>
      <NewsItem 
        title={title}
        description={description}
        urlToImage={urlToImage}
        author={author}
        publishedAt={publishedAt}
        source={source}
        url={url}
        tagColor={tagColor}
      />
    </li>
  ));

  return (
    <ul className={styles.container}>
      {newsList}
    </ul>
  );
}

NewsItemsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    source: PropTypes.shape({ 
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired,
    url: PropTypes.string.isRequired,
    tagColor: PropTypes.string.isRequired
  })).isRequired
};
