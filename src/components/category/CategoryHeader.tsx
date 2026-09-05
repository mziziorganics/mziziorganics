import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryHeaderProps {
  title: string;
  intro: string;
}

const CategoryHeader = ({ title, intro }: CategoryHeaderProps) => {
  return (
    <section className="w-full px-6 mb-8">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-light text-foreground">{title}</h1>
        <div className="w-16 h-px bg-brand mt-4" />
        <p className="text-sm font-light text-muted-foreground mt-4 max-w-lg">{intro}</p>
      </div>
    </section>
  );
};

export default CategoryHeader;
