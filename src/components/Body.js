
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import ShimmerUi from "./ShimmerUi";

function filterData(searchText, restaurants) {
    const data = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText))
    return data;
}


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    console.log('initial render');

    // avoid rendering component (early return)
    if (!allRestaurants) return null;
    // if (filterRestaurants?.length === 0) return <h1>No Restaurant match your filter!</h1>

    return (allRestaurants.length === 0) ? <ShimmerUi /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button
                    className="search-btn"
                    onClick={() => {
                        // need to filter data
                        const data = filterData(searchText, allRestaurants)
                        // update the state - restaurants
                        setFilterRestaurants(data)
                    }}
                >
                    Search
                </button>
            </div>

            <div className="restaurant-list">
                {
                    filterRestaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;