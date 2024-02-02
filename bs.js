function showFields() {
    const type = document.getElementById("type").value;
    const batteryCapacityField = document.getElementById("batteryCapacityField");
    const fuelEfficiencyField = document.getElementById("fuelEfficiencyField");

    if (type === "electric") {
        batteryCapacityField.style.display = "block";
        fuelEfficiencyField.style.display = "none";
    } else if (type === "gas") {
        fuelEfficiencyField.style.display = "block";
        batteryCapacityField.style.display = "none";
    }

}
function myFunction() {
    class Car {
        constructor(name, model, year) {
            this.name = name;
            this.model = model;
            this.year = year;
        }


    }

    class ElectricCar extends Car {
        constructor(name, model, year, batteryCapacity) {
            super(name, model, year);
            this.batteryCapacity = batteryCapacity;
        }


    }

    class GasCar extends Car {
        constructor(name, model, year, fuelEfficiency) {
            super(name, model, year);
            this.fuelEfficiency = fuelEfficiency;
        }


    }
    const type = document.getElementById("type").value;
    const name = document.getElementById("type").value;
    const model = document.getElementById("type").value;
    const year = document.getElementById("type").value;
    if (type === 'electric') {
        const batteryCapacity = document.getElementById("type").value;

        const car = new ElectricCar(name, model, year, batteryCapacity);


    } else if (type === 'gas') {
        const fuelEfficiency = document.getElementById("type").value;
        const car = new GasCar(name, model, year, fuelEfficiency);

    }
    // Example object data


    // URL of the backend endpoint
    const backendUrl = 'https://localhost:3000';

    // Fetch options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(car), // Convert objectData to JSON string
    };

    // Send the data to the backend
    fetch(backendUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the backend returns JSON data
        })
        .then(data => {
            console.log('Data received from backend:', data);
            // Handle the response data as needed
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle errors
        });

}



