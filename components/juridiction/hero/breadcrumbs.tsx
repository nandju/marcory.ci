import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadcrumbNav() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/ambassade">L'Ambassade</BreadcrumbItem>
      <BreadcrumbItem href="/ambassadeur">L'Ambassadeur</BreadcrumbItem>
    </Breadcrumbs>
  );
}