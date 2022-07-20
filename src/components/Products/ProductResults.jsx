import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
export default function ProductResults( { getDetails }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`, {});
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    useEffect(() => {
      fetchProducts();
    }, []);

  return (
    <div className="grid grid-cols-1 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {
      products.map((product) => {
      
        return(
            <div className="card w-96 bg-base-100 shadow-xl image-full "  key={product.id}>
            <figure><img src={product.image} alt="Product" /></figure>
            <div className="card-body">
              <h2 className="card-title">{product.category}</h2>
              <p>{product.title}</p>
              <div className="card-actions justify-end">
                {/* <button >get details</button> */}
                <Link to="/details" className="btn btn-primary" onClick={() => getDetails(product)}>get Details</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
