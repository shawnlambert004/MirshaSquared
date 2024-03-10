import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Next"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNcVSBegwkWcXfjeSuyrnLtpqfrAG1BERxTAJKbN8V667/0.png.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Aleph Zero',
  description: 'idrc',
  openGraph: {
    title: 'Aleph Zero',
    description: 'IDRC',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNcVSBegwkWcXfjeSuyrnLtpqfrAG1BERxTAJKbN8V667/0.png.png`],
  },
};



export default function Page() {
  return (
    <>
      <h1>Mirsha Promotions</h1>
    </>
  );
}
