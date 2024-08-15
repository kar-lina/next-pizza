import Image from 'next/image';
import { Router } from 'next/router';

export default function ProductPage({params: {id}}: {params: {id: string}}) {
  return (
   <div>
    <h1>Product Page {id}</h1>
   </div>
  );
}
