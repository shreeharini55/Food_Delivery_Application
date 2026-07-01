"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { AuthVideoPanel } from "@/components/auth/AuthVideoPanel";
import { Button } from "@/components/auth/Button";
import { Input } from "@/components/auth/Input";
import { Logo } from "@/components/auth/Logo";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { AuthDivider, SocialLogin } from "@/components/auth/SocialLogin";

export default function SignupPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const formData = new URLSearchParams();

    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    try {

      const response = await fetch(
        "http://localhost:8080/Food_Delivery_Application/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const result = await response.text();

      if (result.includes("Signup Successful")) {

        alert("Signup Successful");

        setUsername("");
        setEmail("");
        setPassword("");

        router.push("/login");

      } else {

        alert("Signup Failed");
      }

    } catch (error) {

      console.error(error);
      alert("Signup Failed");
    }
  }

  return (
    <div className="flex min-h-screen">

      <AuthVideoPanel />

      <div className="flex w-full flex-col justify-center bg-white px-8 py-12 sm:px-12 md:w-1/2 lg:px-16 xl:px-24">

        <div className="mx-auto w-full max-w-md">

          <div className="flex justify-center">
            <Logo className="h-32 w-auto" />
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-zinc-900">
              Sign up your account
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Create your account to get started
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <Input
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Input
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <PasswordInput
              placeholder="Password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className="flex cursor-pointer items-center gap-2.5">

              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="h-4 w-4 rounded border-zinc-300 accent-brand"
                required
              />

              <span className="text-sm text-zinc-600">
                Agree terms &amp; conditions
              </span>

            </label>

            <Button type="submit">
              Sign up
            </Button>

          </form>

          <AuthDivider />

          <SocialLogin />

          <p className="mt-8 text-center text-sm text-zinc-500">
            Do you have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}