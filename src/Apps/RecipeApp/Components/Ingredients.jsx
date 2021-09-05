import React from 'react'

const Ingredients = ({ ingredients }) => {
    return (
        <div className="container"> 
        <div className="row mx-auto">
            {
                ingredients?.map((item, key) => {
                    return (
                        <div className="col my-2 mx-auto">
                            <img
                                src={item.image}
                                alt={item.text}
                                style={{
                                    minWidth: "inherit",
                                    maxWidth: "120px"
                                }}
                                className="rounded mx-auto"
                            />
                        </div>
                    );
                })
            }
        </div>
        </div>
    )
}

export default Ingredients;