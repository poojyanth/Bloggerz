'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import { set } from 'mongoose'

const nav = () => {

    const {data: session, status} = useSession()
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
  
    useEffect(() => {
      (async () => {
        const res = await getProviders();
        setProviders(res);
      })();
    }, []);

    // useEffect(() => {
    // const setProviders = async () => {
    // const response = await getproviders();
    // setProviders ( response) ;
    // }   setproviders();
    // }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' width={30} height={30} alt='Bloggerz Logo' className='object-contain'/>
            <p className='logo_text'>Bloggerz</p>
        </Link>

        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>
                        Create Post
                    </Link>

                    <button type='button' className='outline_btn' onClick={{signOut}}>
                        Logout
                    </button>

                    <Link href='/profile'>
                        <Image src={session?.user.image} width={30} height={30} alt='Profile' />
                        
                    </Link>
                </div>
            ) : (
                <>
                {
                    providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={() => signIn(provider.id)}
                        className='black_btn'>
                            Sign In
                        </button>
                    ))
                }
                </>
            )}
        </div>

        <div className='sm:hidden flex relative'>
            {
                session?.user ? (
                    <div className='flex'>
                        <Image className='rounded-full' 
                        src={session?.user.image} width={30} height={30} alt='Profile' 
                        onClick={() => setToggleDropdown(
                            (prevState) => (!prevState)
                        )}/>
                        {
                            toggleDropdown && (
                                <div className='dropdown'>
                                    <Link href='/profile' 
                                        className='dropdown_link'
                                        onClick={ () => setToggleDropdown(false)}>
                                        Profile
                                    </Link>
                                    <Link href='/create-prompt' 
                                        className='dropdown_link'
                                        onClick={ () => setToggleDropdown(false)}>
                                        Create Prompt
                                    </Link>
                                    <button type='button' onClick={() => {
                                        setToggleDropdown(false)
                                        signOut()
                                        }}
                                        className='mt-5 w-full black_btn'>
                                        Logout
                                    </button>            
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <>
                {
                    providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={() => signIn(provider.id)}
                        className='black_btn'>
                            Sign In
                        </button>
                    ))
                }
                </>
                )

            }
        </div>

    </nav>
  )
}

export default nav