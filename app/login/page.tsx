export default function Login() {
  const Login = async (FormData: any) => {
    "use server";
    console.log(FormData.get("username"));
  };

  return (
    <>
      <div className="h-screen -mt-16 text-center align-center justify-center grid grid-row-2">
        <div></div>
        <div className="">
          <form action={Login} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="input input-primary"
              name="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-primary"
              name="password"
            />
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
