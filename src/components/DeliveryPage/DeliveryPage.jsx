import React from "react";

const DeliveryPage = ({ product, onConfirmDelivery }) => {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">No product selected</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Delivery Details
        </h2>

        {/* Product Details */}
        <div className="border rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Product Details
          </h3>
          <p className="text-gray-600">
            <span className="font-medium">Name:</span> {product.name}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Price:</span> ${product.price}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Description:</span>{" "}
            {product.description}
          </p>
        </div>

        {/* Delivery Address Form */}
        <div className="border rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Delivery Address
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Address
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your delivery address"
                rows="3"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </form>
        </div>

        {/* Confirm Delivery Button */}
        <button
          onClick={onConfirmDelivery}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition"
        >
          Confirm Delivery
        </button>
      </div>
    </div>
  );
};

export default DeliveryPage;
