import React,{useState} from 'react';
import "./style.css";

const NutrientTable = ({ nutrients }) => {
    const [nutrientToggle, setNutrientToggle] = useState(true);

    return (
        <div align="center">
            <button
                className="btn btn-light mb-2"
                data-bs-toggle="collapse"
                data-bs-target="#nutrient-table"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => setNutrientToggle(toggle=>!toggle)}
            >
                Nutrients
                <i
                    className={ "ms-2 bi " + (nutrientToggle ? "bi-caret-down-fill" : "bi-caret-up-fill")}
                ></i>
               
            </button>

            <div className="collapse table-responsive-sm" id="nutrient-table">
                <table className="table table-dark table-striped mx-auto mx-5 nutrient-table">
                    <thead>
                        <tr>
                            <th>S.No:</th>
                            <th>Nutrient</th>
                            <th>Label</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   nutrients &&
                            Object.keys(nutrients).map((nutrient, key) => {
                                return (
                                    <tr>
                                        <td>{key+1}</td>
                                        <td>{nutrient}</td>
                                        <td>{nutrients[nutrient].label}</td>
                                        <td>{nutrients[nutrient].quantity.toFixed(3)}</td>
                                        <td>{nutrients[nutrient].unit}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default NutrientTable;