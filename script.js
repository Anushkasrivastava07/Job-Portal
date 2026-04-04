const jobs = [
    { title: "Frontend Developer", company: "ABC Pvt Ltd" },
    { title: "Backend Developer", company: "XYZ Ltd" },
    { title: "Full Stack Developer", company: "Tech Corp" }
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
            <button onclick="applyJob('${job.title}')">Apply</button>
        `;

        jobList.appendChild(div);
    });
}

function applyJob(title) {
    alert("Applied for " + title);
}

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value)
    );

    displayJobs(filtered);
});


displayJobs(jobs);
