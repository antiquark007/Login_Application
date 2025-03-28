const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="text-gray-600">You've successfully logged in.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;