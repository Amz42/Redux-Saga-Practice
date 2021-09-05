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
              <h5 className="modal-title" id="exampleModalLabel">{recipe.label}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
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
                            <span key={key} class="mx-1 badge rounded-pill bg-primary">{item}</span>
                        )
                    }
                    
                    {
                        recipe?.healthLabels?.map((item, key) =>
                            <span key={key} class="mx-1 badge rounded-pill bg-secondary">{item}</span>
                        )
                    }
                </p>
            </div>

            <hr />

            <div className="modal-body">
                {/* Ingredients */}
                <Ingredients ingredients={recipe.ingredients} />
                <NutrientTable nutrients={recipe.totalNutrients} />
            </div>
            
            {/* <div class="modal-footer"></div> */}

          </div>
        </div>
      </div>
    )
}

export default Modal;