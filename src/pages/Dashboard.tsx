import React from "react";
import ReactDOM from "react-dom/client";
import ProjectManager from "./ProjectManager";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ProjectManager />
    </React.StrictMode>
);

import { DashboardLayout } from "@/components/DashboardLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { StatCard } from "@/components/StatCard";
import { FolderKanban, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    status: "progress" as const,
    progress: 65,
    deadline: "Dec 20, 2025",
    description: "Complete overhaul of the online store with modern UI/UX",
  },
  {
    id: 2,
    title: "Mobile App Development",
    status: "progress" as const,
    progress: 40,
    deadline: "Jan 15, 2026",
    description: "iOS and Android app for customer engagement",
  },
  {
    id: 3,
    title: "SEO Optimization",
    status: "completed" as const,
    progress: 100,
    deadline: "Nov 30, 2025",
    description: "Improve search rankings and organic traffic",
  },
  {
    id: 4,
    title: "Brand Identity Package",
    status: "pending" as const,
    progress: 10,
    deadline: "Feb 5, 2026",
    description: "Logo design and brand guidelines development",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John 👋</h1>
          <p className="text-muted-foreground mt-2">Here's what's happening with your projects.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Projects"
            value={12}
            icon={FolderKanban}
            trend="+2 this month"
            trendUp={true}
          />
          <StatCard
            title="Completed"
            value={8}
            icon={CheckCircle2}
            trend="+3 this month"
            trendUp={true}
          />
          <StatCard
            title="In Progress"
            value={3}
            icon={Clock}
          />
          <StatCard
            title="Success Rate"
            value="98%"
            icon={TrendingUp}
            trend="+5%"
            trendUp={true}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Active Projects</h2>
            <button className="text-sm font-medium text-primary hover:text-primary-light transition-colors">
              View all projects →
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => navigate(`/project/${project.id}`)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-2">
            Need help with your project?
          </h3>
          <p className="text-primary-foreground/90 mb-4">
            Our team is here to assist you every step of the way.
          </p>
          <p className="text-primary-foreground font-semibold text-lg mb-6">
            Call us: 09099996659
          </p>
          <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-muted transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
