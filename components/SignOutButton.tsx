import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        className="text-primary-500 bg-white px-4 py-2 rounded-md border border-primary-500 flex items-center gap-2 font-bold hover:bg-primary-500/10"
      >
        Sign Out
      </Button>
    </form>
  );
}