const jobs = [
    { title: "Frontend Developer", company: "TechNova solution",location: "Delhi", salary: "5 lpa" },
    { title: "Backend Developer", company: "XYZ Ltd" ,location: "Banglore", salary: "6 lpa"},
    { title: "Full Stack Developer", company: "Tech Corp",location: "Remote", salary: "10 lpa" },
    { title: "UI/UX Designer", company: "Creative Designer",location: "Mumbai", salary: "4 lpa" },
    { title: "Data Analyst Intern", company: "Insight Labs",location: "Noida", salary: "7 lpa" },
    { title: "Java Developer", company: "TechNova solution",location: "Pune", salary: "5 lpa" },
    { title: "Python Developer", company: "SoftLink Technologies" ,location: "Gurgaon", salary: " 9 lpa"},
    { title: "QA Tester", company: "QualityFirst Tech",location: "Hyderabad", salary: "7 lpa" },
    { title: "Devops Engineer", company: "SkyNet Cloud",location: "Mumbai", salary: "9 lpa" },
    { title: "HR Intern", company: "TalentHive",location: "Banglore", salary: "7 lpa" },
    { title: "Product  Engineer", company: "Growth Bridge",location: "Delhi", salary: "9 lpa" },
    { title: "Support Engineer", company: "Help Desk Pro",location: "Noida", salary: "7 lpa" }
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
            <button onclick="openPopup('${job.title}')">Apply</button>

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
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = " Light Mode";
    } else {
        themeToggle.textContent = " Dark Mode";
    }
});



