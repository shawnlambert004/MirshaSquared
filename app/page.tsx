import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNcVSBegwkWcXfjeSuyrnLtpqfrAG1BERxTAJKbN8V667/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Mirsha Promotions',
  description: 'idc',
  openGraph: {
    title: 'Mirsha Promotions',
    description: 'idgas',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNcVSBegwkWcXfjeSuyrnLtpqfrAG1BERxTAJKbN8V667/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Mirsha Promotions</h1>
    </>
  );
}