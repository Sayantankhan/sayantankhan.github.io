import { Github, Linkedin, ExternalLink, Mail, MapPin, Calendar, Code, Server, Cloud, Cpu, Brain, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const Index = () => {
  const skills = [
    { 
      name: "Backend Development", 
      icon: Server, 
      description: "Scalable server-side applications",
      proficiency: 95,
      experience: "8+ years",
      technologies: [
        "Java", "Go", "C++", "WIL/COM", "Node.js", "Spring Boot", "Express", "Gin", 
        "gRPC", "RESTful APIs", "Microservices", "MySQL", "Cassandra", 
        "DynamoDB", "PostgreSQL", "PostGIS", "Elasticsearch", "Kibana", "Redis", 
        "Zookeeper", "Kafka", "AMQ"
      ],
      highlight: "Built scalable systems, capable of handling millions of requests"
    },
    { 
      name: "Infrastructure", 
      icon: Cloud, 
      description: "Cloud architecture & deployment",
      proficiency: 90,
      experience: "8+ years",
      technologies: ["OCI", "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "IaC", "Jenkins", "GitHub Actions", "Ansible", "Monitoring", "HA / Failover Setup"],
      highlight: "End-To-End automation and deployment of large-scale cloud infrastructure across OCI, AWS, and GCP, supporting hundreds of production workloads with high availability and observability"
    },
    { 
      name: "HPC", 
      icon: Cpu, 
      description: "High-performance computing",
      proficiency: 80,
      experience: "3+ years",
      technologies: ["GPU Computing", "MPI", "NCCL/RCCL", "CUDA", "Performance Tuning", "Failover Handling", "DAOS", "Memory Brokers", "RoCE", "InfiniBand"],
      highlight: "Scaled and managed 10K+ GPU nodes. Implemented custom memory brokers. Designed topology-aware NCCL tuner for optimal bandwidth and performance"
    },
    { 
      name: "AI/ML", 
      icon: Brain, 
      description: "Artificial intelligence solutions",
      proficiency: 80,
      experience: "3+ years",
      technologies: ["ML Infrastructure", "Regression & Classification Models", "Nemo Framework", "PyTorch", "GPU Optimization", "AI Workloads"],
      highlight: "AI Model Deployment and Performace Tuning"
    }
  ];

  const experience = [
    {
      period: "Sept 2025 - Present",
      title: "Senior Software Engineer",
      company: "Microsoft",
      location: "Bangalore Urban, Karnataka, India",
      description: "Designing and optimizing core components of Azure Storage, focusing on performance, reliability, and scalability across distributed systems serving petabytes of data. Working on the storage stack that powers Azure Blob, File, and Data Lake services—enhancing data replication, consistency models, and failover mechanisms. Collaborating with cross-functional teams to build high-availability storage services for AI, cloud-native, and enterprise workloads.",
      skills: ["C++", "WIL/COM", "GO", "gRPC", "Multithreading", "Distributed Systems", "Storage Systems", "Concurrency", "Low-latency IO"]
    },
    {
      period: "Jul 2024 - Sept 2025",
      title: "Senior Member of Technical Staff",
      company: "Oracle",
      location: "Bangalore Urban, Karnataka, India",
      description: "Provision, secure, scale, monitor, and operate the application, network stack for distributed AI workloads across thousands of GPUs. Enabling customers to scale GPU usage without compromising performance and building an ultra-high-performance infrastructure to support AI workloads on OCI.",
      skills: ["Java", "GO", "gRPC", "Memory Broker", "Multithreading", "AI Infrastructure", "GPU Computing", "Distributed Systems"]
    },
    {
      period: "Sep 2021 - Jul 2024",
      title: "Software Engineer 2",
      company: "Nike",
      location: "Bengaluru, Karnataka, India",
      description: "Developed and maintained large-scale backend systems supporting Nike's global e-commerce platform and digital infrastructure.",
      skills: ["Java", "GO", "gRPC", "Rest", "Vue", "Microservices", "Cloud Computing", "AWS"]
    },
    {
      period: "Nov 2019 - Sep 2021",
      title: "Research & Development Software Engineer",
      company: "Manhattan Associates",
      location: "Bengaluru",
      description: "Worked on research and development of supply chain management solutions, focusing on high-performance distributed systems and optimization algorithms.",
      skills: ["Java", "Multithreading", "Algorithm Optimization", "Supply Chain Systems"]
    },
    {
      period: "Jun 2017 - Nov 2019",
      title: "Software Engineer",
      company: "Tata Consultancy Services (TCS)",
      location: "Bengaluru Area, India",
      description: "Developed enterprise-grade software solutions using Java technologies, RESTful web services, and modern backend frameworks.",
      skills: ["Java", "React", "RESTful WebServices", "Enterprise Applications", "Backend Development"]
    }
  ];

  const projects = [
    {
      title: "Technical Blog",
      description: "Sharing insights on backend development, DevOps practices, and emerging technologies",
      link: "https://sayantankhan.github.io/blog/",
      tech: ["Writing", "Technical Content", "Knowledge Sharing"]
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to various open-source projects in backend and infrastructure domains",
      link: "https://github.com/Sayantankhan",
      tech: ["Open Source", "Collaboration", "Community"]
    }
  ];

  const githubProjects = [
    {
      name: "CRAQ-Based Distributed Chunk Storage System",
      description: "A distributed file storage system with FUSE support using the CRAQ protocol, optimized for reliable and versioned chunked file storage for HPC workload",
      url: "https://github.com/Sayantankhan/craq-cluster",
      language: "GO",
      stars: 2,
      forks: 0,
      topics: ["CRAQ", "FS", "Fuse", "gRPC Streaming", "Chunk Storage System", "distributed-systems"],
      status: "active"
    },
    {
      name: "NCCL Performance Tuner",
      description: "A profiling and tuning toolkit to benchmark and optimize NCCL communication performance across different topologies and configurations on GPU clusters.",
      url: "https://github.com/Sayantankhan/nccl-performance-tuner",
      language: "C++",
      stars: 4,
      forks: 0,
      topics: ["nccl", "gpu", "performance", "benchmark", "tuning", "distributed-systems"],
      status: "active"
    },
    {
      name: "Socket Takeover",
      description: "A mechanism that allows a new instance of an application to inherit an existing network socket from a previous instance.",
      url: "https://github.com/Sayantankhan/socket-takeover",
      language: "GO",
      stars: 3,
      forks: 0,
      topics: ["Socket", "linux", "Epoll", "tcp", "algorithms"],
      status: "active"
    },
    {
      name: "Epoll WebSocket Server",
      description: "A high-performance WebSocket server built in Go, leveraging Linux's epoll for efficient handling of multiple simultaneous connections. Mimicking game server communication for scalable and responsive multiplayer interactions.",
      url: "https://github.com/Sayantankhan/epoll-ws-server",
      language: "GO",
      stars: 5,
      forks: 0,
      topics: ["devops", "WebSocket", "Epoll", "infrastructure"],
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      <AnimatedBackground />
      
      {/* Hero Section with improved contrast */}
      <section className="relative px-6 py-20 lg:px-8 z-10">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 drop-shadow-2xl">
              Sayantan Khan
            </h1>
            <p className="text-xl text-slate-100 mb-4 drop-shadow-lg">Senior Software Engineer</p>
            <div className="flex items-center justify-center gap-4 text-slate-200 mb-8">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{Math.round((new Date().getTime() - new Date(2017, 8).getTime()) / (1000 * 60 * 60 * 24 * 365.25))}+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg leading-8 text-slate-100 mb-12 animate-fade-in max-w-3xl mx-auto drop-shadow-lg">
            Passionate software engineer specializing in backend development, infrastructure, DevOps, high-performance computing, and AI. 
            I build scalable, robust systems that power modern applications and drive business growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl border border-indigo-500/30">
              <a href="https://sayantankhan.github.io/blog/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Blog
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-slate-800/80 hover:bg-slate-700/80 text-white border-slate-500/50 hover:border-slate-400/70 backdrop-blur-sm shadow-xl">
              <a href="https://www.linkedin.com/in/sayantan-khan-219231b7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section with improved contrast */}
      <section className="relative px-6 py-20 lg:px-8 z-10">
        <div className="absolute inset-0 bg-slate-800/70 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16 drop-shadow-xl">Core Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/20 animate-fade-in hover:border-indigo-500/50 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-500/30 rounded-lg backdrop-blur-sm">
                      <skill.icon className="h-8 w-8 text-indigo-300" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-1 drop-shadow-sm">{skill.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-slate-700/80 text-slate-100 border-slate-500/50">
                          {skill.experience}
                        </Badge>
                        <span className="text-sm text-slate-200">{skill.proficiency}% Proficiency</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={skill.proficiency} className="h-2 mb-4" />
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-100 mb-4">{skill.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-indigo-300 font-medium mb-2">Key Achievement:</p>
                    <p className="text-sm text-slate-100">{skill.highlight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-200 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-400/60 text-slate-100 text-xs hover:border-indigo-400/70 hover:text-indigo-200 transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with improved contrast */}
      <section className="relative px-6 py-20 lg:px-8 z-10">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16 drop-shadow-xl">Professional Journey</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-indigo-500 shadow-lg"></div>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300 hover:border-indigo-500/50 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white drop-shadow-sm">{exp.title}</CardTitle>
                        <p className="text-indigo-300 font-semibold">{exp.company}</p>
                        <p className="text-slate-200 text-sm">{exp.location}</p>
                        <Badge variant="secondary" className="mt-2 bg-slate-700/80 text-slate-100 border-slate-500/50">{exp.period}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-100 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-slate-400/60 text-slate-100 hover:border-indigo-400/70 hover:text-indigo-200 transition-colors duration-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects Section with improved contrast */}
      <section className="relative px-6 py-20 lg:px-8 z-10">
        <div className="absolute inset-0 bg-slate-800/70 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16 drop-shadow-xl">GitHub Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <Card key={project.name} className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/20 animate-fade-in hover:border-indigo-500/50 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white flex items-center gap-2 mb-2 drop-shadow-sm">
                        <Github className="h-5 w-5 text-indigo-300" />
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-slate-100 mb-3">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-200 mb-3">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <span>{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{project.forks}</span>
                    </div>
                    <Badge 
                      variant={project.status === 'active' ? 'default' : project.status === 'ongoing' ? 'secondary' : 'outline'}
                      className={
                        project.status === 'active' 
                          ? 'bg-green-600/90 hover:bg-green-700/90 text-white' 
                          : project.status === 'ongoing'
                          ? 'bg-yellow-600/90 hover:bg-yellow-700/90 text-white'
                          : 'border-slate-400/60 text-slate-100'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="border-slate-400/60 text-slate-100 text-xs hover:border-indigo-400/70 hover:text-indigo-200 transition-colors duration-200">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl border border-indigo-500/30">
              <a href="https://github.com/Sayantankhan" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section with improved contrast */}
      <section className="relative px-6 py-20 lg:px-8 z-10">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16 drop-shadow-xl">Featured Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/80 backdrop-blur-sm border-slate-600/50 hover:bg-slate-700/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/20 animate-fade-in hover:border-indigo-500/50 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between drop-shadow-sm">
                    {project.title}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-100 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-400/60 text-slate-100 hover:border-indigo-400/70 hover:text-indigo-200 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with improved contrast */}
      <section className="relative px-6 py-20 lg:px-8 z-10">
        <div className="absolute inset-0 bg-slate-800/70 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-xl">Let's Connect</h2>
          <p className="text-lg text-slate-100 mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Interested in discussing opportunities, collaborating on projects, or just having a technical conversation? 
            I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" variant="outline" className="bg-slate-800/80 hover:bg-slate-700/80 text-white border-slate-500/50 hover:border-slate-400/70 backdrop-blur-sm shadow-xl">
              <a href="https://www.linkedin.com/in/sayantan-khan-219231b7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-slate-800/80 hover:bg-slate-700/80 text-white border-slate-500/50 hover:border-slate-400/70 backdrop-blur-sm shadow-xl">
              <a href="https://github.com/Sayantankhan" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl border border-indigo-500/30">
              <a href="https://sayantankhan.github.io/blog/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Technical Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with improved contrast */}
      <footer className="relative px-6 py-8 lg:px-8 border-t border-slate-600/50 z-10">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div className="relative z-20 mx-auto max-w-6xl text-center">
          <p className="text-slate-200">
            © {new Date().getFullYear()} Sayantan Khan. Built with passion for great software.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
