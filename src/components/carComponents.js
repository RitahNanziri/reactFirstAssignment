import React from "react";

class Car extends React.Component {
    render() {
        const cars = [
            { brand: 'Toyota', model: 'Corolla', year: 2022 },
            { brand: 'Honda', model: 'Civic', year: 2023 },
            { brand: 'Ford', model: 'Mustang', year: 2021 }
        ];

        return (
            <div className="Car">
                <h1>List of Cars</h1>
                <ul>
                    {cars.map((car, index) => (
                        <li key={index}>
                            {car.brand} {car.model} ({car.year})
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Car;
