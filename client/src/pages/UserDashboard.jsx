import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTrainers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("/trainers/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTrainers(res.data);
      } catch (err) {
        console.error("Failed to load trainers", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTrainers();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Explore Trainers</h1>
        <Link
          to="/feed"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          My Subscriptions
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div
            key={trainer._id}
            className="bg-white border rounded-2xl p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-3">
              {trainer.name}
            </h2>

            <div className="space-y-3">
              {trainer.plans.map((plan) => (
                <div
                  key={plan._id}
                  className="border rounded-lg p-3 flex justify-between"
                >
                  <div>
                    <p className="font-medium">{plan.title}</p>
                    <p className="text-sm text-gray-500">
                      ₹{plan.price} • {plan.duration}
                    </p>
                  </div>

                  <Link
                    to={`/plans/${plan._id}`}
                    className="text-black text-sm font-medium"
                  >
                    View
                  </Link>
                </div>
              ))}

              {trainer.plans.length === 0 && (
                <p className="text-sm text-gray-400">
                  No plans yet
                </p>
              )}
            </div>

            <button className="mt-4 w-full border border-black py-2 rounded-lg hover:bg-black hover:text-white transition">
              Follow Trainer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
