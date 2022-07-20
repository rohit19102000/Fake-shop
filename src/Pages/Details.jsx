

export default function Details({ details }) {  

  
  return (
    <>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={`${details.image}`} alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-white-500 text-3xl">
            {" "}
            {details.title}{" "}
          </h1>
          <br />
          <h4 className="card-title">{details.category} </h4>
          <h1 className="text-8xl text-pink-500">{details.price}</h1>
          <p className="card-title">{details.description}</p>

          {/*  rating card */}
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Rating</h2>
              <h3 className="card-title">{details.rating.rate}</h3>
              <div className="card-actions justify-end">
                <h4 className="card-title">
                  rated by upto : {details.rating.count}{" "}
                </h4>
              </div>
            </div>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </>
  );
}
