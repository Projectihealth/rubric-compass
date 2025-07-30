import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye, Edit, Copy } from "lucide-react";

export default function BrowseAll() {
  const rubrics = [
    {
      id: 1,
      name: "Clinical Diagnosis Accuracy",
      domain: "Diagnostics",
      subdomain: "Primary Care",
      category: "Accuracy Assessment",
      version: "v2.1",
      lastModified: "2 days ago",
      author: "Dr. Sarah Chen",
      status: "active",
      evaluations: 156,
    },
    {
      id: 2,
      name: "Medication Recommendation Safety",
      domain: "Therapeutics",
      subdomain: "Pharmacology",
      category: "Safety Protocols",
      version: "v1.3",
      lastModified: "1 week ago",
      author: "Dr. Michael Rodriguez",
      status: "active",
      evaluations: 89,
    },
    {
      id: 3,
      name: "Patient Communication Assessment",
      domain: "Communication",
      subdomain: "Patient Interaction",
      category: "Empathy & Clarity",
      version: "v3.0",
      lastModified: "3 days ago",
      author: "Dr. Emily Watson",
      status: "active",
      evaluations: 234,
    },
    {
      id: 4,
      name: "Differential Diagnosis Logic",
      domain: "Diagnostics",
      subdomain: "Specialty Care",
      category: "Reasoning Chain",
      version: "v1.8",
      lastModified: "5 days ago",
      author: "Dr. James Kim",
      status: "draft",
      evaluations: 12,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "draft":
        return "bg-warning text-warning-foreground";
      case "archived":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search rubrics by name, domain, or category..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Rubrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rubrics.map((rubric) => (
          <Card key={rubric.id} className="shadow-card hover:shadow-professional transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg text-foreground">{rubric.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span>{rubric.domain}</span>
                    <span>•</span>
                    <span>{rubric.subdomain}</span>
                    <span>•</span>
                    <span>{rubric.category}</span>
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(rubric.status)}>
                  {rubric.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Version:</span>
                  <span className="ml-2 font-medium text-foreground">{rubric.version}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Evaluations:</span>
                  <span className="ml-2 font-medium text-foreground">{rubric.evaluations}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Author:</span>
                  <span className="ml-2 font-medium text-foreground">{rubric.author}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Modified:</span>
                  <span className="ml-2 font-medium text-foreground">{rubric.lastModified}</span>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Copy className="h-4 w-4 mr-2" />
                  Clone
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}