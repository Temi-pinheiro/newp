import { Gallery } from '../components/Gallery';

export const metadata = {
  title: 'SDQ ADE',
  description: 'Generated by create next app',
};
export default function Home() {
  return (
    <div id='bg' className='h-full w-full bg-[#F8DCE1]'>
      <Gallery />
    </div>
  );
}
