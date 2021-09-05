import React from 'react';
import Ingredients from './Ingredients';
import NutrientTable from './NutrientTable';
import "./style.css";

const Modal = ({recipe}) => {
    
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            
            <div className="modal-header">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active" 
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >Ingredients</button>
                        <button
                            className="nav-link" 
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                        >Nutrients</button>
                    </div>
                </nav>


                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="tab-content" id="nav-tabContent">
                {/* Ingredients */}
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="modal-body">
                        
                        <img
                            src={recipe.image}
                            alt={recipe.label}
                            className="mx-3 my-2 float-start rounded modal-image img-fluid"
                        />
                        
                        <h2 className="text-center">{recipe.label}</h2>

                        <hr />

                        <p>
                            {
                                recipe?.dietLabels?.map((item, key) =>
                                    <span key={key} className="mx-1 badge rounded-pill bg-primary">{item}</span>
                                )
                            }
                            
                            {
                                recipe?.healthLabels?.map((item, key) =>
                                    <span key={key} className="mx-1 badge rounded-pill bg-secondary">{item}</span>
                                )
                            }
                        </p>
                    </div>

                    <hr />
                    <div className="modal-body">
                        <Ingredients ingredients={recipe.ingredients} />
                    </div>
                </div>

                {/* Nutrients */}
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div className="modal-body">
                        <h2 className="text-center">{recipe.label}</h2>
                        <hr />
                        <NutrientTable nutrients={recipe.totalNutrients} />
                    </div>
                </div>
            </div>
            
            {/* <div class="modal-footer"></div> */}

          </div>
        </div>
      </div>
    )
}

export default Modal;