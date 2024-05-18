import Header from "@/components/common/header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tenants, columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

async function getData(): Promise<Tenants[]> {
    // Fetch data from your API here.
    return [
      {
        id: 1,
        fullname: "John Doe",
        email: "JohnDoe@gmail.com",
        phoneNo: 1234567890,
        propertyNo: 24,
        startDate: "2021-01-01",
        endDate: "2022-01-01",
        duration: 12,
        lastPayment: "2021-01-01",
        paymentMethod: "bank",
        amount: 100000,
        status: "paid",
      },
      // ...
    ]
  }

export default async function TenantsPage() {
    const data = await getData()
  return (
    <div className="flex-col md:flex">
      <Header />
      <div className="flex-1 space-y-4 p-8 md:pt-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tenants</h2>
          <div className="flex items-center space-x-2"></div>
        </div>
        <div className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8"></div>
        <Card className="p-2">
        <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
}
