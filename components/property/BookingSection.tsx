import React, { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.ceil(diffTime / (1000 * 3600 * 24));
  };

  const nights = getNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-1/3">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-1"
        />
      </div>

      <div className="mt-4">
        <label className="block">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-1"
        />
      </div>

      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>${nights > 0 ? total : 0}</strong>
        </p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
