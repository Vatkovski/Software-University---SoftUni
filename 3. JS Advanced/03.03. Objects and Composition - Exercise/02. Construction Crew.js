function hydrateWorker(worker) {
    if (worker.dizziness) {
      let requiredWater = 0.1 * worker.weight * worker.experience;
      worker.levelOfHydrated += requiredWater;
      worker.dizziness = false;
    }
    return worker;
  }
  