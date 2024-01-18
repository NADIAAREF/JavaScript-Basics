
const Vehicle = {
  Car: {
    models: [
      {
        name: "Swift",
        model: 2022,
        weight: 1500,
        color: "Red",
        technologyUsed: function () {
          console.log("Advanced Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "BMW",
        model: 2022,
        weight: 1500,
        color: "Red",
        technologyUsed: function () {
          console.log("Advanced Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Farrari",
        model: 2022,
        weight: 1500,
        color: "Red",
        technologyUsed: function () {
          console.log("Advanced Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },

    ],
    start: function () {
      console.log("Car starting...");
    },
    drive: function () {
      console.log("Car is being driven...");
    },
    brake: function () {
      console.log("Applying brakes...");
    },
    stop: function () {
      console.log("Car stopped.");
    }
  },

  Truck: {
    models: [
      {
        name: "TruckModel1",
        model: 2022,
        weight: 5000,
        color: "Blue",
        technologyUsed: function () {
          console.log("Heavy-duty Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Truck1",
        model: 2022,
        weight: 5000,
        color: "Blue",
        technologyUsed: function () {
          console.log("Heavy-duty Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },


    ],
    start: function () {
      console.log("Truck starting...");
    },
    drive: function () {
      console.log("Truck is being driven...");
    },
    brake: function () {
      console.log("Applying brakes...");
    },
    stop: function () {
      console.log("Truck stopped.");
    }
  },


  Van: {
    models: [
      {
        name: "Van1",
        model: 2022,
        weight: 2000,
        color: "White",
        technologyUsed: function () {
          console.log("Utility Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Van2",
        model: 2022,
        weight: 2000,
        color: "White",
        technologyUsed: function () {
          console.log("Utility Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
    ],
    start: function () {
      console.log("Van starting...");
    },
    drive: function () {
      console.log("Van is being driven...");
    },
    brake: function () {
      console.log("Applying brakes...");
    },
    stop: function () {
      console.log("Van stopped.");
    }
  },

  Bike: {
    models: [
      {
        name: "Bike1",
        model: 2022,
        weight: 200,
        color: "Black",
        technologyUsed: function () {
          console.log("Lightweight Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Bike2",
        model: 2022,
        weight: 200,
        color: "Black",
        technologyUsed: function () {
          console.log("Lightweight Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Bike3",
        model: 2022,
        weight: 200,
        color: "Black",
        technologyUsed: function () {
          console.log("Lightweight Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },

    ],
    start: function () {
      console.log("Bike starting...");
    },
    drive: function () {
      console.log("Bike is being driven...");
    },
    brake: function () {
      console.log("Applying brakes...");
    },
    stop: function () {
      console.log("Bike stopped.");
    }
  },

  Auto: {
    models: [
      {
        name: "AutoModel1",
        model: 2022,
        weight: 300,
        color: "Yellow",
        technologyUsed: function () {
          console.log("Compact Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Auto2",
        model: 2022,
        weight: 300,
        color: "Yellow",
        technologyUsed: function () {
          console.log("Compact Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },
      {
        name: "Auto3",
        model: 2022,
        weight: 300,
        color: "Yellow",
        technologyUsed: function () {
          console.log("Compact Technology");
        },
        ratingFromUsers: ["Excellent", "Good", "Average", "Poor", "Terrible"]
      },

    ],
    start: function () {
      console.log("Auto starting...");
    },
    drive: function () {
      console.log("Auto is being driven...");
    },
    brake: function () {
      console.log("Applying brakes...");
    },
    stop: function () {
      console.log("Auto stopped.");
    }
  }
};


// Vehicle.Car.start();
// Vehicle.Car.drive();
// Vehicle.Car.stop();

// Vehicle.Truck.start();
// Vehicle.Truck.drive();
// Vehicle.Truck.stop();

// Vehicle.Auto.start();
// Vehicle.Auto.drive();
// Vehicle.Auto.stop();

// Vehicle.Bike.start();
// Vehicle.Bike.drive();
// Vehicle.Bike.stop();

// write code to find all vehicles with weight less than 4000
function VehiclesWeight(weightLimit) {
  let result = [];

  Object.values(Vehicle).forEach((vehicleType) => {
    if (vehicleType.models) {
      vehicleType.models.forEach((model) => {
        if (model.weight < weightLimit) {
          result.push(model);
        }
      });
    }
  });

  return result;
}

const vehiclesWithWeightLessThan4000 = VehiclesWeight(4000);
console.log("Vehicles with weight less than 4000:", vehiclesWithWeightLessThan4000);


// write code to find all vehicels whose color is yellow
function VehiclesColor(color) {
  let result = [];

  Object.values(Vehicle).forEach((vehicleType) => {
    if (vehicleType.models) {
      vehicleType.models.forEach((model) => {
        if (model.color === color) {
          result.push(model);
        }
      });
    }
  });

  return result;
}

const yellowVehicles = VehiclesColor("Yellow");
console.log("Vehicles with color Yellow:", yellowVehicles);

// write code to find all vehicels whose color is yellow or red
function VehiclesColors(colors) {
  let result = [];

  Object.values(Vehicle).forEach((vehicleType) => {
    if (vehicleType.models) {
      vehicleType.models.forEach((model) => {
        if (colors.includes(model.color)) {
          result.push(model);
        }
      });
    }
  });

  return result;
}

const yellowOrRedVehicles = VehiclesColors(["Yellow", "Red"]);
console.log("Vehicles with color Yellow or Red:", yellowOrRedVehicles);

// write code to find all vehicels whose color is yellow and weight is less than or equal to 300
function VehiclesByColorAndWeight(color, weightLimit) {
  let result = [];

  Object.values(Vehicle).forEach((vehicleType) => {
    if (vehicleType.models) {
      vehicleType.models.forEach((model) => {
        if (model.color === color && model.weight <= weightLimit) {
          result.push(model);
        }
      });
    }
  });

  return result;
}

const yellowAndLightVehicles = VehiclesByColorAndWeight("Yellow", 300);
console.log("Vehicles with color Yellow and weight <= 300:", yellowAndLightVehicles);

// write code to find all vehicels whose color is yellow or red and weight is less than or equal to 300
const yellowOrRedAndLightVehicles = VehiclesColors(["Yellow", "Red"]).filter(
  (model) => model.weight <= 300
);
console.log("Vehicles with color Yellow or Red and weight <= 300:", yellowOrRedAndLightVehicles);

// write code to return all the vehicle objects into a single array 
const allVehiclesArray = [].concat(...Object.values(Vehicle).map((type) => type.models));
console.log("All vehicles in a single array:", allVehiclesArray);

// write code to return all vehicles which has more than 3 models
const vehiclesWithMoreThan3Models = Object.values(Vehicle).filter(
  (vehicleType) => vehicleType.models && vehicleType.models.length > 3
);
console.log("Vehicles with more than 3 models:", vehiclesWithMoreThan3Models);


