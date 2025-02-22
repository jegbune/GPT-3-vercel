import './Article.css'

type ArticleProps = {
  imgUrl? : string;
  date: string;
  title: string;

}

const Article = ({ imgUrl, date, title }: ArticleProps) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt='blog' />
        <div className="gpt3__blog-container_article-content">
          <div>
            <p>{date}</p> 
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>

    </div>
  )
}

export default Article