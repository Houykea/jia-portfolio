import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectCard = (props) => {
  const title = p
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-900">{title}</CardTitle>
        <Badge className="bg-blue-500 text-white w-fit">{status}</Badge>
      </CardHeader>
      <CardContent>
        <Button asChild className="hover:bg-blue-600 transition">
          <a href={link}>View project</a>
        </Button>
      </CardContent>
    </Card>
  )
}