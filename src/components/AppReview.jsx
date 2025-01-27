const AppReview = ({ review }) => {
    return (
      <div className="card">
        <div className="card-body">
          <h4><span></span> {review.name}</h4>
          <p>{review.vote}</p>
          <p>{review.text}</p>
        </div>
      </div>
    );
  }
  
  export default AppReview;