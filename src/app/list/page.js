import Link from "next/link";
import React from "react";

const ListPage = () => {
  return (
    <div className="p-10">
      <Link href="/list/pihu">1. Pihu</Link>
      <Link href="/list/pari">2. Pari</Link>
      <h1>3. Payal</h1>
      <h1>4. Rani</h1>
    </div>
  );
};

export default ListPage;
