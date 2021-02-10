import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: `purple`, fontSize: `72px` }}>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby" />
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
}