import Card from "@/components/card";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Header />
        <div className="grid gap-4 lg:grid-cols-3">
          <Card icon="🍕" />
          <Card icon="🍔" />
          <Card icon="🍟" />
        </div>
      </div>
    </div>
  )
}
