import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadcrumbNav() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/tourisme">Tourisme</BreadcrumbItem>
      <BreadcrumbItem href="/tourisme/tchad">Le Tchad</BreadcrumbItem>
    </Breadcrumbs>
  );
}