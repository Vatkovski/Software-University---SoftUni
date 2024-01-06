function assembleCar(order) {
    let engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 }
    ];
  
    let carriages = [
      { type: 'hatchback', color: order.color },
      { type: 'coupe', color: order.color }
    ];
  
    let engine = engines.sort((a, b) => a.power - b.power).find(e => e.power >= order.power);
    let carriage = carriages.find(c => c.type === order.carriage);
    let wheels = Array(4).fill(order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize);
  
    return {
      model: order.model,
      engine: engine,
      carriage: carriage,
      wheels: wheels
    };
  }
  