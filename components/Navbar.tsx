import SVGInline from 'react-svg-inline'
import Image from 'next/image';
import {useState, useEffect} from 'react'
import { createAvatar } from '@dicebear/avatars';
import {useSession, signIn, signOut} from 'next-auth/react';
import * as style from '@dicebear/micah';

function Avatar({user}) {
  return (
    <Image className="mt-2 rounded-full" src={user?.image} height={40} width={40} />
  );
}

export default function Navbar() {
  const [svg, setSvg] = useState<string>('');
  const {data: session} = useSession();

  useEffect(() => {
    if(!session) {
      let svg = createAvatar(style, {
        seed: `custom-seed-${Math.random()}`,
        size: 40
      });
      setSvg(svg);
    }
  }, []);

  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center justify-around w-1/2">
        <img className="mb-2" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="logo" />
        <a href="https://www.hotstarext.com/">Popular</a>
        <a href="https://www.hotstarext.com/about">Stream</a>
        <a href="https://www.hotstarext.com/contact">Kids</a>
        <a href="https://www.hotstarext.com/contact">Movies</a>
        <a href="https://www.hotstarext.com/contact">TV</a>
      </div>
        <div className="flex mx-6">
          <input placeholder="..." className="px-1 mr-6 text-gray-200 bg-gray-800 rounded outline-none" />
          {session ? <Avatar user={session.user}/> : <SVGInline svg={svg} /> }
        </div>
      </div>
  );
}

