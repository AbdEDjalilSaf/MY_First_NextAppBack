import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Form } from "@/components/ui/form"
import  LogIn  from "@/components/forms/registerLogIn";
// import { Moon,Sun } from "lucide-react";

export default function Home() {
  return (
    <>
    
    {/* <main className="grid place-items-center  my-24">
    <Button size='lg' variant="outline">Click here</Button>
    </main> */}
{/* <Sun className="rotate-0 h-6 w-6 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
<Moon className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-90" /> */}

{/* <LogIn /> */}
<div className="flex flex-col">
<Label htmlFor="email">Your email address</Label>
</div>
{/* <Form /> */}
    </>
  );
}
