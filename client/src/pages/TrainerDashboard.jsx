import { useEffect, useState } from "react";
import axios from "../api/axios";

const TrainerDashboard = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const token = localStorage.getItem("token");

  // Fetch trainer plans
  const fetchPlans = async () => {
    try {
      const res = await axios.get("/plans/mine", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlans(res.data);
    } catch (err) {
      console.error("Failed to load plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  // Create new plan
  const handleCreatePlan = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/plans",
        { title, description, price, duration },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      setPrice("");
      setDuration("");
      fetchPlans();
    } catch (err) {
      console.error("Failed to create plan");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800">
          Trainer Dashboard
        </h1>

        {/* Create Plan */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Plan</h2>

          <form onSubmit={handleCreatePlan} className="grid gap-4">
            <input
              className="border rounded-lg p-3"
              placeholder="Plan Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              className="border rounded-lg p-3"
              placeholder="Plan Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                className="border rounded-lg p-3"
                placeholder="Price (₹)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <input
                className="border rounded-lg p-3"
                placeholder="Duration (e.g. 30 days)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Create Plan
            </button>
          </form>
        </div>

        {/* My Plans */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">My Plans</h2>

          {loading ? (
            <p className="text-gray-500">Loading plans...</p>
          ) : plans.length === 0 ? (
            <p className="text-gray-500">No plans created yet.</p>
          ) : (
            <div className="grid gap-4">
              {plans.map((plan) => (
                <div
                  key={plan._id}
                  className="border rounded-xl p-4 flex flex-col gap-2"
                >
                  <h3 className="text-lg font-semibold">{plan.title}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>

                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Duration: {plan.duration}</span>
                    <span className="font-semibold">₹{plan.price}</span>
                  </div>

                  {/* Placeholder for subscribers */}
                  <div className="mt-3 text-sm text-gray-500">
                    Subscribers: {plan.subscribers?.length || 0}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TrainerDashboard;
