import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom'
import { Loader } from '../components/UI/Loader'

export const AppLayout = () => {
  const navigation = useNavigation()
  if (navigation.state === 'loading') {
    return <Loader/>
  }
  return (
<>
<Header/>
<Outlet/>
<Footer/>

</>
  )
}


