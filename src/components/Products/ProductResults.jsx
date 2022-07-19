import { useEffect, useState } from "react";

export default function ProductResults() {
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
        console.log(product)
        return(
            <div className="card w-96 bg-base-100 shadow-xl image-full " >
            <figure><img src={product.image} alt="Product Image" /></figure>
            <div className="card-body">
              <h2 className="card-title">{product.category}</h2>
              <p>{product.title}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">get details</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
