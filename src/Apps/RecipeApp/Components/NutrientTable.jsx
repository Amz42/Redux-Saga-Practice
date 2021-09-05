import React from 'react';
import "./style.css";

const NutrientTable = ({ nutrients }) => {
    return (
        <div className="table-responsive-sm" id="nutrient-table">
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
    );
}

export default NutrientTable;