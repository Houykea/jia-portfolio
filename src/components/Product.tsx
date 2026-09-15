import { useState, type FormEvent } from "react";

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  onSale: boolean;
}

export interface ProductFormData {
  name: string;
  price: string;
}

export interface FormErrors {
  name?: string;
  price?: string;
}

const INITIAL_PRODUCTS: ProductItem[] = [
  { id: 1, name: "Wireless Mouse", price: 25.99, inStock: true, onSale: true },
  { id: 2, name: "Mechanical Keyboard", price: 89.99, inStock: true, onSale: false },
  { id: 3, name: "USB-C Hub", price: 34.5, inStock: false, onSale: false },
];

const validateForm = (data: ProductFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Product name is required.";
  }

  if (!data.price.trim()) {
    errors.price = "Price is required.";
  } else if (isNaN(Number(data.price)) || Number(data.price) <= 0) {
    errors.price = "Price must be a valid positive number.";
  }

  return errors;
};

const Product = () => {
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [formData, setFormData] = useState<ProductFormData>({ name: "", price: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  // Derived filtered products list
  const displayedProducts = inStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  // Derived sale counter (only appears if greater than 0)
  const saleCount = displayedProducts.filter((p) => p.onSale).length;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const newProduct: ProductItem = {
      id: Date.now(),
      name: formData.name.trim(),
      price: parseFloat(formData.price),
      inStock: true,
      onSale: false,
    };

    setProducts((prev) => [...prev, newProduct]);
    setFormData({ name: "", price: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Catalog</h2>

      {/* Controlled "Add Product" Form */}
      <form onSubmit={handleSubmit} className="p-4 bg-gray-50 rounded-lg border space-y-3 mb-6">
        <h3 className="font-semibold text-gray-700">Add New Product</h3>

        <div>
          <input
            type="text"
            placeholder="Product name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full border p-2 rounded text-sm bg-white focus:outline-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Price (e.g. 29.99)"
            value={formData.price}
            onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
            className="w-full border p-2 rounded text-sm bg-white focus:outline-blue-500"
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition"
        >
          Add Product
        </button>
      </form>

      {/* Interactivity: Filters & Counters */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 mb-4">
        <div className="flex items-center gap-4">
          <p className="text-gray-600 font-medium">{displayedProducts.length} products</p>

          {/* Red Sale counter: appears with && only when count > 0 */}
          {saleCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">
              {saleCount} On Sale!
            </span>
          )}
        </div>

        {/* State-driven in-stock-only filter */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="rounded text-blue-600 cursor-pointer"
          />
          <span className="text-sm text-gray-700">In stock only</span>
        </label>
      </div>

      {/* Product Grid rendered from array with .map() and stable id keys */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg bg-gray-50 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-semibold text-gray-800">{product.name}</h4>
                {/* Green In stock / Gray Sold out badge via ternary */}
                <span
                  className={`px-2 py-0.5 text-xs rounded-full font-semibold whitespace-nowrap ${product.inStock
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {product.inStock ? "In stock" : "Sold out"}
                </span>
              </div>
              <p className="text-gray-700 font-medium">${product.price.toFixed(2)}</p>
            </div>

            {product.onSale && (
              <span className="text-xs text-red-500 font-semibold mt-2">Special Offer</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;