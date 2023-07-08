import { useParams } from "react-router-dom";
import { restaurantsData } from "../data";
import { Link } from "react-router-dom";
import {useState} from "react";

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

          <button className="review-button"
           onClick={handlesubmitClick}
          >
            Write a Review
          </button>

     <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write a review </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="review-container">
              <div className="gravatar-body">
                <div>
                  <p> Change your Gravatar </p> // title
                </div>

                <div className="gravatar-container">
     
                  <img
                    src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_6.jpg"
                    alt="gravatar_1"
                    name="gr_5"
                    className="gravatar-icon"
                    onClick={() =>
                      avatarHandler(
                        "https://res.cloudinary.com/djhnar3ju/image/upload/v1688106576/Gravatar/Gravatar_6.jpg"
                      )
                    }
                  />

                  <img
                    src="https://res.cloudinary.com/djhnar3ju/image/upload/v1688107497/Gravatar/Gravatar_1.jpg"
                    alt="gravatar_1"
                    name="gr_6"
                    className="gravatar-icon"
                    onClick={() =>
                      avatarHandler(
                        "https://res.cloudinary.com/djhnar3ju/image/upload/v1688107497/Gravatar/Gravatar_1.jpg"
                      )
                    }
                  />
                </div>

                <hr />

                {/* <div className="current-gravatar">
                  <p> Your gravatar </p>
                  <img
                    src={textEdit.profileimage}
                    alt="gravatar_1"
                    className="gravatar-icon"
                  />
                </div> */}
              </div>

              <hr />

              <p>
                Name: 
              </p>
              <hr />
              <p> Username: </p>
              <hr />
              <br />
              <p> Bio </p>
              <textarea
                name="bio"
                // value={textEdit.bio}
                // onChange={textEditHandler}
              >
                Hello
              </textarea>

              <hr />
              <br />
              <p> Link ( eg. https://www.example.com ) </p>
              {/* <textarea
                name="link"
                // value={textEdit.link}
                // onChange={textEditHandler}
              >
                {currentUser.link}
              </textarea> */}
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
    </>
  );
}
