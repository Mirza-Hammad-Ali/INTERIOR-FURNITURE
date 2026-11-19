
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiUsers,
  FiShoppingBag,
  FiDollarSign,
  FiEye,
  FiX,
} from "react-icons/fi";

const initialCustomers = [
  {
    id: 1,
    name: "James Wilson",
    email: "james.wilson@example.com",
    phone: "+44 7700 900101",
    orders: 5,
    spent: 1845,
    joined: "12 Nov 2026",
    address: "London, United Kingdom",
  },
  {
    id: 2,
    name: "Olivia Smith",
    email: "olivia.smith@example.com",
    phone: "+44 7700 900102",
    orders: 3,
    spent: 1249,
    joined: "10 Nov 2026",
    address: "Manchester, United Kingdom",
  },
  {
    id: 3,
    name: "William Brown",
    email: "william.brown@example.com",
    phone: "+44 7700 900103",
    orders: 2,
    spent: 899,
    joined: "08 Nov 2026",
    address: "Birmingham, United Kingdom",
  },
  {
    id: 4,
    name: "Sophia Taylor",
    email: "sophia.taylor@example.com",
    phone: "+44 7700 900104",
    orders: 4,
    spent: 2199,
    joined: "05 Nov 2026",
    address: "Leeds, United Kingdom",
  },
  {
    id: 5,
    name: "George Davies",
    email: "george.davies@example.com",
    phone: "+44 7700 900105",
    orders: 1,
    spent: 449,
    joined: "02 Nov 2026",
    address: "Liverpool, United Kingdom",
  },
  {
    id: 6,
    name: "Amelia Johnson",
    email: "amelia.johnson@example.com",
    phone: "+44 7700 900106",
    orders: 6,
    spent: 2849,
    joined: "01 Nov 2026",
    address: "Bristol, United Kingdom",
  },
];

function AdminCustomers() {
  const [customers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const value = search.toLowerCase();

      return (
        customer.name.toLowerCase().includes(value) ||
        customer.email.toLowerCase().includes(value) ||
        customer.phone.toLowerCase().includes(value)
      );
    });
  }, [customers, search]);

  const totalOrders = customers.reduce(
    (total, customer) => total + customer.orders,
    0
  );

  const totalSpent = customers.reduce(
    (total, customer) => total + customer.spent,
    0
  );

  const stats = [
    {
      title: "Total Customers",
      value: customers.length,
      icon: FiUsers,
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: FiShoppingBag,
    },
    {
      title: "Total Revenue",
      value: `£${totalSpent.toLocaleString("en-GB")}`,
      icon: FiDollarSign,
    },
  ];

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-2xl font-serif text-[#29251F]">
          Customers
        </h2>
        <p className="mt-1 text-sm text-[#82796D]">
          View and manage your store customers.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-[#E9E3D9] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#82796D]">
                    {stat.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[#29251F]">
                    {stat.value}
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F1E9] text-[#A17C50]">
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Customers Table */}
      <div className="overflow-hidden rounded-xl border border-[#E9E3D9] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#E9E3D9] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#29251F]">
              All Customers
            </h3>
            <p className="mt-1 text-sm text-[#82796D]">
              {filteredCustomers.length} customers found
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#82796D]"
              size={18}
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers..."
              className="w-full rounded-lg border border-[#E9E3D9] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#A17C50]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#FAF8F4]">
              <tr>
                {[
                  "Customer",
                  "Phone",
                  "Orders",
                  "Total Spent",
                  "Joined",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-[#82796D]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#F0EBE3]">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-[#FAF8F4]"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium text-[#29251F]">
                      {customer.name}
                    </p>
                    <p className="mt-1 text-xs text-[#82796D]">
                      {customer.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#514B40]">
                    {customer.phone}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#514B40]">
                    {customer.orders}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-[#29251F]">
                    £{customer.spent.toLocaleString("en-GB")}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#514B40]">
                    {customer.joined}
                  </td>

                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="flex items-center gap-2 rounded-lg border border-[#E9E3D9] px-3 py-2 text-sm text-[#514B40] transition hover:border-[#A17C50] hover:text-[#A17C50]"
                    >
                      <FiEye size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {filteredCustomers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-12 text-center text-sm text-[#82796D]"
                  >
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#E9E3D9] pb-4">
              <h3 className="text-xl font-serif text-[#29251F]">
                Customer Details
              </h3>

              <button
                onClick={() => setSelectedCustomer(null)}
                className="rounded-full p-2 text-[#82796D] hover:bg-[#F5F1E9]"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs text-[#82796D]">Full Name</p>
                <p className="mt-1 font-medium text-[#29251F]">
                  {selectedCustomer.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#82796D]">Email Address</p>
                <p className="mt-1 text-sm text-[#514B40]">
                  {selectedCustomer.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#82796D]">Phone Number</p>
                <p className="mt-1 text-sm text-[#514B40]">
                  {selectedCustomer.phone}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#82796D]">Address</p>
                <p className="mt-1 text-sm text-[#514B40]">
                  {selectedCustomer.address}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#FAF8F4] p-4">
                  <p className="text-xs text-[#82796D]">Total Orders</p>
                  <p className="mt-1 text-xl font-semibold text-[#29251F]">
                    {selectedCustomer.orders}
                  </p>
                </div>

                <div className="rounded-lg bg-[#FAF8F4] p-4">
                  <p className="text-xs text-[#82796D]">Total Spent</p>
                  <p className="mt-1 text-xl font-semibold text-[#29251F]">
                    £{selectedCustomer.spent.toLocaleString("en-GB")}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-[#82796D]">Joined Date</p>
                <p className="mt-1 text-sm text-[#514B40]">
                  {selectedCustomer.joined}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCustomer(null)}
              className="mt-6 w-full rounded-lg bg-[#514B40] py-3 text-sm font-medium text-white transition hover:bg-[#29251F]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCustomers;
