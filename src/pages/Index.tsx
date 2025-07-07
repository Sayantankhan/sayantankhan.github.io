import { Github, Linkedin, ExternalLink, Mail, MapPin, Calendar, Code, Server, Cloud, Cpu, Brain, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const skills = [
    { 
      name: "Backend Development", 
      icon: Server, 
      description: "Scalable server-side applications",
      proficiency: 95,
      experience: "8+ years",
      technologies: [
        "Java", "Go", "Node.js", "Spring Boot", "Express", "Gin", 
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
      technologies: ["OCI", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "IaC", "Jenkins", "GitHub Actions", "Ansible", "Monitoring", "HA / Failover Setup"],
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
      period: "Jul 2024 - Present",
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
      name: "High Availability with Pacemaker - Corosync",
      description: "A high-availability (HA) cluster using Pacemaker, Corosync and DRBD across multiple Docker containers.",
      url: "https://github.com/Sayantankhan/HA-Setup",
      language: "Java",
      stars: 2,
      forks: 0,
      topics: ["HA", "Pacemaker", "Corosync", "DRBD", "distributed-systems"],
      status: "active"
    },
    {
      name: "NCCL Performance Tuner",
      description: "A profiling and tuning toolkit to benchmark and optimize NCCL communication performance across different topologies and configurations on GPU clusters.",
      url: "https://github.com/Sayantankhan/nccl-performance-tuner",
      language: "Python",
      stars: 4,
      forks: 0,
      topics: ["nccl", "gpu", "performance", "benchmark", "tuning", "distributed-systems"],
      status: "active"
    },
    {
      name: "Socket Takeover",
      description: "A mechanism that allows a new instance of an application to inherit an existing network socket from a previous instance.",
      url: "https://github.com/Sayantankhan/socket-takeover",
      language: "Java",
      stars: 3,
      forks: 0,
      topics: ["Socket", "linux", "tcp", "algorithms", "nccl"],
      status: "active"
    },
    {
      name: "Epoll WebSocket Server",
      description: "A high-performance WebSocket server built in Go, leveraging Linux's epoll for efficient handling of multiple simultaneous connections. Mimicking game server communication for scalable and responsive multiplayer interactions.",
      url: "https://github.com/Sayantankhan/epoll-ws-server",
      language: "Shell",
      stars: 5,
      forks: 0,
      topics: ["devops", "WebSocket", "Epoll", "infrastructure"],
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6">
              Sayantan Khan
            </h1>
            <p className="text-xl text-slate-300 mb-4">Senior Software Engineer</p>
            <div className="flex items-center justify-center gap-4 text-slate-400 mb-8">
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
          
          <p className="text-lg leading-8 text-slate-300 mb-12 animate-fade-in max-w-3xl mx-auto">
            Passionate software engineer specializing in backend development, infrastructure, DevOps, high-performance computing, and AI. 
            I build scalable, robust systems that power modern applications and drive business growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              <a href="https://sayantankhan.github.io/blog/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Blog
              </a>
            </Button>
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <a href="https://www.linkedin.com/in/sayantan-khan-219231b7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 lg:px-8 bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Core Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <skill.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-1">{skill.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {skill.experience}
                        </Badge>
                        <span className="text-sm text-slate-400">{skill.proficiency}% Proficiency</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={skill.proficiency} className="h-2 mb-4" />
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-300 mb-4">{skill.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-blue-400 font-medium mb-2">Key Achievement:</p>
                    <p className="text-sm text-slate-300">{skill.highlight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-500 text-slate-300 text-xs">
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

      {/* Experience Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Professional Journey</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-500"></div>
                <Card className="bg-slate-700/30 border-slate-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{exp.title}</CardTitle>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                        <p className="text-slate-400 text-sm">{exp.location}</p>
                        <Badge variant="secondary" className="mt-2">{exp.period}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-slate-500 text-slate-300">
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

      {/* GitHub Projects Section */}
      <section className="px-6 py-20 lg:px-8 bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16">GitHub Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {githubProjects.map((project, index) => (
              <Card key={project.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white flex items-center gap-2 mb-2">
                        <Github className="h-5 w-5 text-blue-400" />
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-slate-300 mb-3">
                        {project.description}
                      </CardDescription>
                    </div>
                    {/* <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors ml-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a> */}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
                          ? 'bg-green-600 hover:bg-green-700' 
                          : project.status === 'ongoing'
                          ? 'bg-yellow-600 hover:bg-yellow-700'
                          : 'border-slate-500 text-slate-300'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="border-slate-500 text-slate-300 text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="https://github.com/Sayantankhan" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 lg:px-8 bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Featured Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {project.title}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-500 text-slate-300">
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

      {/* Contact Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Interested in discussing opportunities, collaborating on projects, or just having a technical conversation? 
            I'd love to hear from you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="https://github.com/Sayantankhan" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700">
              <a href="https://www.linkedin.com/in/sayantan-khan-219231b7/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
              <a href="https://sayantankhan.github.io/blog/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Technical Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 lg:px-8 border-t border-slate-700">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Sayantan Khan. Built with passion for great software.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
