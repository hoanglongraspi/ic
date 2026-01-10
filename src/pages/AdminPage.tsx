import { useState, useEffect } from "react";
import { Trash2, Plus, LogOut, Bell } from "lucide-react";
import {
  addAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
} from "../lib/firebase";
import type { Announcement } from "../lib/firebase";

// Admin credentials
const ADMIN_USERNAME = "icibmadmin2026";
const ADMIN_PASSWORD = "icibm26@buf";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Check if already logged in (session storage)
  useEffect(() => {
    const session = sessionStorage.getItem("icibm_admin_session");
    if (session === "authenticated") {
      setIsLoggedIn(true);
    }
  }, []);

  // Load announcements when logged in
  useEffect(() => {
    if (isLoggedIn) {
      loadAnnouncements();
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      sessionStorage.setItem("icibm_admin_session", "authenticated");
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("icibm_admin_session");
    setUsername("");
    setPassword("");
  };

  const loadAnnouncements = async () => {
    try {
      const data = await getAnnouncements();
      setAnnouncements(data);
    } catch (error) {
      console.error("Error loading announcements:", error);
      setMessage({
        type: "error",
        text: "Failed to load announcements. Make sure Firestore is enabled.",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setMessage({ type: "error", text: "Please fill in all fields" });
      return;
    }

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await addAnnouncement(title, content);
      setMessage({ type: "success", text: "Announcement published!" });
      setTitle("");
      setContent("");
      await loadAnnouncements();
    } catch (error) {
      console.error("Error adding announcement:", error);
      setMessage({
        type: "error",
        text: "Failed to publish announcement. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return;

    try {
      await deleteAnnouncement(id);
      setMessage({ type: "success", text: "Announcement deleted" });
      await loadAnnouncements();
    } catch (error) {
      console.error("Error deleting announcement:", error);
      setMessage({ type: "error", text: "Failed to delete announcement" });
    }
  };

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#005bbb] rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
            <p className="text-gray-600 mt-2">ICIBM 2026 Announcement System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005bbb] focus:border-transparent outline-none transition-all"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005bbb] focus:border-transparent outline-none transition-all"
                placeholder="Enter password"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#005bbb] text-white py-3 rounded-lg font-semibold hover:bg-[#003d7a] transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-[80vh] bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Announcement Dashboard
            </h1>
            <p className="text-gray-600">Manage ICIBM 2026 announcements</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Message Display */}
        {message.text && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* New Announcement Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#005bbb]" />
            Push New Announcement
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005bbb] focus:border-transparent outline-none transition-all"
                placeholder="Announcement title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005bbb] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your announcement here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto px-8 py-3 bg-[#005bbb] text-white font-semibold rounded-lg hover:bg-[#003d7a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                  Publishing...
                </>
              ) : (
                <>
                  <Bell className="w-5 h-5" />
                  Publish Announcement
                </>
              )}
            </button>
          </form>
        </div>

        {/* Existing Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Active Announcements ({announcements.length})
          </h2>

          {announcements.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Bell className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No announcements yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {announcement.content}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {announcement.createdAt?.toDate().toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        announcement.id && handleDelete(announcement.id)
                      }
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete announcement"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
