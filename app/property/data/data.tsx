import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const type = [
    {
      value: "frame",
      label: "Frame",
    },
    {
      value: "house",
      label: "House",
    },
    {
      value: "apartment",
      label: "Apartment",
    },
    {
      value: "studio",
      label: "Studio",
    },
  ];
  
  export const statuses = [
    {
      value: "vacant",
      label: "vacant",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "occupied",
      label: "Occupied",
      icon: StopwatchIcon,
    },
  ]