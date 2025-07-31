import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSessionStore } from "../stores/sessionStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateSessionForm = () => {
  const { createSession, fetchDashboard } = useSessionStore()
  const navigate = useNavigate()

  const [sessionForm, setSessionForm] = useState({
    title: "",
    tags: "",
    json_file_url: "",
    status: "draft",
  });

  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSessionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const {title, status, json_file_url, tags} = sessionForm
    if(!title || ! status || !json_file_url || !tags) {
      console.log("Give proper fields")
    }

    const input = {
      ...sessionForm,
      tags: sessionForm.tags.split(",").map((item) => item.trim()).filter(Boolean)
    }

    try {
      await createSession(input)
      await fetchDashboard()
      navigate("/dashboard")
      console.log("New Session created")
      toast.success("New Sesseion Created")
    } catch (error) {
      toast.error("New Sesseion Created")
      console.log(error, "in MySession component")
    }

    console.log(sessionForm);
  };
 

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 mt-4 border rounded-xl shadow-md bg-white max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold">Create New Session</h2>

      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          onChange={onChangeValue}
          value={sessionForm.title}
          name="title"
          className="w-full border p-2 rounded-md"
          placeholder="Yoga and Meditation"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Tags (comma separated)
        </label>
        <input
          type="text"
          name="tags"
          onChange={onChangeValue}
          value={sessionForm.tags}
          className="w-full border p-2 rounded-md"
          placeholder="health, body, exercise"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">JSON File URL</label>
        <input
          type="text"
          name="json_file_url"
          onChange={onChangeValue}
          value={sessionForm.json_file_url}
          className="w-full border p-2 rounded-md"
          placeholder="https://yoga.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          className="w-full border p-2 rounded-md"
          value={sessionForm.title}
          onChange={onChangeValue}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
      >
        Create Session
      </button>
    </form>
  );
};

export default CreateSessionForm;
