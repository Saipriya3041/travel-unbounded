"use client";
import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    fullName: "",
    countryCode: "+91",
    contactNumber: "",
    email: "",
    dateOfTravel: "",
    numberOfPeople: "",
    hotelCategory: "",
    numberOfChildren: "",
    destination: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Future date validation
    const today = new Date().toISOString().split("T")[0];
    if (form.dateOfTravel < today) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />

      {/* ✅ Country code selector + contact number */}
      <div className="flex">
        <select
          name="countryCode"
          value={form.countryCode}
          onChange={handleChange}
          required
          className="border p-2 rounded-l"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
        </select>
        <input
          name="contactNumber"
          placeholder="Contact Number"
          onChange={handleChange}
          required
          className="border p-2 flex-1 rounded-r"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <input
        name="dateOfTravel"
        type="date"
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <input
        name="numberOfPeople"
        type="number"
        placeholder="Number of People"
        min="1"
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <select
        name="destination"
        value={form.destination}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      >
        <option value="">Select Destination</option>
        {/* India */}
        <option value="Kerala">Kerala</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Ladakh">Ladakh</option>
        <option value="Andaman">Andaman</option>
        <option value="Goa">Goa</option>
        {/* International */}
        <option value="Kenya">Kenya</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Iceland">Iceland</option>
        <option value="Sri Lanka">Sri Lanka</option>
      </select>
      <select
        name="hotelCategory"
        value={form.hotelCategory}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      >
        <option value="">Select Hotel Category</option>
        <option value="Standard">Standard</option>
        <option value="Deluxe">Deluxe</option>
        <option value="Luxury">Luxury</option>
      </select>
      <input
        name="numberOfChildren"
        type="number"
        placeholder="Number of Children"
        min="0"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {/* ✅ Feedback messages */}
      {status === "loading" && (
        <div className="flex items-center text-blue-600 mt-4">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          Submitting...
        </div>
      )}

      {status === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4">
          Thank you! Our travel expert will contact you within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
          Something went wrong. Please check your inputs and try again.
        </div>
      )}
    </form>
  );
}
