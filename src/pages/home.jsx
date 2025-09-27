function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6 bg-gradient-to-br from-green-200 via-yellow-100 to-pink-200">
      <h1 className="text-5xl font-bold text-purple-700 drop-shadow-lg">
        Welcome to My Page
      </h1>

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
        Click Me
      </button>

      <div className="flex gap-4">
        <div className="w-16 h-16 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-16 h-16 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-16 h-16 bg-pink-500 rounded-full animate-spin"></div>
      </div>

      <p className="text-lg text-gray-800 underline decoration-pink-600">
        Tailwind CSS makes styling fun!
      </p>
    </div>
  );
}

export default Home;