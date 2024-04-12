class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let newCandidates = [];
        candidates.forEach(candidate => {
            const [name, education, yearsExperience] = candidate.split("-");
            const index = this.jobCandidates.findIndex(c => c.name === name);
            if (index > -1) {
                // Update yearsExperience if current one is higher
                if (Number(this.jobCandidates[index].yearsExperience) < Number(yearsExperience)) {
                    this.jobCandidates[index].yearsExperience = yearsExperience;
                }
            } else {
                // Add new candidate
                this.jobCandidates.push({ name, education, yearsExperience });
                newCandidates.push(name);
            }
        });
        return `You successfully added candidates: ${newCandidates.join(", ")}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const index = this.jobCandidates.findIndex(c => c.name === name);
        if (index === -1) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (Number(this.jobCandidates[index].yearsExperience) < Number(minimalExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }
        this.jobCandidates[index].yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(c => c.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        let salary;
        if (candidate.education.trim() === 'Bachelor') {
            salary = "\$50,000";
        } else if (candidate.education.trim() === 'Master') {
            salary = "\$60,000";
        } else {
            salary = "\$40,000";
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }
        // Sort candidates by name
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        let candidatesList = "Candidates list:\n";
        this.jobCandidates.forEach(c => {
            candidatesList += `${c.name}-${c.yearsExperience}\n`;
        });
        return candidatesList;
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());