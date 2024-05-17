'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useApp } from "@/context/AppContext"
import { cn } from "@/lib/utils"
import { ArrowPathIcon, BookmarkSquareIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MapIcon, NewspaperIcon, PlusCircleIcon, UserIcon } from "@heroicons/react/24/outline"
import { ActivityLogIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Separator } from "../ui/separator"
import { useState } from "react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z } from "zod"
import { toast } from "../ui/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import TooltipWrapper from "../wrapper/tooltips"
import { Checkbox } from "../ui/checkbox"
import BookingForm from "./forms/booking-form"
import ConsignmentForm from "./forms/consignments-form"
import ShipperForm from "./forms/shipper-form"
import ProcessForm from "./forms/process-form"



const navigation = [
    {
        name: "Create Booking",
        code: "booking",
        icon: PlusCircleIcon,
        current: true,
    },
    {
        name: "Consignment Details",
        code: "consignment",
        icon: MapIcon,
        current: false,
    },
    {
        name: "Shipper Details",
        code: "shipper",
        icon: UserIcon,
        current: false,
    },
    {
        name: "Process Rate",
        code: "process",
        icon: BookmarkSquareIcon,
        current: false,
    },
    {
        name: "Activity Log",
        code: "activity",
        icon: ActivityLogIcon,
        current: false,
    }
]







export default function ModalOrders() {
    const { orderOpened, setOrderOpened } = useApp();
    const [menus, setMenus] = useState<Array<any>>(navigation)
    const [activeMenu, setActiveMenu] = useState<string>("booking")

    const handleSelectMenu = (item: any) => {
        setActiveMenu(item.code)
        // update current menu
        setMenus((menus) => {
            return menus.map(menu => {
                if (menu.code === item.code) return { ...menu, current: true }
                else return { ...menu, current: false }
            })
        })
    }

    const firstMenu = menus.filter(menu => menu.code !== "activity");
    const secondMenu = menus.filter(menu => menu.code === "activity");

    return (
        <Dialog open={orderOpened} onOpenChange={setOrderOpened}>

            <DialogContent  className="sm:max-w-screen-xl overflow-y-scroll max-h-screen bg-zinc-900 border-zinc-800">
                <DialogHeader>
                    <DialogTitle className="text-2xl">New Orders</DialogTitle>

                </DialogHeader>
                <div className="lg:flex sm:space-y-2 lg:space-y-0 lg:space-x-4 mt-5">
                    <div className="md:flex-1 min-w-72  sm:w-full">
                        <div className="border-zinc-800  border-2 rounded-lg py-3">
                            <ul role="list" className="mx-2 space-y-2">
                                {firstMenu.map((item: any) =>
                                (<li key={item.code}
                                    onClick={() => handleSelectMenu(item)}
                                    className={cn(
                                        item.current
                                            ? " text-white"
                                            : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                                        "group flex justify-between items-center gap-x-3 rounded-md p-2 text-md font-semibold leading-6 cursor-pointer"
                                    )}>
                                    <div className="flex items-center gap-x-3">
                                        <item.icon
                                            className="h-6 w-6 shrink-0"
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </div>
                                </li>)

                                )}

                            </ul>
                            <Separator className="my-3 w-full bg-zinc-800 " />
                            <ul role="list" className="mx-2 space-y-2">
                                {secondMenu.map((item: any) =>
                                (<li key={item.code}
                                    onClick={() => handleSelectMenu(item)}
                                    className={cn(
                                        item.current
                                            ? " text-white"
                                            : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                                        "group flex justify-between items-center gap-x-3 rounded-md p-2 text-md font-semibold leading-6 cursor-pointer"
                                    )}>
                                    <div className="flex items-center gap-x-3">
                                        <item.icon
                                            className="h-6 w-6 shrink-0"
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </div>
                                </li>)

                                )}

                            </ul>
                        </div>
                    </div>
                    <div className="flex-grow sm:w-full md:min-w-96">
                      
                            {activeMenu === "booking" && <BookingForm />}
                            {activeMenu === "consignment" && <ConsignmentForm />}
                            {activeMenu === "shipper" && <ShipperForm />}
                            {activeMenu === "process" && <ProcessForm />}
                        


                    </div>
                    <div className="flex-1 flex-col min-w-80 sm:w-full">
                        <div className="border-zinc-800  border-2 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-semibold">Amount Due</h2>
                                <h2>$ 0.00</h2>
                            </div>
                            <Separator className="my-4 bg-zinc-800 " />
                            <div className="flex justify-between text-gray-400">
                                <p>Booking Code</p>
                                <p>$ 0.00</p>
                            </div>
                            <div className="md:flex justify-between text-gray-400">
                                <p>Booking ID</p>
                                <p>IP-4372-1501421737</p>
                            </div>

                            <div className="h-4"></div>

                            <div className="flex justify-between text-gray-400">
                                <p>Amount Paid</p>
                                <p>$ 20.00</p>
                            </div>
                            <Separator className="my-4 bg-zinc-800 " />
                            <div className="flex justify-between text-gray-400">
                                <p>Subtotal</p>
                                <p>$ 20.00</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Grand Total</p>
                                <p>$ 20.00</p>
                            </div>
                            <Separator className="my-4 bg-zinc-800 " />
                        </div>

                        <div className="border-zinc-800 mt-4 border-2 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-semibold">Balance</h2>
                                <h2>$ 0.00</h2>
                            </div>
                            <Separator className="my-4 bg-zinc-800 " />
                            <p className="font-semibold  text-gray-400">Elroy Carren</p>
                            <div className="flex justify-between text-gray-400">
                                <p>Individual Balance</p>
                                <p>$ 0.00</p>
                            </div>
                        </div>

                        <div className="space-y-2 mt-4">
                            <Button size="lg" className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-md ">
                                <NewspaperIcon className="mr-2 h-4 w-4" />
                                View Invoice
                            </Button>
                            <Separator className="border-1 bg-zinc-800 " />
                            <Button size="lg" className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-md ">
                                Save Reservation
                            </Button>
                        </div>
                    </div>

                </div>


            </DialogContent>
        </Dialog>
    )
}

