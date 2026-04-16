import Header from "./components/Header";
import Card from "./components/Card";
import Contact from "./components/Contact";
import { FaRocket, FaBolt, FaMobileAlt } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">
          Build a Responsive Landing Page with React
        </h2>
        <p className="text-gray-600 mb-6">
          A simple and modern landing page using reusable React components.
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          Get Started
        </button>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          <Card
            icon={<FaRocket />}
            title="Fast Performance"
            description="Our app loads quickly and works smoothly."
          />
          <Card
            icon={<FaBolt />}
            title="Easy to Use"
            description="Simple layout and clean design for everyone."
          />
          <Card
            icon={<FaMobileAlt />}
            title="Modern Design"
            description="Responsive design that looks great on all devices."
          />
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;