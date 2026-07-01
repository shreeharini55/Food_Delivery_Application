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

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    const formData = new URLSearchParams();

    formData.append("email", email);
    formData.append("password", password);

    try {

      const response = await fetch(
        "http://localhost:8080/Food_Delivery_Application/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      if (response.ok) {

        const result = await response.json();

        localStorage.setItem(
          "userId",
          result.userId.toString()
        );

        localStorage.setItem(
          "username",
          result.username
        );

        localStorage.setItem(
          "userEmail",
          result.email
        );

        alert("Login Successful");

        setEmail("");
        setPassword("");

        router.push("/");

      } else {

        const error = await response.json();

        alert(error.message);
      }

    } catch (error) {

      console.error(error);
      alert("Login Failed");
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
              Login to your account
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Welcome back! Login with your credentials
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit">
              Login
            </Button>

          </form>

          <AuthDivider />

          <SocialLogin />

          <p className="mt-8 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-brand hover:underline"
            >
              Create an account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}