import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../../src/assets/css/api.css";

export default function API() {

    const [crypto, setCrypto] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        Axios
            .get('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD').then((res) => {
            setCrypto(res.data.coins)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filterCoins = crypto.filter((value) => {
        return value.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
        <div className="crypto-app">
            <h1>Search the Crypto</h1>
            <input
                type="text"
                placeholder="Search"
                className="search-box"
                onChange={handleChange}
            />
            <table>
                <thead>
                    <tr>
                    <td>Rank</td>
                    <td>Name</td>
                    <td>Symbol</td>
                    <td>Market Cap</td>
                    <td>Price</td>
                    <td>Available Supply</td>
                    <td>Volume(24hrs)</td>
                    </tr>
                </thead>
                <tbody>
                {filterCoins.map((val, id) => {
                    return (
                        <tr key={id}>
                            <td className="rank">{val.rank}</td>
                            <td className="logo">
                                <a href={val.websiteUrl}>
                                    <img src={val.icon} alt="logo" width="30px" />
                                </a>
                                <p>{val.name}</p>
                            </td>
                            <td className="symbol">{val.symbol}</td>
                            <td className='marketCap'>${val.marketCap.toLocaleString()}</td>
                            <td className="price">${val.price.toLocaleString()}</td>
                            <td className="supply">{val.availableSupply.toLocaleString()}</td>
                            <td className="volume">{val.volume.toLocaleString()}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </>
    )
}