export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full">
      <h2 className="text-3xl font-bold">Login</h2>
      <form action="/auth/login" method="post" className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Sign In</button>
        <button formAction="/auth/sign-up">Sign Up</button>
        <button formAction="/auth/logout">Sign Out</button>
      </form>
    </main>
  );
}
