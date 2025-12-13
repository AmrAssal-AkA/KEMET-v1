import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import React from "react";

function ErrorPage() {
  const router = useRouter();

  return (
    <div className="mt-45 p-10 items-center justify-center flex flex-col gap-6">
      <h1 className="text-5xl font-bold  text-amber-700">An Error Occurred</h1>
      <p className=" mt-4 text-xl">Sorry looks like something went wrong.</p>
      <Button onClick={() => router.push("/")}>Go Back to home</Button>
    </div>
  );
}

export default ErrorPage;
