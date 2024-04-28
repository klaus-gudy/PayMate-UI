"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Property = {
  id: string
  location: string
  type: "frame" | "house" | "apartment" | "studio"
  amount: number
  status: "vacant" | "occupied"
}

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
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
]
