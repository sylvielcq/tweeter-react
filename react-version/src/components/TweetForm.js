function TweetForm() {
  const placeholder = "What are you humming about?";
  const preventDefault = function(e) {
    e.preventDefault();
  };

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onClick={preventDefault}>
        <textarea className="form__textarea" name="text" placeholder={placeholder}></textarea>
        <input type="submit" value="Tweet" className="form__input"></input>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
};

export default TweetForm;