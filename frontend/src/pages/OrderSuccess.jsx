
import { Link, useLocation } from "react-router-dom";
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi";

function OrderSuccess() {
  const location = useLocation();
  const orderTotal = location.state?.total;

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#faf8f4] px-5 py-16">
      <div className="w-full max-w-2xl border border-[#e9e3d9] bg-white px-6 py-12 text-center shadow-sm sm:px-12">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f2f4ed] text-[#4b5142]">
          <FiCheckCircle size={42} />
        </div>

        <span className="mt-8 block text-xs font-semibold tracking-[3px] text-[#a17c50]">
          ORDER CONFIRMATION
        </span>

        <h1 className="mt-4 font-serif text-3xl text-[#29251f] sm:text-4xl">
          Thank You for Your Order!
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#777064]">
          Your order has been submitted successfully. Thank you for choosing
          INTERIOR FURNITURE UK. We appreciate your trust in us.
        </p>

        {typeof orderTotal === "number" && (
          <div className="mx-auto mt-8 max-w-sm border-y border-[#e9e3d9] py-5">
            <span className="text-sm text-[#777064]">
              Order Total
            </span>

            <strong className="mt-2 block font-serif text-3xl text-[#514b40]">
              £{orderTotal.toFixed(2)}
            </strong>
          </div>
        )}

        <div className="mt-8 bg-[#faf8f4] p-5">
          <p className="text-sm font-medium text-[#514b40]">
            Payment Method: Cash on Delivery
          </p>

          <p className="mt-2 text-xs leading-6 text-[#888176]">
            You can pay when your furniture is delivered to your address.
          </p>
        </div>

        <Link
          to="/shop"
          className="mt-9 inline-flex items-center justify-center gap-3 bg-[#514b40] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
        >
          <FiShoppingBag />
          Continue Shopping
        </Link>

        <p className="mt-6 text-xs text-[#999084]">
          INTERIOR FURNITURE UK
        </p>

      </div>
    </section>
  );
}

export default OrderSuccess;
