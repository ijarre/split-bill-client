export const LoginContainer = () => {
  return (
    <div className="flex  justify-center items-center  md:justify-end md:items-stretch min-h-screen w-screen from-green-30 to-green-40 bg-gradient-to-t ">
      <div className="flex flex-col gap-8 w-4/5 p-6 bg-white/40  rounded-lg max-w-sm justify-center">
        <span className="text-4xl font-extrabold self-center text-gray-800">Login</span>
        <div className="flex flex-col gap-4">
          <input type="text" id="usernameOrEmail" placeholder="Input username or email" className="w-full  px-2 py-1 rounded-md" />
          <input type="password" id="password" placeholder="Input password" className="w-full  px-2 py-1 rounded-md" />
        </div>
        <button className="bg-cream-10 p-2 rounded-md hover:bg-green-40 hover:text-white text-gray-800 ">
          <span className=" font-semibold text-lg ">Log me in</span>
        </button>
      </div>
    </div>
  );
};
