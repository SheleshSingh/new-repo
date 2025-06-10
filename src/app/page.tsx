import { Button } from "@mui/material";
import Link from "next/link";

const Page = () => {
  
  return (
    <>
      <Link href="/home" className="mt-4">
        <Button variant="contained" color="primary" sx={{ margin: 2 }}>
          User create
        </Button>
      </Link>
    </>
  );
};

export default Page;
