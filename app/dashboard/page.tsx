import Header from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import DashboardCard from "./_components/dashboard-card";
import { Bargraph } from "./_components/bargraph";
import { Renewal } from "./_components/renewal";

export default function Dashboard() {
  return (
    <div className="flex-col md:flex">
      <Header />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2"></div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials" disabled>
              Financial
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard
                title="Total Tenants"
                value="139"
                description="+20.1% from last year"
                icon={
                  <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                }
              />
              <DashboardCard
                title="Total Properties"
                value="139"
                description="+20.1% from last year"
                icon={
                  <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                }
              />
              <DashboardCard
                title="Vacant"
                value="0"
                description="from last month"
                icon={
                  <>
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </>
                }
              />
              <DashboardCard
                title="Maintanance made"
                value="34"
                description="from last week"
                icon={
                  <>
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </>
                }
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Income</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Bargraph />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Renewal</CardTitle>
                  <CardDescription>
                    List of contracts that will expire within 60 days.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Renewal />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}