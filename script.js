(function () {
    const h = React.createElement;
    const { useEffect, useState } = React;
    const resumeFile = "Vinod_Kumar_Vemula_Resume.pdf";

    const profile = {
        name: "Vinod Kumar Vemula",
        title: "AI Engineer · ML Engineer",
        focus: "Production AI systems, Scalable AI Solutions & cloud-native ML",
        summary: "AI/ML engineer with 7 years of experience building production LLM applications, low-latency inference APIs, streaming data platforms and cloud-native infrastructure across insurance, banking and enterprise systems.",
        location: "Texas, USA",
        phone: "+1 (279) 500-3888",
        phoneHref: "tel:+12795003888",
        email: "vvinodvemula03@gmail.com",
        linkedin: "https://www.linkedin.com/in/vinod-kumar-vemula007/"
    };

    const highlights = [
        ["7 years", "AI, ML and data platform experience"],
        ["~40%", "Lower average concurrent LLM API latency at CGI"],
        ["10,000+", "Connected machines supported by IoT pipelines"],
        ["500K+", "Daily transactions in GCP data pipelines"]
    ];

    const experience = [
        {
            role: "Gen AI Engineer", company: "CGI", location: "Dallas, TX", period: "Oct 2025 – Jun 2026",
            bullets: [
                "Deployed enterprise LLM services with Python, FastAPI, Vertex AI, Gemini, Docker and Kubernetes for insurance workflows.",
                "Optimized asynchronous inference APIs using asyncio, caching and request orchestration, cutting average response latency by nearly 40% under concurrent workloads.",
                "Built RAG pipelines integrating embeddings, semantic search and vector retrieval to surface policy and operational knowledge.",
                "Implemented observability for latency, token usage, inference failures and response quality, alongside CI/CD and deployment rollback workflows."
            ], tags: ["FastAPI", "Vertex AI", "Gemini", "RAG", "Kubernetes", "Observability"]
        },
        {
            role: "AI / ML Data Engineer", company: "BMO Bank", location: "Chicago, IL", period: "Jun 2023 – Sep 2025",
            bullets: [
                "Delivered real-time fraud detection and risk-scoring services using Python, FastAPI, Azure ML, Kafka and Spark Streaming.",
                "Built streaming pipelines for high-volume financial events and exposed fraud predictions through REST APIs.",
                "Automated testing and ML releases with Azure DevOps CI/CD while monitoring inference latency and streaming reliability."
            ], tags: ["Azure ML", "Kafka", "Spark Streaming", "FastAPI", "Azure DevOps"]
        },
        {
            role: "Cloud & ML Engineer · Internship", company: "John Deere", location: "Moline, IL", period: "Aug 2022 – Jan 2023",
            bullets: [
                "Created AWS S3, Lambda and Redshift pipelines processing IoT telemetry for predictive maintenance and anomaly detection across 10,000+ agricultural machines.",
                "Automated provisioning with Terraform and CloudFormation, reducing setup time by 25% and infrastructure cost by 20%.",
                "Added sensor-data quality controls, supporting 99.8% pipeline availability."
            ], tags: ["AWS", "IoT", "Terraform", "Redshift", "Data Quality"]
        },
        {
            role: "Data Platform Engineer", company: "Infosys", location: "India", period: "Mar 2019 – Dec 2021",
            bullets: [
                "Built GCP-based analytics workflows using Cloud Pub/Sub, Kafka, Python and SQL to process 500K+ daily transactions.",
                "Developed transformations for product sales and customer behavior across 50+ consumer products.",
                "Automated workflows with Cloud Composer, reducing deployment errors by 15%."
            ], tags: ["GCP", "Pub/Sub", "Kafka", "Python", "SQL"]
        },
        {
            role: "Data Engineer", company: "Aviva Life Insurance", location: "Bangalore, India", period: "Jan 2018 – Feb 2019",
            bullets: [
                "Built BigQuery ETL pipelines for 500K+ insurance policy records with 99.9% pipeline uptime.",
                "Connected AWS S3 and Redshift with GCP processing workflows, reducing data transfer cost by 15%.",
                "Used Sqoop and Impala for claims ingestion, audit analytics and regulatory reporting."
            ], tags: ["BigQuery", "AWS", "ETL", "Sqoop", "Impala"]
        }
    ];

    const skillGroups = [
        ["Generative AI", ["LangChain", "RAG", "Vector Databases", "Semantic Search", "Prompt Engineering", "AI Observability"]],
        ["Languages & APIs", ["Python", "FastAPI", "asyncio", "Pydantic", "pytest", "Java", "SQL"]],
        ["ML & MLOps", ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "MLflow", "Model Deployment"]],
        ["Cloud", ["AWS", "Azure ML", "Vertex AI", "BigQuery", "GCP Dataflow", "EKS", "Azure Synapse"]],
        ["Data Platforms", ["Apache Kafka", "Apache Spark", "Snowflake", "Airflow", "dbt"]],
        ["Infrastructure", ["Docker", "Kubernetes", "Terraform", "CloudFormation", "GitHub Actions", "Azure DevOps", "Grafana"]]
    ];

    const projects = [
        {
            title: "DeFi Protocol Monitor", period: "Apr 2026 – Present",
            description: "Dockerized Python/FastAPI monitoring service for HyperEVM DeFi protocols. Detects TVL drops of 20%, APY changes of at least 2%, and utilization spikes above 95%; serves health metrics and alert history through REST APIs backed by SQLite.",
            tags: ["Python", "FastAPI", "Docker", "SQLite", "Anomaly Detection"]
        },
        {
            title: "Multimodal AI Copilot System", period: "Mar 2026 – Apr 2026",
            description: "Multimodal AI platform that processes audio and visual streams to generate real-time insights and automated incident reports, with event-driven backend pipelines and low-latency LLM inference orchestration.",
            tags: ["Multimodal AI", "LLMs", "Event-Driven Systems", "Inference"]
        },
        {
            title: "University Hybrid Chatbot", period: "Mar 2025 – May 2025",
            description: "RAG chatbot for admissions and course-related questions using Azure OpenAI, semantic vector retrieval, FastAPI and Docker, deployed through Azure App Services.",
            tags: ["Azure OpenAI", "RAG", "FastAPI", "Docker", "Azure App Services"]
        }
    ];

    function App() {
        const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
        const [menuOpen, setMenuOpen] = useState(false);

        useEffect(() => {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }, [theme]);

        return h(React.Fragment, null,
            h(Header, { theme, setTheme, menuOpen, setMenuOpen }),
            h("main", null,
                h(Hero),
                h(About),
                h(Experience),
                h(Skills),
                h(Projects),
                h(Education),
                h(Contact)
            ),
            h("footer", { className: "footer" },
                h("div", { className: "container footer-inner" },
                    h("p", null, "© 2026 Vinod Kumar Vemula"),
                    h("div", null,
                        h("a", { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer" }, "LinkedIn"),
                        
                        h("a", { href: resumeFile, download: true }, "Resume")
                    )
                )
            )
        );
    }

    function Header({ theme, setTheme, menuOpen, setMenuOpen }) {
        const links = [["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]];
        return h("header", { className: "header" },
            h("div", { className: "container header-inner" },
                h("a", { className: "brand", href: "#" }, "VKV"),
                h("nav", { className: menuOpen ? "nav open" : "nav" },
                    links.map(([label, id]) => h("a", { key: id, href: `#${id}`, onClick: () => setMenuOpen(false) }, label))
                ),
                h("div", { className: "header-actions" },
                    h("a", { className: "btn btn-dark resume-small", href: resumeFile, download: true }, h(Icon, { name: "fa-download" }), "Resume"),
                    h("button", { className: "icon-btn", type: "button", onClick: () => setTheme(theme === "dark" ? "light" : "dark"), "aria-label": "Toggle theme" },
                        h(Icon, { name: theme === "dark" ? "fa-sun" : "fa-moon" })
                    ),
                    h("button", { className: "icon-btn menu-btn", type: "button", onClick: () => setMenuOpen(!menuOpen), "aria-label": "Toggle menu" },
                        h(Icon, { name: menuOpen ? "fa-xmark" : "fa-bars" })
                    )
                )
            )
        );
    }

    function Hero() {
        return h("section", { className: "hero" },
            h("div", { className: "container hero-grid" },
                h("div", { className: "hero-content" },
                    h("p", { className: "eyebrow" }, profile.title),
                    h("h1", null, profile.name),
                    h("h2", null, profile.focus),
                    h("p", { className: "summary" }, profile.summary),
                    h("div", { className: "hero-actions" },
                        h("a", { className: "btn btn-primary", href: "#contact" }, h(Icon, { name: "fa-paper-plane" }), "Contact Me"),
                        h("a", { className: "btn btn-light", href: "#experience" }, h(Icon, { name: "fa-briefcase" }), "View Experience"),
                        h("a", { className: "btn btn-dark", href: resumeFile, download: true }, h(Icon, { name: "fa-download" }), "Download Resume")
                    )
                ),
                h("aside", { className: "profile-card" },
                    h("img", { src: "vinod.jpeg", alt: profile.name }),
                    h("div", { className: "profile-details" },
                        h("h3", null, "Profile"),
                        h("p", null, profile.location),
                        h("p", null, "Insurance · Banking · Cloud AI"),
                        h("p", null, "LLM engineering, inference and ML platforms")
                    ),
                    h("div", { className: "social-links" },
                        h("a", { href: profile.phoneHref, "aria-label": "Phone" }, h(Icon, { name: "fa-phone" })),
                        h("a", { href: `mailto:${profile.email}`, "aria-label": "Email" }, h(Icon, { name: "fa-envelope" })),
                        h("a", { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn" }, h("i", { className: "fab fa-linkedin" })),
                        
                    )
                )
            )
        );
    }

    function About() {
        return h("section", { id: "about", className: "section" },
            h("div", { className: "container" },
                h("div", { className: "metrics" }, highlights.map(([value, label]) =>
                    h("article", { key: value }, h("strong", null, value), h("span", null, label))
                )),
                h("div", { className: "about-box" },
                    h(SectionTitle, { label: "About", title: "AI systems that work in production" }),
                    h("p", null, "I build and operate enterprise AI applications, from retrieval-augmented LLM workflows and asynchronous inference APIs to ML prediction services and real-time data pipelines."),
                    h("p", null, "My work spans Python/FastAPI, Gemini and Vertex AI, Azure ML, AWS/GCP, Kafka and Spark. I focus on dependable deployment, monitoring, performance and maintainable cloud infrastructure.")
                )
            )
        );
    }

    function Experience() {
        return h("section", { id: "experience", className: "section section-alt" },
            h("div", { className: "container" },
                h(SectionTitle, { label: "Experience", title: "Professional experience" }),
                h("div", { className: "timeline" },
                    experience.map(job => h("article", { className: "job", key: `${job.company}-${job.period}` },
                        h("div", { className: "job-meta" },
                            h("span", null, job.period),
                            h("strong", null, job.company),
                            h("small", null, job.location)
                        ),
                        h("div", { className: "job-content" },
                            h("h3", null, job.role),
                            h("ul", null, job.bullets.map(bullet => h("li", { key: bullet }, bullet))),
                            h(TagRow, { tags: job.tags })
                        )
                    ))
                )
            )
        );
    }

    function Skills() {
        return h("section", { id: "skills", className: "section" },
            h("div", { className: "container" },
                h(SectionTitle, { label: "Skills", title: "Technical skills" }),
                h("div", { className: "skills-grid" },
                    skillGroups.map(([group, skills]) => h("article", { className: "skill-card", key: group },
                        h("h3", null, group),
                        h(TagRow, { tags: skills })
                    ))
                )
            )
        );
    }

    function Projects() {
        return h("section", { id: "projects", className: "section section-alt" },
            h("div", { className: "container" },
                h(SectionTitle, { label: "Projects", title: "Selected projects" }),
                h("div", { className: "project-grid" },
                    projects.map(project => h("article", { className: "project-card", key: project.title },
                        h("span", { className: "project-period" }, project.period),
                        h("h3", null, project.title),
                        h("p", null, project.description),
                        h(TagRow, { tags: project.tags })
                    ))
                )
            )
        );
    }

    function Education() {
        return h("section", { id: "education", className: "section" },
            h("div", { className: "container" },
                h(SectionTitle, { label: "Background", title: "Education & certifications" }),
                h("div", { className: "education-grid" },
                    h("article", null, h("h3", null, "MS · Statistics and Decision Analytics"), h("p", null, "Western Illinois University, USA"), h("span", null, "2022 – 2023 · GPA 3.60")),
                    h("article", null, h("h3", null, "BTech · Mechanical Engineering"), h("p", null, "Andhra University, India"), h("span", null, "2014 – 2018 · GPA 3.00"))
                ),
                h(TagRow, { tags: ["Certified GenAI Expert", "AI Capstone Project with Deep Learning", "Introduction to Neural Networks and PyTorch", "AWS Data Engineer", "GCP Professional Data Engineer"] })
            )
        );
    }

    function Contact() {
        return h("section", { id: "contact", className: "section section-alt" },
            h("div", { className: "container contact-grid" },
                h("div", null,
                    h(SectionTitle, { label: "Contact", title: "Let’s build something useful" }),
                    h("p", { className: "summary" }, "Interested in production AI, machine learning platforms or data engineering? Reach out directly."),
                    h("div", { className: "contact-list" },
                        h("a", { href: `mailto:${profile.email}` }, h(Icon, { name: "fa-envelope" }), profile.email),
                        h("a", { href: profile.phoneHref }, h(Icon, { name: "fa-phone" }), profile.phone),
                        h("a", { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer" }, h("i", { className: "fab fa-linkedin" }), "LinkedIn"),
                        h("p", null, profile.location)
                    )
                ),
                h("div", { className: "contact-form contact-cta" },
                    h("p", { className: "eyebrow" }, "GET IN TOUCH"),
                    h("h3", null, "Have a project or opportunity in mind?"),
                    h("p", null, "Email is the best way to start a conversation."),
                    h("a", { className: "btn btn-primary", href: `mailto:${profile.email}?subject=Portfolio%20inquiry` }, h(Icon, { name: "fa-envelope" }), "Send an Email"),
                    h("a", { className: "btn btn-light", href: resumeFile, download: true }, h(Icon, { name: "fa-download" }), "Download Resume")
                )
            )
        );
    }

    function SectionTitle({ label, title }) {
        return h("div", { className: "section-title" }, h("p", { className: "eyebrow" }, label), h("h2", null, title));
    }

    function TagRow({ tags }) {
        return h("div", { className: "tags" }, tags.map(tag => h("span", { key: tag }, tag)));
    }

    function Icon({ name }) {
        return h("i", { className: `fas ${name}`, "aria-hidden": "true" });
    }

    ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
