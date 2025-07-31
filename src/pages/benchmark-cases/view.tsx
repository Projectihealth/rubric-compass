import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import Papa from "papaparse";

export default function BrowseAll() {
  const [rubrics, setRubrics] = useState<any[]>([]);
  const [allRubrics, setAllRubrics] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/rubrics.csv")
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
        const output = [];
        let idCounter = 1;

        parsed.data.forEach((row: any) => {
          const Domain = row["Domain"];
          const SubDomain = row["SubDomain"];
          const Category = row["Category/Scenario"];
          const RubricText = row["Case-Specific Criteria/Rubrics - Human Expert"];

          const matches = RubricText?.match(/(SAFETY|RELEVANCY|TRUSTWORTHINESS)([\s\S]*?)(?=(SAFETY|RELEVANCY|TRUSTWORTHINESS|$))/gi);
          matches?.forEach((section: string) => {
            const lines = section.split("\n").slice(1).map((l) => l.trim()).filter(Boolean);
            lines.forEach((line) => {
              output.push({
                id: idCounter++,
                name: line.replace(/^\d+\.\s*/, ""),
                domain: Domain?.trim(),
                subdomain: SubDomain?.trim(),
                category: Category?.trim(),
              });
            });
          });
        });

        setRubrics(output);
        setAllRubrics(output); // store full copy
      });
  }, []);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setRubrics(allRubrics); // Reset
      return;
    }

    const filtered = allRubrics.filter((rubric) =>
      [rubric.name, rubric.domain, rubric.subdomain, rubric.category]
        .some((field) => field?.toLowerCase().includes(term))
    );

    setRubrics(filtered);
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search rubrics by name, domain, or category..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>
        <Button onClick={handleSearch} className="shrink-0">
          Search
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Rubrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        {rubrics.map((rubric) => (
          <Card key={rubric.id} className="shadow-card hover:shadow-professional transition-all p-3">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-0.5">
                  <CardTitle className="text-sm font-medium text-foreground">{rubric.name}</CardTitle>
                  <CardDescription className="text-xs flex items-center gap-2">
                    <span>{rubric.domain}</span>
                    <span>•</span>
                    <span>{rubric.subdomain}</span>
                    <span>•</span>
                    <span>{rubric.category}</span>
                  </CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 text-xs text-muted-foreground" />
          </Card>
        ))}
      </div>
    </div>
  );
}
