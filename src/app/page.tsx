"use client"

import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => { 
      toast.success("Background job invoked");
    }
  }));
  
  return (
    <>
      <div className="p-4 max-w-md mx-auto">
        <button onClick={() => invoke.mutate({text: "Akshit"}) } type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Invoke Background Job
        </button>
      </div>
    </>
  );
};

export default Page;
