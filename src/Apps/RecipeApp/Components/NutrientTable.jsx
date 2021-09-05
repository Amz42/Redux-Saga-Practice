import React from 'react';
import "./style.css";

const NutrientTable = ({ nutrients }) => {
    return (
        <div className="table-responsive" id="nutrient-table">
            <table className="table table-dark table-striped table-fixed">
                <thead>
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-3">Nutrient</th>
                        <th className="col-4">Label</th>
                        <th className="col-3">Quantity</th>
                        <th className="col-1">Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {   nutrients &&
                        Object.keys(nutrients).map((nutrient, key) => {
                            return (
                                <tr key={key}>
                                    <th className="col-1">{key+1}</th>
                                    <td className="col-3">{nutrient}</td>
                                    <td className="col-4">{nutrients[nutrient].label}</td>
                                    <td className="col-3">{nutrients[nutrient].quantity.toFixed(3)}</td>
                                    <td className="col-1">{nutrients[nutrient].unit}</td>
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