import { signIn } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        type="submit"
        className="text-primary-500 bg-white px-4 py-2 rounded-md border border-primary-500 flex items-center gap-2 font-bold hover:bg-primary-500/10"
      >
        <Suspense fallback={<Button>Loading...</Button>}>
          <Image src="/google-logo.png" alt="Google" width={20} height={20} />
          Login
        </Suspense>
      </Button>
    </form>
  );
}
