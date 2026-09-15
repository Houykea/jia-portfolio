import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  status: string;
  link: string;
}

const ProjectCard = ({ title, status, link }: ProjectCardProps) => {
  return (
    <Card className="w-full md:w-80">
      <CardHeader className="">
        <CardTitle className="text-gray-900">{title}</CardTitle>
        <Badge className="bg-blue-500 text-white w-fit" render={undefined}>
          {status}
        </Badge>
      </CardHeader>
      <CardContent className="">
        <Button asChild className="hover:bg-blue-600 transition">
          <a href={link} target="_blank" rel="noreferrer">View project</a>
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProjectCard;