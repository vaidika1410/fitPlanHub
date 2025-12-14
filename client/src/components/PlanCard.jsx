import { Link } from "react-router-dom";

export default function PlanCard({ plan }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition">
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800">
          {plan.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          By {plan.trainer?.name || "Trainer"}
        </p>

        <p className="text-xl font-bold text-indigo-600 mt-4">
          ₹{plan.price}
        </p>

        <Link
          to={`/plans/${plan._id}`}
          className="inline-block mt-5 w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
