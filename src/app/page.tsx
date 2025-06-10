import Link from "next/link";

const Page = () => {
  return (
    <>
      <Link href="/home">
        <button className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded">
          Check user info
        </button>
      </Link>
    </>
  );
};

export default Page;
