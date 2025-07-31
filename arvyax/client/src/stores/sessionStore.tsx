import axios from "axios";
import { create } from "zustand";

type sessionData = {
  title?: string;
  tags?: string[];
  json_file_url?: string;
  status?: string;
};

type SessionStore = {
  data: sessionData[] | null;
  isLoading: boolean;
  fetchDashboard: () => Promise<void>;
  createSession: (sessionData: sessionData) => Promise<void>;
};

export const useSessionStore = create<SessionStore>((set) => ({
  data: [],
  isLoading: true,
  fetchDashboard: async () => {
    try {
      set({ isLoading: true });

      const res = await axios.get(
        "http://localhost:5000/api/session/my-session",
        { withCredentials: true }
      );
      if (res.data.success) {
        set({ isLoading: false, data: res.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  },
  createSession: async (sessionData: sessionData) => {
    set({ isLoading: true });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/session",
        sessionData,
        { withCredentials: true }
      );
      console.log(res);
      if (res.data.success) {
        set((state) => ({
          isLoading: false,
          data: state.data ? [...state.data, res.data.data] : [res.data.data],
        }));
      } else {
        set({ isLoading: false }); // ✅ ensure you reset even if success=false
      }
    } catch (error) {
      console.log(error);
      set({ isLoading: false, data: null });
    }
  },
}));
