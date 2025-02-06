import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadcrumbNav() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/tourisme">Tourisme</BreadcrumbItem>
      <BreadcrumbItem href="/tourisme/peuples-et-cultures">Les peuples et Cultures</BreadcrumbItem>
    </Breadcrumbs>
  );
}