import { createFileRoute } from "@tanstack/react-router";
import { Quiz } from "@/components/quiz";

export const Route = createFileRoute("/desafio")({
  component: () => <Quiz />,
  head: () => ({ meta: [{ title: "Desafio · StudySphere" }] }),
});
