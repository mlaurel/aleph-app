import { Import, useDeno } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import Logo from '../components/logo.tsx'
import Nav from '../components/Nav.tsx'

export default function About() {
    return (
        <div className="page">
            <Import from="../style/index.less" />
            <p className="logo"><Logo /></p>
            <h1>About</h1>
            <Nav />
        </div>
    )
}