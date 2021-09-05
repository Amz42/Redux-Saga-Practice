import React from 'react'

const Ingredients = ({ ingredients }) => {
    return (
        <div className="container"> 
        <div className="row mx-auto">
            {
                ingredients?.map((item, key) => {
                    return (
                        <div className="col my-2 mx-auto post-thumb" key={key}>
                            <img
                                src={item.image}
                                alt={item.text}
                                style={{
                                    minWidth: "120px",
                                    maxWidth: "120px"
                                }}
                                className="rounded mx-auto"
                            />
                            <div className="post-hover text-center">
                                <div className="inside">
                                    <p 
                                        className="img-desc"
                                        style={{
                                            minWidth: "120px",
                                            maxWidth: "120px"
                                        }}> {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        </div>
    )
}

export default Ingredients;