import { create } from "zustand";
import axios from "axios";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean,
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async (email: string, password: string) => {
    if (!email || !password) {
      set({ isAuthenticated: false });
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        set({ isAuthenticated: true, user: res.data.user });
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/user/auth/logout",
        {},
        { withCredentials: true }
      );

      set({ isAuthenticated: false, user: null });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  },
  fetchUser: async () => {
    try {
        set({isLoading: true})
      const url = "http://localhost:5000/api/user";
      const res = await axios.get(url, { withCredentials: true });
      if (res.data.success) {
        set({
          user: res.data.user,
          isAuthenticated: true,
          isLoading: false
        });
      }
    } catch (error) {
      console.log(error);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));
