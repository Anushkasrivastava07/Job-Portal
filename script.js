const jobs = [
    { title: "Frontend Developer", company: "ABC Pvt Ltd",location: "Delhi", salary: "5 lpa" },
    { title: "Backend Developer", company: "XYZ Ltd" ,location: "Banglore", salary: "6 lpa"},
    { title: "Full Stack Developer", company: "Tech Corp",location: "Remote", salary: "8 lpa" },
    { title: "UI/UX Designer", company: "Creative Designer",location: "Mumbai", salary: "4 lpa" }
];

const jobList = document.getElementById("job-list");
const searchInput = document.getElementById("search");

function displayJobs(jobArray) {
    jobList.innerHTML = "";

    jobArray.forEach(job => {
        const div = document.createElement("div");
        div.classList.add("job-card");

        div.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <p>${job.salary}</p>
            <button onclick="applyJob('${job.title}')">Apply</button>
        `;

        jobList.appendChild(div);
    });
}

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value) ||
        job.company.toLowerCase().includes(value)
    );

    displayJobs(filtered);
});

function openPopup(title) {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitForm() {
    alert("Application Submitted!");
    closePopup();
}

// initial load
displayJobs(jobs);


