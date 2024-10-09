import RestaurantCard from "./RestaurantCard"
import resList from '../utils/mockData'
import { useEffect, useState } from "react"
import mockData from "../utils/mockData"
const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
     const [filterList, setfilterList] = useState([]);
     const[serachItem, setSearchItem] = useState('')
    useEffect(()=>{
        fetchDataApi()
    },[])

    const fetchDataApi = async() => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const response = await data.json();
     setListOfRestaurant(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setfilterList(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return(
        <div className="body">
            <div className="filter-d">
                <div className="search">
                    <input type="text" className= "search-box" value={serachItem}
                    onChange={(e)=>{setSearchItem(e.target.value)}}
                    />
                    <button className="btn" onClick={()=>{
                      const fl = listOfRestaurant.filter((item)=>(
                        item.info.name.toLowerCase().includes(serachItem.toLowerCase())
                      ))
                      setfilterList(fl);
                    }} >Search </button>

                </div>
                <button className="filter" onClick={()=>{setfilterList(listOfRestaurant?.filter((item)=> (
                     item?.info?.avgRating > 4 )))}}>Top Rated Restaurants</button>
               
            </div>
            <div className="res-container">
            {filterList?.map((data)=>{
                return(
                    <RestaurantCard resData = {data} key = {data?.info?.id}/>
                )})
            }
            </div>
        </div>
    )
    }


    export default Body