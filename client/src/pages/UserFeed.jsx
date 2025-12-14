import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const UserFeed = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("/feed", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPlans(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading feed...</div>;
  }

  if (plans.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        You are not following any trainers yet.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Feed
      </h1>

      <div className="space-y-4 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white border rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {plan.title}
              </h2>
              <p className="text-sm text-gray-500">
                By {plan.trainer}
              </p>
              <p className="text-sm text-gray-600">
                ₹{plan.price} • {plan.duration}
              </p>
            </div>

            <Link
              to={`/plans/${plan._id}`}
              className="text-sm font-medium text-black hover:underline"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeed;
