import { useParams } from "react-router-dom";
import { restaurantsData } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

export function Restaurant() {
  const { name } = useParams();
  //   console.log({ name });

  const restaurantIndividualInfo = restaurantsData.find(
    (item) => item.name === name
  );
  //   console.log("restinfo", restaurantIndividualInfo);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlesubmitClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link to="/"> {"<  "}Back to home page </Link>

      <div className="restaurant-info-container">
        
        <div className="review-top">
        <div className="restaurant-info">
          <h1> {restaurantIndividualInfo.name} </h1>
          <p>
            {restaurantIndividualInfo.menu.map((item, index) => {
              console.log(
                "length",
                restaurantIndividualInfo.menu.length,
                "index",
                index
              );
              return (
                <>
                  {item.name}
                  {index < restaurantIndividualInfo.menu.length - 1
                    ? ", "
                    : null}
                </>
              );
            })}
          </p>
          <p> {restaurantIndividualInfo.address} </p>
          <p> {restaurantIndividualInfo.averageRating} </p>
        </div>

        <div className="button-container">
          <button className="review-button" onClick={handlesubmitClick}>
            Write a Review
          </button>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent className="modal-container">
              <ModalHeader>
                {" "}
                <span className="modal-title">
                  {" "}
                  Write a review{" "}
                </span> <hr />{" "}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="review-container">
                  <div className="review-body">
                  
                    <div className="rating">
                      <label htmlFor="rating">
                        Repeat:
                        <select
                          name="rating"
                          id="rating"
                        //   onChange={habitHandler}
                        >
                          <option> Select </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </label>
                    </div>
                   
                    <div className="comment">
                      Comment:
                      <textarea
                        name="bio"
                        placeholder="Enter your review"
                        // value={textEdit.bio}
                        // onChange={textEditHandler}
                      ></textarea>
                    </div>

                    <hr />
                  </div>

                  <hr />
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    // editUserHandler(textEdit);
                    handleCloseModal();
                  }}
                >
                  Save
                </Button>
                {/* <Button variant="ghost">Delete</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        </div>

        <div className="reviews"> 
  {restaurantIndividualInfo.ratings.map((item, index)=> { 
    return(
        <div key={index}>
        {item.revName}
        {item.comment}
        <img src={item.pp} alt="a"/>
        Rating: {item.rating}/5 
        </div>
    );
  })}
        </div>

      </div>
    </>
  );
}
