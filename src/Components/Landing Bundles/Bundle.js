import React from 'react'
import Header from '../Header/Header'
import BundlesAbout from './BundlesAbout'
import ContentBundle from './ContentBundle'
import HeadContent from './HeadContent'
import Options from './Options'
import MainFooter from '../Footer/MainFooter'

import './style.scss'
import BundlePromote from './BundlePromote'

function Bundle() {
  return (
    <>
        <Header/>
        <HeadContent/>
        <Options/>
        <ContentBundle/>
        <BundlesAbout/>
        <BundlePromote/>
        <hr/>
        <MainFooter/>
    </>
  )
}

export default Bundle