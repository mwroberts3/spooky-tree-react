import React from 'react'
import { news } from '../data'

const News = () => {
  const createContentHTML = (contentHTML) => {
    return {__html: contentHTML}
  };

  return (
    <section id="news">
      <div className="news-box">
        <h3 className='section-title'>News</h3>
        {news.map((post) => {
          const {date, title, byLine, contentHTML} = post;

          return <article className='news-item' key={title}>
            <span className='post-header'>
              {date} - {title}
            </span>
            <span className="byline">{byLine}</span>
            <p dangerouslySetInnerHTML={createContentHTML(contentHTML)}></p>
          </article>
        })}
      </div>
    </section>
  )
}

export default News