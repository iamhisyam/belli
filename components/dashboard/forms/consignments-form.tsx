'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ArrowPathIcon, ListBulletIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TooltipWrapper from "../../wrapper/tooltips"
import { Checkbox } from "@/components/ui/checkbox"


const ConsignmentForm = () => {

    const formSchema = z.object({
        origin: z.string().min(1, {
            message: "required",
        }),
        destination: z.string().min(1, {
            message: "required",
        }),
        commodityCode: z.string().min(1, {
            message: "required",
        }),
        commodityDesc: z.string().min(1, {
            message: "required",
        }),
        paymentMode: z.string().min(1, {
            message: "required",
        }),
        billTo: z.string().min(1, {
            message: "required",
        }),
        billToName: z.string().min(1, {
            message: "required",
        }),
        shipper: z.string().min(1, {
            message: "required",
        }),
        consignee: z.string().min(1, {
            message: "required",
        }),
        customer: z.string().min(1, {
            message: "required",
        }),
        customerName: z.string().min(1, {
            message: "required",
        }),
        pieces: z.string().min(1, {
            message: "required",
        }),
        grossWeight: z.string().min(1, {
            message: "required",
        }),
        freightForwarder: z.string().min(1, {
            message: "required",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            billTo: "",
            billToName: "",
            commodityCode: "",
            commodityDesc: "",
            consignee: "",
            customer: "",
            customerName: "",
            destination: "",
            freightForwarder: "",
            grossWeight: "",
            origin: "",
            paymentMode: "",
            pieces: "",
            shipper: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }


    return (
        <div className="border-zinc-800  border-2 rounded-lg p-4 space-y-2">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="origin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Origin *
                                <TooltipWrapper description="Origin">
                                    <span>&nbsp;&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-12 border border-zinc-800 ">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-800 text-white  border-0">
                                    <SelectItem value="10001">10001</SelectItem>
                                    <SelectItem value="10002">10002</SelectItem>
                                    <SelectItem value="10003">10003</SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Destination
                                <TooltipWrapper description="Destination">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-12 border border-zinc-800 ">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-800 text-white  border-0" >
                                    <SelectItem value="10001">10001</SelectItem>
                                    <SelectItem value="10002">10002</SelectItem>
                                    <SelectItem value="10003">10003</SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="commodityCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Commodity Code *
                                <TooltipWrapper description="Commodity Code">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="commodityDesc"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Commodity Desc *
                                <TooltipWrapper description="Commodity Desc">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="paymentMode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Payment Mode
                                <TooltipWrapper description="Payment Mode">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="billTo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bill to
                                <TooltipWrapper description="Bill to">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="billToName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bill To Name
                                <TooltipWrapper description="Bill To Name">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="shipper"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Shipper
                                <TooltipWrapper description="Shipper">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <div className="flex items-center">
                                <div className="relative flex-grow">
                                    <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                                <ListBulletIcon className=" h-7 w-7 text-gray-400" />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="consignee"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Consignee
                                <TooltipWrapper description="Consignee">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <div className="flex items-center">
                                    <div className="relative flex-grow">
                                        <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                                        <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                    <ListBulletIcon className=" h-7 w-7 text-gray-400" />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="customer"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Customer
                                <TooltipWrapper description="Customer">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Customer Name
                                <TooltipWrapper description="Customer Name">
                                    <span>&nbsp;&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-12 border border-zinc-800 ">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-800 text-white  border-0">
                                    <SelectItem value="10001">10001</SelectItem>
                                    <SelectItem value="10002">10002</SelectItem>
                                    <SelectItem value="10003">10003</SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="pieces"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pieces
                                <TooltipWrapper description="Pieces">
                                    <span>&nbsp;&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-12 border border-zinc-800 ">
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-zinc-800 text-white  border-0">
                                    <SelectItem value="10001">10001</SelectItem>
                                    <SelectItem value="10002">10002</SelectItem>
                                    <SelectItem value="10003">10003</SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="grossWeight"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gross Weight *
                                <TooltipWrapper description="grossWeight">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                                    <ListBulletIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="freightForwarder"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Freight Forwarder
                                <TooltipWrapper description="Freight Forwarder">
                                    <span>&nbsp;ⓘ</span>
                                </TooltipWrapper>
                            </FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input className="h-12 border border-zinc-800" placeholder="" {...field} />
                                    <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />


            </form>
        </Form>
        </div>
    )

}

export default ConsignmentForm