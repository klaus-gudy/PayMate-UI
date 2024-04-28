import Header from "@/components/common/header";
import Panel from "./_components/panel";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./_components/data-table";
import { columns, Property } from "./_components/columns";

async function getProperty(): Promise<Property[]> {
  return [
    {
      id: "1",
      location: "Dar-es-salaam",
      type: "apartment",
      amount: 300000,
      status: "vacant",
    },
    {
    id: "2",
    location: "Morogoro",
    type: "studio",
    amount: 200000,
    status: "occupied",
    },
    {
    id: "3",
    location: "Tanga",
    type: "house",
    amount: 500000,
    status: "vacant",
    }
    // ...
  ]
}

export default async function Dashboard() {
  const data = await getProperty()
    return (
      <div className="flex-col md:flex">
        <Header />
        <div className="flex-1 space-y-4 p-8 md:pt-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
            <div className="flex items-center space-x-2"></div>
          </div>
          <div className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8">
          <Panel />
          </div>
          <Card>
          <DataTable columns={columns} data={data} />
          </Card>
        </div>
      </div>
    );
}