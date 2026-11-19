import { useState } from "react";
import {
  FiGrid,
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiArrowDownRight,
  FiPlus,
  FiBell,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import AdminCustomers from "./AdminCustomers";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";

const stats = [
  {
    title: "Total Revenue",
    value: "£12,450",
    change: "+12.5%",
    positive: true,
    icon: FiDollarSign,
  },
  {
    title: "Total Orders",
    value: "156",
    change: "+8.2%",
    positive: true,
    icon: FiShoppingBag,
  },
  {
    title: "Total Products",
    value: "48",
    change: "+4.6%",
    positive: true,
    icon: FiPackage,
  },
  {
    title: "Total Customers",
    value: "324",
    change: "-2.4%",
    positive: false,
    icon: FiUsers,
  },
];

const recentOrders = [
  {
    id: "#IFU-1025",
    customer: "James Wilson",
    product: "Luxury Upholstered Bed",
    date: "18 Nov 2026",
    amount: "£449.00",
    status: "Delivered",
  },
  {
    id: "#IFU-1024",
    customer: "Emily Johnson",
    product: "Modern Wooden Wardrobe",
    date: "18 Nov 2026",
    amount: "£529.00",
    status: "Processing",
  },
  {
    id: "#IFU-1023",
    customer: "Oliver Smith",
    product: "Premium Comfort Mattress",
    date: "17 Nov 2026",
    amount: "£299.00",
    status: "Pending",
  },
  {
    id: "#IFU-1022",
    customer: "Sophia Brown",
    product: "Contemporary Sofa",
    date: "17 Nov 2026",
    amount: "£799.00",
    status: "Delivered",
  },
  {
    id: "#IFU-1021",
    customer: "William Taylor",
    product: "Wooden Bunk Bed",
    date: "16 Nov 2026",
    amount: "£389.00",
    status: "Cancelled",
  },
];

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: FiGrid },
    { name: "Products", icon: FiPackage },
    { name: "Orders", icon: FiShoppingBag },
    { name: "Customers", icon: FiUsers },
    { name: "Settings", icon: FiSettings },
  ];

  const getStatusStyle = (status) => {
    const styles = {
      Delivered: "bg-green-50 text-green-700",
      Processing: "bg-blue-50 text-blue-700",
      Pending: "bg-yellow-50 text-yellow-700",
      Cancelled: "bg-red-50 text-red-700",
    };

    return styles[status] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#29251f]">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#e9e3d9] bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-[#e9e3d9] px-6">
          <div>
            <h1 className="font-serif text-xl font-semibold tracking-wide text-[#514b40]">
              INTERIOR
            </h1>
            <p className="text-[10px] tracking-[3px] text-[#a17c50]">
              FURNITURE UK
            </p>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-[#514b40] lg:hidden"
            aria-label="Close menu"
          >
            <FiX size={23} />
          </button>
        </div>

        <div className="px-5 py-7">
          <p className="mb-4 px-3 text-[10px] font-semibold tracking-[2px] text-[#a39b8e]">
            MAIN MENU
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveMenu(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition ${
                    active
                      ? "bg-[#514b40] text-white"
                      : "text-[#777064] hover:bg-[#f7f6f2] hover:text-[#514b40]"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-[#e9e3d9] p-5">
          <button
            onClick={() => alert("Admin logout will be connected later.")}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-[#777064] transition hover:bg-[#f7f6f2] hover:text-red-600"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="min-h-screen lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#e9e3d9] bg-white px-5 sm:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-[#514b40] lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>

            <div>
              <h2 className="font-serif text-xl text-[#29251f] sm:text-2xl">
                {activeMenu}
              </h2>
              <p className="hidden text-xs text-[#999084] sm:block">
                Welcome back, Admin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              className="relative text-[#777064] hover:text-[#a17c50]"
              aria-label="Notifications"
            >
              <FiBell size={20} />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#a17c50]" />
            </button>

            <div className="flex items-center gap-3 border-l border-[#e9e3d9] pl-4 sm:pl-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9e3d9] font-serif text-lg text-[#514b40]">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-[#514b40]">
                  Administrator
                </p>
                <p className="text-xs text-[#999084]">Store Manager</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-5 sm:p-8">
          {activeMenu === "Products" ? (
            <AdminProducts />
          ) : activeMenu === "Orders" ? (
            <AdminOrders />
          ) : activeMenu === "Customers" ? (
            <AdminCustomers />
          ) : activeMenu === "Dashboard" ? (
            // Yahan tumhara existing Dashboard code rahega
            <>
              {/* Page Heading */}
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-serif text-2xl text-[#29251f]">
                    Dashboard Overview
                  </h2>
                  <p className="mt-2 text-sm text-[#888176]">
                    Here is what is happening with your store today.
                  </p>
                </div>

                <button
                  onClick={() => setActiveMenu("Products")}
                  className="inline-flex items-center justify-center gap-2 bg-[#514b40] px-5 py-3 text-sm text-white transition hover:bg-[#3d392f]"
                >
                  <FiPlus size={17} />
                  Add New Product
                </button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  const ChangeIcon = stat.positive
                    ? FiArrowUpRight
                    : FiArrowDownRight;

                  return (
                    <div
                      key={stat.title}
                      className="border border-[#e9e3d9] bg-white p-5 sm:p-6"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#888176]">
                          {stat.title}
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center bg-[#f4f1eb] text-[#a17c50]">
                          <Icon size={20} />
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-3xl text-[#29251f]">
                        {stat.value}
                      </h3>

                      <div className="mt-3 flex items-center gap-1 text-xs">
                        <ChangeIcon
                          size={15}
                          className={
                            stat.positive ? "text-green-600" : "text-red-500"
                          }
                        />

                        <span
                          className={
                            stat.positive ? "text-green-600" : "text-red-500"
                          }
                        >
                          {stat.change}
                        </span>

                        <span className="text-[#999084]">from last month</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lower Dashboard */}
              <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* Sales Overview */}
                <div className="border border-[#e9e3d9] bg-white p-5 sm:p-6 xl:col-span-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl text-[#29251f]">
                        Sales Overview
                      </h3>
                      <p className="mt-1 text-xs text-[#999084]">
                        Monthly sales performance
                      </p>
                    </div>

                    <select className="border border-[#e9e3d9] bg-white px-3 py-2 text-xs text-[#777064] outline-none">
                      <option>Last 7 months</option>
                      <option>Last 30 days</option>
                      <option>This year</option>
                    </select>
                  </div>

                  <div className="mt-8 flex h-64 items-end justify-between gap-3 border-b border-l border-[#e9e3d9] px-2 pb-0 sm:px-5">
                    {[
                      { month: "May", height: "45%" },
                      { month: "Jun", height: "65%" },
                      { month: "Jul", height: "52%" },
                      { month: "Aug", height: "80%" },
                      { month: "Sep", height: "60%" },
                      { month: "Oct", height: "90%" },
                      { month: "Nov", height: "72%" },
                    ].map((item) => (
                      <div
                        key={item.month}
                        className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                      >
                        <div
                          style={{ height: item.height }}
                          className="w-full max-w-10 bg-[#a17c50] transition hover:bg-[#514b40]"
                        />

                        <span className="pb-2 text-[10px] text-[#999084] sm:text-xs">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Summary */}
                <div className="border border-[#e9e3d9] bg-white p-5 sm:p-6">
                  <h3 className="font-serif text-xl text-[#29251f]">
                    Store Summary
                  </h3>

                  <p className="mt-1 text-xs text-[#999084]">
                    Current store activity
                  </p>

                  <div className="mt-7 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center bg-[#f4f1eb] text-[#a17c50]">
                          <FiShoppingBag size={18} />
                        </span>

                        <span className="text-sm text-[#777064]">
                          New Orders
                        </span>
                      </div>

                      <strong className="text-lg text-[#514b40]">24</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center bg-[#f4f1eb] text-[#a17c50]">
                          <FiClock size={18} />
                        </span>

                        <span className="text-sm text-[#777064]">
                          Pending Orders
                        </span>
                      </div>

                      <strong className="text-lg text-[#514b40]">08</strong>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center bg-[#f4f1eb] text-[#a17c50]">
                          <FiPackage size={18} />
                        </span>

                        <span className="text-sm text-[#777064]">
                          Low Stock Items
                        </span>
                      </div>

                      <strong className="text-lg text-[#514b40]">05</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveMenu("Orders")}
                    className="mt-8 w-full border border-[#514b40] py-3 text-sm text-[#514b40] transition hover:bg-[#514b40] hover:text-white"
                  >
                    View Orders
                  </button>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="mt-8 border border-[#e9e3d9] bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e9e3d9] px-5 py-5 sm:px-6">
                  <div>
                    <h3 className="font-serif text-xl text-[#29251f]">
                      Recent Orders
                    </h3>
                    <p className="mt-1 text-xs text-[#999084]">
                      Latest customer orders
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveMenu("Orders")}
                    className="text-xs font-semibold text-[#a17c50] hover:text-[#514b40]"
                  >
                    View All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[750px] text-left">
                    <thead className="bg-[#faf8f4]">
                      <tr className="text-xs text-[#888176]">
                        <th className="px-6 py-4 font-medium">Order ID</th>
                        <th className="px-6 py-4 font-medium">Customer</th>
                        <th className="px-6 py-4 font-medium">Product</th>
                        <th className="px-6 py-4 font-medium">Date</th>
                        <th className="px-6 py-4 font-medium">Amount</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {recentOrders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-t border-[#f0ede7] text-sm"
                        >
                          <td className="px-6 py-4 font-medium text-[#514b40]">
                            {order.id}
                          </td>

                          <td className="px-6 py-4 text-[#777064]">
                            {order.customer}
                          </td>

                          <td className="px-6 py-4 text-[#777064]">
                            {order.product}
                          </td>

                          <td className="px-6 py-4 text-[#777064]">
                            {order.date}
                          </td>

                          <td className="px-6 py-4 font-medium text-[#514b40]">
                            {order.amount}
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={`inline-block px-3 py-1 text-xs ${getStatusStyle(
                                order.status,
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[450px] flex-col items-center justify-center border border-[#e9e3d9] bg-white px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4f1eb] text-[#a17c50]">
                {activeMenu === "Customers" && <FiUsers size={28} />}
                {activeMenu === "Settings" && <FiSettings size={28} />}
              </div>

              <h2 className="mt-6 font-serif text-2xl text-[#29251f]">
                {activeMenu} Management
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-[#888176]">
                This section will be developed in the next steps. You will be
                able to manage your store from here.
              </p>

              <button
                onClick={() => setActiveMenu("Dashboard")}
                className="mt-7 bg-[#514b40] px-7 py-3 text-sm text-white transition hover:bg-[#3d392f]"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
