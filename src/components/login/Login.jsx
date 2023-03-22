import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
export default function Login() {
  async function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="relative top-[200px]">
      <h1 className="text-center mb-4"> Admin Login</h1>
      <div className="flex justify-center ">
        <form onSubmit={submitHandler}>
          <div class="mb-3">
            <label>Username: </label>
            <input type="email" />
          </div>
          <div class="mb-3">
            <label>Password: </label>
            <input type="password" />
          </div>

          <button
            type="submit"
            class=" p-2 text-center text-black  mr-2 hover:opacity-80 dark:shadow-gray-900"
            onClick={() => signIn()}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
