"use client";
import { useRouter } from "next/navigation";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  const router = useRouter();

  const performLogout = () => {
    // Clear any authentication tokens or session data if needed
    // e.g., localStorage.removeItem('token');

    // Redirect to the login page
    router.push('/');
  };

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-[200px_1fr_200px] gap-4 p-4 bg-gray-100">
      {/* Header */}
      <div className="col-span-3 bg-white p-4 shadow-md rounded-lg">
        <h6 className="text-6xl text-center font-bold">Dashboard</h6>
      </div>

      {/* Left Sidebar */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Left Sidebar (Links)</h2>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ecs-online.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ECS
        </a>
      </div>

      {/* Main Content Area with Central Grid for Widgets */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Sample Sales Chart</h2>
          <BarChart />
        </div>

        <div className="grid p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Big Important Number</h2>
          <p className="text-5xl font-bold text-center text-green-500">197%</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">To-Do Bullet Points</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'black' }}>
            <li>Make more money</li>
            <li>Make even more money</li>
            <li>Make so much money that it makes you start to question your life philosophy</li>  
          </ul>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Pie Chart About Something</h2>
          <PieChart />
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Another Widget Title</h2>
          <p>Stuff and content here</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Insert Yet Another Widget Title</h2>
          <p>Stuff and content here</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Right Sidebar (Buttons)</h2>
        <button onClick={performLogout} className="hover:underline">
          Logout
        </button>
      </div>
    </div>
  );
}
