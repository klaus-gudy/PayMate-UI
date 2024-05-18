"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

export type Tenants = {
  id: number
  fullname: string
  email: string
  phoneNo: number
  propertyNo: number
  startDate: string
  endDate: string
  duration: number
  lastPayment: string
  paymentMethod: "bank" | "cash" | "transfer"
  amount: number
  status: "pending" | "processing" | "paid" | "overdue"
}

export const columns: ColumnDef<Tenants>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "fullname",
    header: "Fullname",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNo",
    header: "Phone No",
  },
  {
    accessorKey: "propertyNo",
    header: "Property No",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "lastPayment",
    header: "Last Payment",
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <Button variant="ghost" className="h-8">
          Edit
        </Button>
      );
    },
  },
];
