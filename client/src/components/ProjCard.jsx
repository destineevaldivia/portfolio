const ProjCard = (props) => {
  return (
    <section>
      <div className="card-container">
        <h3 className="card-title">{props.title}</h3>
        <a
          href="https://github.com/destineevaldivia/EmoHelper/tree/complete_mvp"
          //   target="github repo"
        >
          <img src={props.proj} className="github-repo-img" alt="github repo" />
        </a>
        <blockquote className="card-description">{props.blurb}</blockquote>
      </div>
    </section>
  );
};

export default ProjCard;
