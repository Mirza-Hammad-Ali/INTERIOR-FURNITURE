
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiEye,
  FiFilter,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";

const initialOrders = [
  {
    id: "IFU-1025",
    customer: "James Wilson",
    email: "james@example.com",
    phone: "+44 7700 900101",
    product: "Luxury Upholstered Bed",
    quantity: 1,
    date: "18 Nov 2026",
    amount: 449,
    status: "Delivered",
    address: "London, United Kingdom",
  },
  {
    id: "IFU-1024",
    customer: "Emily Johnson",
    email: "emily@example.com",
    phone: "+44 7700 900102",
    product: "Modern Wooden Wardrobe",
    quantity: 1,
    date: "18 Nov 2026",
    amount: 529,
    status: "Processing",
    address: "Manchester, United Kingdom",
  },
  {
    id: "IFU-1023",
    customer: "Oliver Smith",
    email: "oliver@example.com",
    phone: "+44 7700 900103",
    product: "Premium Comfort Mattress",
    quantity: 2,
    date: "17 Nov 2026",
    amount: 598,
    status: "Pending",
    address: "Birmingham, United Kingdom",
  },
  {
    id: "IFU-1022",
    customer: "Sophia Brown",
    email: "sophia@example.com",
    phone: "+44 7700 900104",
    product: "Contemporary Sofa",
    quantity: 1,
    date: "17 Nov 2026",
    amount: 799,
    status: "Delivered",
    address: "Liverpool, United Kingdom",
  },
  {
    id: "IFU-1021",
    customer: "William Taylor",
    email: "william@example.com",
    phone: "+44 7700 900105",
    product: "Wooden Bunk Bed",
    quantity: 1,
    date: "16 Nov 2026",
    amount: 389,
    status: "Cancelled",
    address: "Leeds, United Kingdom",
  },
  {
    id: "IFU-1020",
    customer: "Charlotte Davis",
    email: "charlotte@example.com",
    phone: "+44 7700 900106",
    product: "Elegant Bedside Table",
    quantity: 2,
    date: "15 Nov 2026",
    amount: 258,
    status: "Processing",
    address: "Bristol, United Kingdom",
  },
];

function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const statuses = ["All", "Pending", "Processing", "Delivered", "Cancelled"];

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        filterStatus === "All" || order.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, filterStatus]);

  const updateStatus = (id, status) => {
    setOrders((previousOrders) =>
      previousOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );

    setSelectedOrder((previousOrder) =>
      previousOrder?.id === id
        ? { ...previousOrder, status }
        : previousOrder
    );
  };

  const statusStyle = (status) => {
    const styles = {
      Pending: "bg-yellow-50 text-yellow-700",
      Processing: "bg-blue-50 text-blue-700",
      Delivered: "bg-green-50 text-green-700",
      Cancelled: "bg-red-50 text-red-700",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  const counts = {
    total: orders.length,
    pending: orders.filter((order) => order.status === "Pending").length,
    processing: orders.filter((order) => order.status === "Processing").length,
    delivered: orders.filter((order) => order.status === "Delivered").length,
  };

  return (
    <div>
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-serif text-2xl text-[#29251f]">
            Orders Management
          </h2>
          <p className="mt-2 text-sm text-[#888176]">
            View and manage your customer orders.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#777064]">
          <FiShoppingBag size={18} />
          <span>{orders.length} Total Orders</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total Orders", value: counts.total },
          { label: "Pending Orders", value: counts.pending },
          { label: "Processing Orders", value: counts.processing },
          { label: "Delivered Orders", value: counts.delivered },
        ].map((item) => (
          <div
            key={item.label}
            className="border border-[#e9e3d9] bg-white p-5"
          >
            <p className="text-sm text-[#888176]">{item.label}</p>
            <h3 className="mt-3 font-serif text-3xl text-[#514b40]">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="mb-5 flex flex-col gap-4 border border-[#e9e3d9] bg-white p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999084]"
            size={18}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search order, customer or product..."
            className="w-full border border-[#e9e3d9] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#a17c50]"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiFilter className="text-[#888176]" size={18} />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full border border-[#e9e3d9] bg-white px-4 py-3 text-sm text-[#514b40] outline-none focus:border-[#a17c50] sm:w-52"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === "All" ? "All Orders" : status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden border border-[#e9e3d9] bg-white">
        <div className="border-b border-[#e9e3d9] px-5 py-5">
          <h3 className="font-serif text-xl text-[#29251f]">
            All Orders
          </h3>
          <p className="mt-1 text-xs text-[#999084]">
            Showing {filteredOrders.length} orders
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#faf8f4]">
              <tr className="text-xs text-[#888176]">
                <th className="px-5 py-4 font-medium">Order ID</th>
                <th className="px-5 py-4 font-medium">Customer</th>
                <th className="px-5 py-4 font-medium">Product</th>
                <th className="px-5 py-4 font-medium">Date</th>
                <th className="px-5 py-4 font-medium">Amount</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-[#f0ede7] text-sm"
                >
                  <td className="px-5 py-4 font-medium text-[#514b40]">
                    #{order.id}
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-medium text-[#514b40]">
                      {order.customer}
                    </p>
                    <p className="mt-1 text-xs text-[#999084]">
                      {order.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-[#777064]">
                    {order.product}
                  </td>

                  <td className="px-5 py-4 text-[#777064]">
                    {order.date}
                  </td>

                  <td className="px-5 py-4 font-medium text-[#514b40]">
                    £{order.amount.toFixed(2)}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs ${statusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="flex items-center gap-2 text-xs font-medium text-[#a17c50] hover:text-[#514b40]"
                    >
                      <FiEye size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-14 text-center text-sm text-[#999084]"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          onClick={() => setSelectedOrder(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="my-auto w-full max-w-xl bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-[#e9e3d9] px-6 py-5">
              <div>
                <h3 className="font-serif text-xl text-[#29251f]">
                  Order Details
                </h3>
                <p className="mt-1 text-xs text-[#999084]">
                  #{selectedOrder.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="text-[#777064] hover:text-red-600"
                aria-label="Close order details"
              >
                <FiX size={22} />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <p className="mb-2 text-xs text-[#999084]">CUSTOMER</p>
                <p className="font-medium text-[#514b40]">
                  {selectedOrder.customer}
                </p>
                <p className="mt-1 text-sm text-[#777064]">
                  {selectedOrder.email}
                </p>
                <p className="mt-1 text-sm text-[#777064]">
                  {selectedOrder.phone}
                </p>
              </div>

              <div className="border-t border-[#e9e3d9] pt-5">
                <p className="mb-2 text-xs text-[#999084]">PRODUCT</p>
                <p className="font-medium text-[#514b40]">
                  {selectedOrder.product}
                </p>
                <p className="mt-1 text-sm text-[#777064]">
                  Quantity: {selectedOrder.quantity}
                </p>
                <p className="mt-2 font-semibold text-[#514b40]">
                  £{selectedOrder.amount.toFixed(2)}
                </p>
              </div>

              <div className="border-t border-[#e9e3d9] pt-5">
                <p className="mb-2 text-xs text-[#999084]">
                  DELIVERY ADDRESS
                </p>
                <p className="text-sm text-[#514b40]">
                  {selectedOrder.address}
                </p>
              </div>

              <div className="border-t border-[#e9e3d9] pt-5">
                <label className="mb-2 block text-xs text-[#999084]">
                  UPDATE ORDER STATUS
                </label>

                <select
                  value={selectedOrder.status}
                  onChange={(e) =>
                    updateStatus(selectedOrder.id, e.target.value)
                  }
                  className="w-full border border-[#e9e3d9] bg-white px-4 py-3 text-sm outline-none focus:border-[#a17c50]"
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full bg-[#514b40] py-3 text-sm text-white transition hover:bg-[#3d392f]"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminOrders;
