import { useEffect, useState } from 'react'
import Van from "./Van"
import makeServer from "../../server"
import '../../App.css'
import { Link, useSearchParams } from 'react-router-dom'

makeServer()

export default function Vans() {
    const [vans, setVans] = useState()

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get("type"))

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => { 
                setVans(data.vans)
            })
    }, [])

    let vanElms

    if(vans) {
        vanElms = vans.map((van) => {
            return <Van key={van.id} {...van}/>
        })
    }
    
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElms}
            </div>
        </div>
    )
}

