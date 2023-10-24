function calculateProjectTime(architectName, projectCount) {
    let hoursPerProject = 3;
    let totalHours = projectCount * hoursPerProject;
    console.log(`The architect ${architectName} will need ${totalHours} hours to complete ${projectCount} project/s.`);
}

calculateProjectTime("George", 4);
calculateProjectTime("Sanya", 9);