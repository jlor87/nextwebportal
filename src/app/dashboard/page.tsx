"use client";
import { useRouter } from "next/navigation";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import LineGraph from "@/components/LineGraph";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

export default function Home() {
  const router = useRouter();

  type SalesData = {
    'Order No.': number;
    Customer: string;
    Product: string;
    Quantity: number;
    Cost: number;
    'Total Sale': number;
  };
  const fakeSalesDataInput = [
    {
    'Order No.': 1,
    'Customer': 'Bob',
    'Product': 'Bobby Pins',
    'Quantity': 5000,
    'Cost': 2,
    'Total Sale': 2
    },
    {
      'Order No.': 2,
      'Customer': 'Joe',
      'Product': 'Sloppy Joes',
      'Quantity': 2,
      'Cost': 200,
      'Total Sale': 400
      },
    ];
  const [fakeSalesData, setFakeSalesData] = useState<SalesData[] | null>(null)

  useEffect(() =>{
    setFakeSalesData(fakeSalesDataInput);
  }, []);

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

        <div className="flex flex-col items-center  p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">David Salesman</h2>
          <div className="justify-center">
            <Image 
              src="/salesman.jpg"
              alt="David Salesman"
              width={200}
              height={200}
              className="rounded-full"
            />  
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Pie Chart About Something</h2>
          <PieChart />
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">A Line Graph</h2>
          <LineGraph />
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">To-Do Bullet Points</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'black' }}>
            <li>Make more money</li>
            <li>Make even more money</li>
            <li>Make so much money that it makes you start to question your life philosophy</li>  
          </ul>
        </div>

        <div className="col-span-2 p-4 bg-white rounded-lg shadow-md overflow-x-auto"> 
          <h2 className="text-xl font-semibold mb-2 text-center">Recent Sales</h2>
            <table>
              <thead>
                <tr className="bg-blue-200">
                  <th className="text-center pl-2 pr-2">Order No.</th>
                  <th className="text-center pl-2 pr-2">Customer</th>
                  <th className="text-center pl-2 pr-2">Product</th>
                  <th className="text-center pl-2 pr-2">Quantity</th>
                  <th className="text-center pl-2 pr-2">Cost</th>
                  <th className="text-center pl-2 pr-2">Total Sale</th>
                </tr>
              </thead>

              <tbody>
                {fakeSalesData && fakeSalesData.map((item:SalesData) =>
                <tr className="bg-blue-100" key={item['Order No.']}>
                  <td className="text-center pl-2 pr-2">{item['Order No.']}</td>
                  <td className="text-center pl-2 pr-2">{item['Customer']}</td>
                  <td className="text-center pl-2 pr-2">{item['Product']}</td>
                  <td className="text-center pl-2 pr-2">{item['Quantity']}</td>
                  <td className="text-center pl-2 pr-2">${item['Cost']}</td>
                  <td className="text-center pl-2 pr-2">${item['Total Sale']}</td>
                </tr>)
                }
              </tbody>
            </table>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">A Calendar</h2>
          <Calendar />
        </div>

      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center item-center">Right Sidebar (Buttons)</h2>
        <button onClick={performLogout} className="justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 h-10">
          Logout
        </button>
      </div>
    </div>
  );
}
