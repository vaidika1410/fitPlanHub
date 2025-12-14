import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const PlanDetails = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`/plans/view/${id}`, {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : {},
        });

        setPlan(res.data);
      } catch (err) {
        setError("Unable to load plan details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPlan();
    }
  }, [id]);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-semibold mb-1">{plan.title}</h1>
        <p className="text-sm text-gray-500 mb-4">By {plan.trainer}</p>

        {plan.preview ? (
          <>
            <p className="text-gray-600 mb-4">
              Subscribe to unlock full access.
            </p>

            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">₹{plan.price}</span>
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <div className="flex justify-between">
              <span>Duration: {plan.duration}</span>
              <span className="font-bold">₹{plan.price}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanDetails;
