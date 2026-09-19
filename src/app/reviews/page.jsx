
export const metadata = {
  title: "Reviews",
  description: "Our customers reviews",
};

const ReviewsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");

  const reviews = await res.json();

  return (
    <div className='my-10 px-4'>
      <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-8'>
        Our Customer's Reviews
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {reviews.slice(0, 200).map((review) => (
          <div
            key={review.id}
            className='card card-border bg-base-100 w-full shadow-sm'>
            <div className='card-body'>
              <h2 className='card-title'>Name: {review.name}</h2>

              <p>Email: {review.email}</p>

              <p>{review.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
