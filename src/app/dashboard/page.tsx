export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-[200px_1fr_200px] gap-4 p-4 bg-gray-100">
      {/* Header */}
      <div className="col-span-3 bg-white p-4 shadow-md rounded-lg">
        <h6 className="text-6xl text-center font-bold">Dashboard</h6>
      </div>

      {/* Left Sidebar */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Left Sidebar</h2>
        <p>Links, all of the links</p>
      </div>

      {/* Main Content Area with Central Grid for Widgets */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Fancy Chart Here</h2>
          <p>Stuff and content here</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">List of Important Items Here</h2>
          <p>Stuff and content here</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Cool Bullet Points</h2>
          <p>Stuff and content here</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-center">Widget Title</h2>
          <p>Stuff and content here</p>
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
        <h2 className="text-xl font-semibold mb-4 text-center">Right Sidebar</h2>
        <p>Useful buttons that do things here</p>
      </div>
    </div>
  );
}
