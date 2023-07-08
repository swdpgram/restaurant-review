import "../App.css"
import { useCuisine } from "../context/cuisine-context";
import { cuisineData } from "../data"
import { RestaurantComponent } from "../component/RestaurantComponent";

export function Home() {
    
 const { cuisineHandler, restaurantCuisineData, setRestaurantCuisineData } = useCuisine();

    return(
        <>
        <h1 className="center"> Food Ordering App </h1>

        <div className="cuisinebutton-container">

        <p> Select your Cuisine: </p>    
        <div>
        { 
        cuisineData.map((item)=> { 
            return(
                <button 
                key={item.id} 
                className="cuisine-button"
                onClick={()=> cuisineHandler(item.id, item.name)}
                >
                    {item.name}
                    </button>
            ); 
        })
        }

        </div>

     
        </div> 

        <div>
        { 
        restaurantCuisineData?.map((item, index) => { 
            return(
                <div key={item.id}>
                <RestaurantComponent {...item} />
                </div>
            );
        })
        }    
        </div>
            
        </>
    );
}