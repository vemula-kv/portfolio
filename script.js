(function () {
    const h = React.createElement;
    const { useEffect, useState } = React;
    const resumeFile = "VINOD%20KUMAR%20VEMULA%20(6).pdf";

    const profile = {
        name: "Vinod Kumar Vemula",
        title: "Senior Software Engineer",
        focus: "Agentic AI | Recommendation Systems | Python | AWS | Databricks",
        summary: "Senior Software Engineer with 7 years of Python development experience building production-grade AI, ML, backend, and data systems for finance, insurance, and enterprise AI teams.",
        location: "McKinney, TX, USA",
        phone: "+1 (279) 500-3888",
        phoneHref: "tel:+12795003888",
        email: "vvinodvemula03@gmail.com",
        linkedin: "https://www.linkedin.com/in/vinod-kumar-vemula007/",
        github: "https://github.com/vemula-kv"
    };

    const highlights = [
        ["7 years", "Python, AI, ML, backend, and data engineering"],
        ["50%", "Reduction in manual enterprise decision-processing"],
        ["25%", "False-positive reduction in ML risk scoring"],
        ["30%", "Faster release cycles through CI/CD automation"]
    ];

    const experience = [
        {
            role: "Senior Gen AI / Software Engineer",
            company: "CGI",
            location: "Dallas, TX",
            period: "Oct 2025 - Present",
            bullets: [
                "Designed production agentic AI systems in Python using LangGraph with stateful multi-agent graphs, tool-calling nodes, memory persistence, and streaming outputs.",
                "Engineered FastAPI and Pydantic REST APIs with OpenAPI specs, versioning, JWT auth, async endpoints, rate limiting, and zero-downtime deployments.",
                "Built an MCP server exposing enterprise data and tools as secure standardized agent context endpoints with role-based access control and audit trails.",
                "Developed RAG pipelines combining vector retrieval, reranking, and LLM reasoning for context-aware next-best-action recommendations.",
                "Maintained GitHub Actions CI/CD with pytest suites, coverage enforcement, integration tests, and deployment gates."
            ],
            tags: ["Python", "LangGraph", "FastAPI", "MCP", "RAG", "GitHub Actions"]
        },
        {
            role: "AI / ML Engineer - Senior Python Developer",
            company: "BMO Bank",
            location: "Chicago, IL",
            period: "Jun 2023 - Sep 2025",
            bullets: [
                "Built Python recommendation and risk scoring systems with XGBoost, neural networks, and Azure ML, reducing false positives by 25% and improving decision accuracy by 18%.",
                "Developed real-time inference REST APIs using FastAPI and Azure OpenAI for personalized AI-generated recommendations.",
                "Engineered streaming ML inference pipelines for low-latency continuous predictions on live transaction data.",
                "Built pytest suites and Azure DevOps CI/CD workflows that accelerated releases by 30% and reduced production errors by 20%.",
                "Performed Spark-based feature engineering on Azure Synapse, transferable to Databricks lakehouse and Delta Lake workflows."
            ],
            tags: ["FastAPI", "Azure ML", "Azure OpenAI", "XGBoost", "MLflow", "Spark"]
        },
        {
            role: "Data & AI Systems Engineer",
            company: "Infosys",
            location: "Mysore, India",
            period: "Mar 2019 - Dec 2021",
            bullets: [
                "Built real-time Python pipelines on GCP Pub/Sub, BigQuery, and Dataflow, handling 500K+ daily transactions with sub-second latency.",
                "Developed NLP text classification and sentiment analysis services using open-source Python libraries deployed as REST microservices.",
                "Integrated CI/CD automation through Jenkins and GitHub to reduce release errors by 15%.",
                "Managed Git repositories, branching strategies, code reviews, and automated testing gates across an 8-engineer team."
            ],
            tags: ["Python", "GCP", "BigQuery", "Dataflow", "NLP", "Jenkins"]
        },
        {
            role: "Data Engineer",
            company: "Aviva Life Insurance",
            location: "Bengaluru, India",
            period: "Jan 2018 - Feb 2019",
            bullets: [
                "Built backend Python pipelines for real-time insurance transaction processing on AWS S3 and Glue ETL.",
                "Improved throughput latency by 30% through optimized event-driven workflow design.",
                "Engineered risk-based ML features for fraud detection and underwriting recommendation models."
            ],
            tags: ["Python", "AWS S3", "Glue ETL", "Insurance", "ML Features"]
        }
    ];

    const skillGroups = [
        ["Agentic AI", ["LangGraph", "LangChain", "LlamaIndex", "MCP", "RAG", "Prompt Engineering", "Context Engineering"]],
        ["Recommendation Systems", ["Next-Best-Action Models", "Collaborative Filtering", "Content-Based Filtering", "Embedding Similarity", "Real-Time Scoring APIs", "A/B Testing"]],
        ["Backend Engineering", ["FastAPI", "Pydantic", "Async Endpoints", "OpenAPI", "JWT Auth", "Rate Limiting", "Integration Testing"]],
        ["Cloud & Data", ["AWS Lambda", "S3", "Redshift", "Glue", "SageMaker", "Databricks", "Delta Lake", "PySpark", "MLflow"]],
        ["ML & MLOps", ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "Neural Networks", "Model Monitoring", "Automated Retraining"]],
        ["CI/CD & DevOps", ["GitHub Actions", "Jenkins", "Azure DevOps", "pytest", "Coverage Gates", "Docker", "Kubernetes", "Terraform"]]
    ];

    const projects = [
        {
            title: "Next-Action Product Recommendation System",
            period: "Apr 2026",
            description: "Agentic recommendation engine using LangGraph, customer behavior signals, PGVector similarity search, FastAPI serving, MLflow experiment tracking, pytest coverage, and GitHub Actions CI/CD.",
            tags: ["LangGraph", "PGVector", "FastAPI", "MLflow"]
        },
        {
            title: "Real-Time ML Decision System",
            period: "Mar 2023 - May 2023",
            description: "End-to-end Python ML system covering feature engineering, Scikit-learn/XGBoost training, AWS Lambda and S3 serving, model monitoring, and automated retraining triggers.",
            tags: ["AWS Lambda", "XGBoost", "S3", "Monitoring"]
        },
        {
            title: "Secure MCP Agent Context Server",
            period: "2025",
            description: "Enterprise context service exposing tools and data to AI agents through standardized MCP endpoints with role-based access control and full audit trails.",
            tags: ["MCP", "RBAC", "Audit Trails", "Agent Tools"]
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
                        h("a", { href: profile.github, target: "_blank", rel: "noopener noreferrer" }, "GitHub"),
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
                        h("p", null, "Finance, insurance, enterprise AI"),
                        h("p", null, "Available for software engineering and AI platform roles")
                    ),
                    h("div", { className: "social-links" },
                        h("a", { href: profile.phoneHref, "aria-label": "Phone" }, h(Icon, { name: "fa-phone" })),
                        h("a", { href: `mailto:${profile.email}`, "aria-label": "Email" }, h(Icon, { name: "fa-envelope" })),
                        h("a", { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn" }, h("i", { className: "fab fa-linkedin" })),
                        h("a", { href: profile.github, target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub" }, h("i", { className: "fab fa-github" }))
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
                    h(SectionTitle, { label: "Professional Summary", title: "Production-focused AI and backend software engineer" }),
                    h("p", null, "I specialize in agentic AI architecture, REST API engineering, recommendation model development, and backend system design. My work emphasizes reliable delivery: CI/CD, unit testing, Git workflows, secure APIs, and maintainable production systems."),
                    h("p", null, "I have hands-on AWS experience across Lambda, S3, Redshift, Glue, SageMaker, CloudFormation, IAM, and EventBridge, plus strong working knowledge of Databricks-style lakehouse architecture, PySpark, Delta Lake, MLflow, feature stores, and large-scale feature engineering.")
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
                h(SectionTitle, { label: "Education", title: "Education & certifications" }),
                h("div", { className: "education-grid" },
                    h("article", null, h("h3", null, "Master of Science - Applied Statistics & Decision Analytics"), h("p", null, "Western Illinois University, USA"), h("span", null, "GPA: 3.60 | Jan 2022 - May 2023")),
                    h("article", null, h("h3", null, "Bachelor of Engineering - Mechanical Engineering"), h("p", null, "Andhra University, India"), h("span", null, "GPA: 3.00 | Aug 2014 - May 2018"))
                ),
                h(TagRow, { tags: ["Certified GenAI Expert", "AWS Data Engineer", "Azure Data Engineer Associate", "AI & Machine Learning on Google Cloud"] })
            )
        );
    }

    function Contact() {
        const [status, setStatus] = useState("");
        const [sending, setSending] = useState(false);

        function onSubmit(event) {
            event.preventDefault();
            const form = event.currentTarget;
            setSending(true);
            setStatus("");
            fetch("https://formspree.io/f/mwvpdgpv", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            }).then(response => {
                if (!response.ok) throw new Error("Form submission failed");
                form.reset();
                setStatus("Message sent. I will get back to you soon.");
            }).catch(() => {
                setStatus("Message could not be sent. Please email me directly.");
            }).finally(() => setSending(false));
        }

        return h("section", { id: "contact", className: "section section-alt" },
            h("div", { className: "container contact-grid" },
                h("div", null,
                    h(SectionTitle, { label: "Contact", title: "Let’s connect" }),
                    h("div", { className: "contact-list" },
                        h("a", { href: `mailto:${profile.email}` }, h(Icon, { name: "fa-envelope" }), profile.email),
                        h("a", { href: profile.phoneHref }, h(Icon, { name: "fa-phone" }), profile.phone),
                        h("a", { href: profile.linkedin, target: "_blank", rel: "noopener noreferrer" }, h("i", { className: "fab fa-linkedin" }), "LinkedIn"),
                        h("a", { href: profile.github, target: "_blank", rel: "noopener noreferrer" }, h("i", { className: "fab fa-github" }), "GitHub"),
                        h("p", null, profile.location)
                    )
                ),
                h("form", { className: "contact-form", onSubmit },
                    h("label", null, "Name", h("input", { name: "name", required: true, placeholder: "Your name" })),
                    h("label", null, "Email", h("input", { type: "email", name: "email", required: true, placeholder: "you@example.com" })),
                    h("label", null, "Subject", h("input", { name: "subject", required: true, placeholder: "Project inquiry" })),
                    h("label", null, "Message", h("textarea", { name: "message", rows: 5, required: true, placeholder: "Tell me about the work..." })),
                    h("button", { className: "btn btn-primary", type: "submit", disabled: sending }, h(Icon, { name: sending ? "fa-spinner fa-spin" : "fa-paper-plane" }), sending ? "Sending" : "Send Message"),
                    status && h("p", { className: "form-status" }, status)
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
