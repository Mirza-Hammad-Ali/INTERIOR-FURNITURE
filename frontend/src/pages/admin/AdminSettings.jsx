
import { useState } from "react";
import {
  FiSave,
  FiSettings,
  FiMapPin,
  FiMail,
  FiPhone,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: "INTERIOR FURNITURE UK",
    email: "support@interiorfurnitureuk.com",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
    currency: "GBP (£)",
    delivery: "United Kingdom Only",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("furniture-store-settings", JSON.stringify(settings));

    setSaved(true);
  };

  const inputClass =
    "mt-2 w-full rounded-lg border border-[#E9E3D9] bg-white px-4 py-3 text-sm text-[#29251F] outline-none transition focus:border-[#A17C50]";

  return (
    <div className="space-y-7">
      {/* Heading */}
      <div>
        <h2 className="font-serif text-2xl text-[#29251F]">
          Store Settings
        </h2>
        <p className="mt-1 text-sm text-[#82796D]">
          Manage your store information and preferences.
        </p>
      </div>

      {/* Store Information */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl border border-[#E9E3D9] bg-white">
          <div className="flex items-center gap-3 border-b border-[#E9E3D9] p-5 sm:p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1E9] text-[#A17C50]">
              <FiSettings size={21} />
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#29251F]">
                General Information
              </h3>
              <p className="text-xs text-[#82796D]">
                Basic details about your furniture store.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-[#514B40]">
                Store Name
              </label>
              <input
                type="text"
                name="storeName"
                value={settings.storeName}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Enter store name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#514B40]">
                <FiMail size={15} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#514B40]">
                <FiPhone size={15} />
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter contact number"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="rounded-xl border border-[#E9E3D9] bg-white">
          <div className="flex items-center gap-3 border-b border-[#E9E3D9] p-5 sm:p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1E9] text-[#A17C50]">
              <FiMapPin size={21} />
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#29251F]">
                Store Address
              </h3>
              <p className="text-xs text-[#82796D]">
                Enter your business location details.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-[#514B40]">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter street address"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#514B40]">
                City
              </label>
              <input
                type="text"
                name="city"
                value={settings.city}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#514B40]">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                value={settings.postcode}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter postcode"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-center gap-2 text-sm font-medium text-[#514B40]">
                <FiGlobe size={15} />
                Country
              </label>
              <input
                type="text"
                name="country"
                value={settings.country}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter country"
              />
            </div>
          </div>
        </div>

        {/* Store Preferences */}
        <div className="rounded-xl border border-[#E9E3D9] bg-white">
          <div className="border-b border-[#E9E3D9] p-5 sm:p-6">
            <h3 className="font-serif text-lg text-[#29251F]">
              Store Preferences
            </h3>
            <p className="mt-1 text-xs text-[#82796D]">
              Configure currency and delivery preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <div>
              <label className="text-sm font-medium text-[#514B40]">
                Currency
              </label>
              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="GBP (£)">GBP (£) - British Pound</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#514B40]">
                Delivery Region
              </label>
              <select
                name="delivery"
                value={settings.delivery}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="United Kingdom Only">
                  United Kingdom Only
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#E9E3D9] bg-white p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            {saved ? (
              <p className="flex items-center gap-2 text-sm font-medium text-green-700">
                <FiCheckCircle size={18} />
                Settings saved successfully!
              </p>
            ) : (
              <p className="text-sm text-[#82796D]">
                Save your changes to update store preferences.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#514B40] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#29251F] sm:w-auto"
          >
            <FiSave size={17} />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;
