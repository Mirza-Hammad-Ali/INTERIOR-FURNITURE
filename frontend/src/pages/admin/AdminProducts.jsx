
import { useMemo, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiX,
  FiPackage,
} from "react-icons/fi";

import initialProducts from "../../data/products";

const emptyForm = {
  name: "",
  category: "Beds",
  price: "",
  oldPrice: "",
  image: "",
  badge: "New",
  description: "",
};

function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  const categories = [
    "Beds",
    "Wardrobes",
    "Mattresses",
    "Chest of Drawers",
    "Dining Furniture",
    "Sofas",
    "Bunk Beds",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
      );
    });
  }, [products, search]);

  const openAddForm = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      badge: product.badge || "",
      description: product.description || "",
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      price: Number(formData.price),
      oldPrice: Number(formData.oldPrice),
    };

    if (editingId !== null) {
      setProducts((current) =>
        current.map((product) =>
          product.id === editingId
            ? { ...product, ...productData }
            : product
        )
      );
    } else {
      const newProduct = {
        id: Math.max(0, ...products.map((product) => product.id)) + 1,
        ...productData,
      };

      setProducts((current) => [...current, newProduct]);
    }

    setShowForm(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setProducts((current) =>
        current.filter((product) => product.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] p-5 sm:p-8">
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
            STORE MANAGEMENT
          </span>

          <h1 className="mt-2 font-serif text-3xl text-[#29251f]">
            Products Management
          </h1>

          <p className="mt-2 text-sm text-[#888176]">
            Manage your furniture products and inventory.
          </p>
        </div>

        <button
          onClick={openAddForm}
          className="inline-flex items-center justify-center gap-2 bg-[#514b40] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3d392f]"
        >
          <FiPlus size={18} />
          Add New Product
        </button>
      </div>

      {/* Product Count */}
      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="border border-[#e9e3d9] bg-white p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center bg-[#f4f1eb] text-[#a17c50]">
              <FiPackage size={22} />
            </div>

            <div>
              <p className="text-sm text-[#888176]">Total Products</p>
              <h2 className="mt-1 font-serif text-2xl text-[#29251f]">
                {products.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="border border-[#e9e3d9] bg-white p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center bg-[#f4f1eb] text-[#a17c50]">
              <FiPackage size={22} />
            </div>

            <div>
              <p className="text-sm text-[#888176]">Filtered Products</p>
              <h2 className="mt-1 font-serif text-2xl text-[#29251f]">
                {filteredProducts.length}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 border border-[#e9e3d9] bg-white p-4">
        <div className="relative max-w-md">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999084]"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products or categories..."
            className="w-full border border-[#e9e3d9] bg-[#faf8f4] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#a17c50]"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden border border-[#e9e3d9] bg-white">
        <div className="border-b border-[#e9e3d9] px-5 py-5 sm:px-6">
          <h2 className="font-serif text-xl text-[#29251f]">
            All Products
          </h2>
          <p className="mt-1 text-xs text-[#999084]">
            View and manage your store collection.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#faf8f4]">
              <tr className="text-xs text-[#888176]">
                <th className="px-5 py-4 font-medium">Product</th>
                <th className="px-5 py-4 font-medium">Category</th>
                <th className="px-5 py-4 font-medium">Price</th>
                <th className="px-5 py-4 font-medium">Old Price</th>
                <th className="px-5 py-4 font-medium">Badge</th>
                <th className="px-5 py-4 text-center font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-[#f0ede7] text-sm"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 shrink-0 object-cover"
                      />

                      <div>
                        <p className="font-medium text-[#514b40]">
                          {product.name}
                        </p>
                        <p className="mt-1 text-xs text-[#999084]">
                          ID: {product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-[#777064]">
                    {product.category}
                  </td>

                  <td className="px-5 py-4 font-medium text-[#514b40]">
                    £{Number(product.price).toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-[#999084]">
                    £{Number(product.oldPrice).toFixed(2)}
                  </td>

                  <td className="px-5 py-4">
                    {product.badge ? (
                      <span className="bg-[#f4f1eb] px-3 py-1 text-xs text-[#a17c50]">
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-xs text-[#999084]">—</span>
                    )}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => openEditForm(product)}
                        title="Edit Product"
                        className="flex h-9 w-9 items-center justify-center bg-[#f4f1eb] text-[#514b40] transition hover:bg-[#514b40] hover:text-white"
                      >
                        <FiEdit2 size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        title="Delete Product"
                        className="flex h-9 w-9 items-center justify-center bg-red-50 text-red-600 transition hover:bg-red-600 hover:text-white"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <div className="px-5 py-16 text-center">
              <FiPackage className="mx-auto text-[#a17c50]" size={35} />
              <p className="mt-4 text-sm text-[#777064]">
                No products found.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
          <div className="my-auto w-full max-w-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#e9e3d9] px-5 py-5 sm:px-7">
              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  {editingId !== null ? "Edit Product" : "Add New Product"}
                </h2>
                <p className="mt-1 text-xs text-[#999084]">
                  Enter your product information below.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-[#777064] hover:text-red-600"
                aria-label="Close form"
              >
                <FiX size={23} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-7">
              <div>
                <label className="mb-2 block text-sm text-[#514b40]">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter product name"
                  className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border border-[#e9e3d9] bg-white px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Badge
                  </label>
                  <input
                    type="text"
                    name="badge"
                    value={formData.badge}
                    onChange={handleChange}
                    placeholder="e.g. New, Bestseller"
                    className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Current Price (£)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                    placeholder="449"
                    className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Old Price (£)
                  </label>
                  <input
                    type="number"
                    name="oldPrice"
                    value={formData.oldPrice}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    required
                    placeholder="599"
                    className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#514b40]">
                  Product Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/image.jpg"
                  className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#514b40]">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Write product description..."
                  className="w-full resize-y border border-[#e9e3d9] px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                />
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-[#e9e3d9] pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border border-[#e9e3d9] px-6 py-3 text-sm text-[#514b40] transition hover:bg-[#faf8f4]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-[#514b40] px-7 py-3 text-sm text-white transition hover:bg-[#3d392f]"
                >
                  {editingId !== null ? "Update Product" : "Save Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;
