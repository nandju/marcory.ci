import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadcrumbNav() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/ambassade">Tourisme</BreadcrumbItem>
      <BreadcrumbItem href="/ambassadeur">Sites touristiques</BreadcrumbItem>
    </Breadcrumbs>
  );
}