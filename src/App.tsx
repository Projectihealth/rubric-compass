import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import RubricsLayout from "./pages/rubrics/RubricsLayout";
import BrowseAll from "./pages/rubrics/BrowseAll";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import { BookOpen, TestTube, Brain, BarChart, Settings, Plus, Archive, Upload, FileText, TrendingUp, BarChart3, Users, UserCog, FileDown, FileText as Logs } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Rubrics Routes */}
            <Route path="/rubrics" element={<RubricsLayout />}>
              <Route index element={<BrowseAll />} />
              <Route path="browse" element={<BrowseAll />} />
              <Route path="my" element={<PlaceholderPage title="📚 My Rubrics" description="Manage your personal rubric collection" icon={BookOpen} />} />
              <Route path="create" element={<PlaceholderPage title="📚 Create New Rubric" description="Build a new evaluation rubric" icon={Plus} />} />
              <Route path="archived" element={<PlaceholderPage title="📚 Archived Rubrics" description="View archived and inactive rubrics" icon={Archive} />} />
            </Route>
            
            {/* Test Cases Routes */}
            <Route path="/test-cases/run" element={<PlaceholderPage title="🧪 Run LLM Evaluation" description="Execute evaluations against your test cases" icon={TestTube} />} />
            <Route path="/test-cases/upload" element={<PlaceholderPage title="🧪 Upload Case Data" description="Import new test case datasets" icon={Upload} />} />
            <Route path="/test-cases/manage" element={<PlaceholderPage title="🧪 Manage Test Sets" description="Organize and maintain test case collections" icon={FileText} />} />
            
            {/* Criteria & Logic Routes */}
            <Route path="/criteria-logic/builder" element={<PlaceholderPage title="🧠 Rule Builder" description="Create and modify evaluation rules" icon={Brain} />} />
            <Route path="/criteria-logic/suggestions" element={<PlaceholderPage title="🧠 LLM Suggestions" description="Get AI-powered rule recommendations" icon={Brain} />} />
            <Route path="/criteria-logic/audits" element={<PlaceholderPage title="🧠 Versioning & Audits" description="Track changes and audit rule history" icon={FileText} />} />
            
            {/* Analytics Routes */}
            <Route path="/analytics/trends" element={<PlaceholderPage title="📈 Performance Trends" description="Monitor evaluation performance over time" icon={TrendingUp} />} />
            <Route path="/analytics/metrics" element={<PlaceholderPage title="📈 Agreement Metrics" description="Analyze inter-rater agreement statistics" icon={BarChart3} />} />
            <Route path="/analytics/stats" element={<PlaceholderPage title="📈 Reviewer Stats" description="Review individual evaluator performance" icon={Users} />} />
            
            {/* Settings Routes */}
            <Route path="/settings/preferences" element={<PlaceholderPage title="⚙️ User Preferences" description="Customize your application settings" icon={UserCog} />} />
            <Route path="/settings/export" element={<PlaceholderPage title="⚙️ Export/Import" description="Manage data export and import operations" icon={FileDown} />} />
            <Route path="/settings/logs" element={<PlaceholderPage title="⚙️ System Logs" description="View system activity and audit logs" icon={Logs} />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
