import { useEffect } from "react";
import { useSessionStore } from "../stores/sessionStore";

const Dashboard = () => {
  const { data, fetchDashboard, isLoading } = useSessionStore();
  useEffect(() => {
    const fetchData = async () => {
      await fetchDashboard();
    };
    fetchData();
  }, [fetchDashboard]);

  if (isLoading) return "loading...";

  return (
    <div className="px-4 py-2">
      <div className="text-3xl font-semibold my-4 mx-5">All Session</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {data?.map((session, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
              {session.title || "Untitled Session"}
            </h2>

            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Status:</span>{" "}
              {session.status?.toUpperCase() || "DRAFT"}
            </p>

            {session.tags && session.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {session.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 flex justify-between items-center">
              <a
                href={session.json_file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                View JSON
              </a>
 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
