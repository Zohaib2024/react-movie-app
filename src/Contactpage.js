const Contactpage = () => {
  return (
    <div className="h-full bg-black p-8">
      <div className="flex flex-col md:flex-row justify-center items-start w-full mt-8 gap-8">
        <div className="flex flex-col w-full md:w-1/2 gap-4 text-white">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />

          <label htmlFor="description" className="text-lg font-medium mt-4">
            Description
          </label>
          <textarea
            id="description"
            rows={6}
            placeholder="Write your message..."
            className="p-3 rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Send
          </button>
          <button
            type="button"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
