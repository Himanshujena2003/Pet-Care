import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import dogFoot from "../assets/dogFoot.png";
import dogFoot2 from "../assets/dogFoot2.png";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  // Extract initials from full name
  const getInitials = (name) => {
    if (!name) return "";
    const nameArray = name.split(" ");
    if (nameArray.length === 1) return nameArray[0].charAt(0).toUpperCase();
    return (
      nameArray[0].charAt(0).toUpperCase() +
      nameArray[1].charAt(0).toUpperCase()
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
    }

    const fetchData = async () => {
      try {
        console.log("Sending token:", token);
        const response = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        setBookings(response.data.booked);
      } catch (error) {
        console.log("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    navigate("/home");
  };

  // Handle Update Password Submission
  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Use the token directly
      const response = await axios.patch(
        "http://localhost:3000/user/updatePassword",
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
      setShowUpdatePassword(false); // Close the update password form
      setNewPassword("");
    } catch (error) {
      console.log("Error updating password:", error);
      alert("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="h-full w-full">
      <div className="bg-[#F2E3BC] flex flex-col gap-14 py-20 relative">
        {/* Back Button */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 lg:top-12 lg:left-12 cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="xl"
            className="text-[#031D44] hover:scale-110 ease-in duration-200"
            onClick={() => navigate("/home")}
          />
        </div>

        {/* Update Password Button */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 lg:top-12 lg:right-12">
          <button
            onClick={() => setShowUpdatePassword(true)}
            className="bg-[#031D44] text-[#F2E3BC] px-4 py-2 rounded-lg font-bold hover:bg-[#02234d]"
          >
            Update Password
          </button>
        </div>

        <div className="flex justify-center items-center">
          {userData && (
            <div className="flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-[#031D44] text-[#F2E3BC] rounded-full cursor-pointer text-5xl font-bold">
              {getInitials(userData.fullName)}
            </div>
          )}
        </div>

        {userData ? (
          <div className="flex flex-col justify-center items-center md:gap-5">
            <h1 className="text-4xl md:text-6xl text-[#031D44] font-extrabold">
              {userData.fullName}
            </h1>
            <p className="text-[#031D44] text-md md:text-xl font-bold mt-4">
              Email: {userData.email}
            </p>
            <p className="text-[#031D44] text-md md:text-xl font-bold mt-2">
              Phone: {userData.phone}
            </p>

            <button
              onClick={handleLogout}
              className="flex justify-center text-center bg-[#031D44] text-[#F2E3BC] md:text-2xl font-bold lg:text-3xl px-6 py-2 md:px-16 md:py-6 mt-16 rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Update Password Form */}
      {showUpdatePassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="p-6 rounded-lg shadow-lg max-w-md w-full bg-[#F2E3BC]">
            <h2 className="text-xl font-bold mb-4 text-[#031D44]">Update Password</h2>
            <form onSubmit={handleUpdatePassword}>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-[#031D44] p-2 mb-4 rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowUpdatePassword(false)}
                  className="text-[#031D44] px-4 py-2 rounded mr-2 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#031D44] text-[#F2E3BC] px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bookings */}
      <div className="bg-[#031D44]">
        <div className="text-[#F2E3BC] flex justify-center text-center text-4xl md:text-6xl font-bold pb-16 py-16 lg:py-28">
          Bookings
        </div>

        {/* Booking details rendering */}
        {bookings && bookings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-24">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#F2E3BC] text-[#031D44] p-6 rounded-lg shadow-lg"
              >
                <div className="text-2xl font-bold mb-2">{booking.service}</div>
                <div className="text-lg font-semibold">{booking.place}</div>
                <div className="text-md">{booking.appointmentDate}</div>
                <div className="text-md">{booking.appointmentTime}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-lg text-[#F2E3BC] bg-[#031D44]">
            No bookings found
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
