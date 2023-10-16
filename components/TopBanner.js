import React, { useEffect, useState } from 'react'
//import server from "../configuration/Constants.json"
//import axios from 'axios'
import Image from 'next/image'
import styles from "./TopBanner.module.css"
import * as axios from '@/repository/AxiosRepository'


const TopBanner = () => {
    const [topBanner, setTopBanner] = useState({})

    useEffect(() => {
        //axios.get(`${server.SERVER_ADDRESS}topBanner`)
        axios.GET('topBanner')
            .then(response => {
                setTopBanner(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])


    return (
        <div style={{height: 70}}>
            <Image className={`${styles.bannerImage}`} src={topBanner.imageUrl} fill alt='top banner'/>
        </div>
    )
}

export default TopBanner