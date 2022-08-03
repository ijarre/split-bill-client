import { ChangeEventHandler, useState } from "react";
import { Spinner } from "../../components";

interface Forms {
  usernameOrEmail: string;
  password: string;
}

export const LoginContainer = () => {
  const [forms, setForms] = useState<Record<keyof Forms, string>>({ usernameOrEmail: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForms({ ...forms, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex  justify-center items-center  md:justify-end md:items-stretch min-h-screen w-screen from-green-30 to-green-40 bg-gradient-to-t ">
      <div className="flex flex-col gap-8 w-4/5 p-6 bg-white/80  rounded-lg max-w-sm justify-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-6xl font-bold  text-gray-900 tracking-wide">Login</span>
          <span className="text-sm text-gray-700">let us know who you are</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="">
            <label htmlFor="usernameOrEmail" className={`${forms.usernameOrEmail === "" && "invisible "} text-sm text-gray-600 font-thin`}>
              Username or email
            </label>
            <input type="text" id="usernameOrEmail" placeholder="Input username or email" value={forms.usernameOrEmail} onChange={handleFormChange} className="w-full  px-2 py-1 border-2 border-green-40 rounded-md" />
          </div>

          <div className="">
            <label htmlFor="password" className={`${forms.password === "" && "invisible "} text-sm text-gray-600 font-thin`}>
              password
            </label>
            <input type="password" id="password" placeholder="Input password" className="w-full  px-2 py-1 border-2 border-green-40 rounded-md" value={forms.password} onChange={handleFormChange} />
          </div>
        </div>
        <button
          className={` flex ${
            !isLoading && "justify-center"
          } bg-cream-10 p-2 rounded-md enabled:hover:bg-green-40 enabled:hover:text-white text-gray-800  border-2 border-green-40 enabled:hover:border-cream-10 active:bg-green-40/75  disabled:cursor-not-allowed disabled:bg-green-40/75 disabled:text-white `}
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          <span className={` font-semibold text-lg ${isLoading && "m-auto -translate-x-5"} `}>{isLoading ? "Logging in" : "Log me in"}</span>
        </button>
      </div>
    </div>
  );
};
