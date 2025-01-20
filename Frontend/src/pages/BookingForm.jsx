import React, { useState } from "react";
import axios from "axios";
import bookingDog from "../assets/bookingDog.png";
import bookingCat from "../assets/bookingCat.png";
import bookingCatPhone from "../assets/bookingCatPhone.png";
import Logo from "../assets/Logo.png";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "",
    place: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check for empty fields
    if (
      !formData.service ||
      !formData.day ||
      !formData.month ||
      !formData.year ||
      !formData.hour ||
      !formData.minute ||
      !formData.ampm ||
      !formData.place ||
      !formData.email
    ) {
      alert("All fields are required");
      return;
    }

    // Format the appointment date and time
    const formattedData = {
      service: formData.service,
      day: formData.day,
      month: formData.month,
      year: formData.year,
      hour: formData.hour,
      minute: formData.minute,
      ampm: formData.ampm,
      place: formData.place,
      email: formData.email,
    };

    // API call to submit the form data using axios
    try {
      const response = await axios.post(
        "http://localhost:3000/user/booking",
        formattedData
      );

      alert(response.data.message)
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Failed to submit booking.");
    }
  };

  return (
    <div className="relative bg-[#031D44] lg:bg-[#F2E3BC] h-screen w-screen flex flex-col gap-1 justify-center items-center px-8">
      <img
        className="h-12 md:h-24 absolute top-6 md:top-12 lg:top-4 lg:left-4 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 z-30"
        src={Logo}
        alt="Petcare Logo"
      />

      <img
        className="max-lg:hidden absolute object-cover left-0 bottom-0 z-10"
        src={bookingCat}
        alt="Booking Cat"
      />
      <img
        className="max-lg:hidden absolute object-cover right-0 bottom-0 z-10"
        src={bookingDog}
        alt="Booking Dog"
      />

      <form
          className="w-full sm:w-[80%] md:w-[70%] lg:w-[40%] lg:bg-[#031D44] flex flex-col lg:px-6 lg:py-8 lg:rounded-3xl relative z-30"
          onSubmit={handleSubmit}
      >
      <div className="flex justify-center text-xl md:text-2xl text-[#F2E3BC] font-bold pb-3">
        Book an Appointment
      </div>

      {/* Service */}
      <div className="mb-3 w-full">
        <label className="block text-[#F2E3BC] text-sm md:text-lg lg:text-sm mb-1">
          Service
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full p-1.5 border rounded bg-white text-[#031D44] text-sm md:text-base"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Pet Nursing">Pet Nursing</option>
          <option value="Pet Grooming">Pet Grooming</option>
          <option value="Pet Walking">Pet Walking</option>
        </select>
      </div>

      {/* Appointment Date */}
      <div className="mb-3">
        <label className="block text-[#F2E3BC] text-sm md:text-lg lg:text-sm mb-1">
          Appointment Date
        </label>
        <div className="flex space-x-1">
          <input
            type="text"
            name="day"
            value={formData.day}
            onChange={handleInputChange}
            placeholder="DD"
            className="w-1/3 p-1.5 border rounded text-center text-sm"
          />
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleInputChange}
            placeholder="MM"
            className="w-1/3 p-1.5 border rounded text-center text-sm"
          />
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            placeholder="YYYY"
            className="w-1/3 p-1.5 border rounded text-center text-sm"
          />
        </div>
      </div>

      {/* Appointment Time */}
      <div className="mb-3">
        <label className="block text-[#F2E3BC] text-sm md:text-lg lg:text-sm mb-1">
          Appointment Time
        </label>
        <div className="flex space-x-1">
          <input
            type="text"
            name="hour"
            value={formData.hour}
            onChange={handleInputChange}
            placeholder="HH"
            className="w-1/3 p-1.5 border rounded text-center text-sm"
          />
          <input
            type="text"
            name="minute"
            value={formData.minute}
            onChange={handleInputChange}
            placeholder="MM"
            className="w-1/3 p-1.5 border rounded text-center text-sm"
          />
          <select
            name="ampm"
            value={formData.ampm}
            onChange={handleInputChange}
            className="w-1/3 p-1.5 border rounded text-center text-sm"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      {/* Place */}
      <div className="mb-3">
        <label className="block text-[#F2E3BC] text-sm md:text-lg lg:text-sm mb-1">
          Place
        </label>
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleInputChange}
          placeholder="Enter place"
          className="w-full p-1.5 border rounded text-sm"
        />
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="block text-[#F2E3BC] text-sm md:text-lg lg:text-sm mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="w-full p-1.5 border rounded mb-6 text-sm"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <img className="h-14 lg:hidden" src={bookingCatPhone} alt="Booking Cat on Phone" />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-[55%] bg-[#F2E3BC] text-[#031D44] py-3 rounded-full text-sm font-bold"
        >
          Submit Booking
        </button>
      </div>
    </form>
  </div>

  );
};

export default BookingForm;
