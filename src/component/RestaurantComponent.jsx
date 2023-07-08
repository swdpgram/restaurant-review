import { Link } from "react-router-dom";

export function RestaurantComponent({
  address,
  averageRating,
  cuisine_id,
  description,
  id,
  menu,
  name,
  phone,
  ratings,
}) {
  return (
    <div className="restaurant-container">
      <h2> Dishes by {name} </h2>
      <div className="menu-items">
        {menu.map((menuitem) => {
          return (
            <>
              <Link to={"/restaurant/"+name}> 
              
              <div className="card-cont">
                <div className="card-img">
                  <img src={menuitem.imgSrc} alt="testimg" />
                </div>

                <div className="card-details">
                  <b> {menuitem.name} </b>
                  <b>
                    Rs.{menuitem.price} for {menuitem.qty}
                  </b>
                  <p> {name} </p>
                  
                </div>
              </div>

              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
