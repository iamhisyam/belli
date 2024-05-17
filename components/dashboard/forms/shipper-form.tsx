'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ArrowPathIcon, CalendarIcon, ListBulletIcon, MagnifyingGlassIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TooltipWrapper from "../../wrapper/tooltips"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsList } from "@/components/ui/tabs"
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs"


const ShipperForm = () => {

    const formSchema = z.object({
        route: z.string().min(1, {
            message: "required",
        }),
        origin: z.string().min(1, {
            message: "required",
        }),
        destination: z.string().min(1, {
            message: "required",
        }),
        partnerType: z.string().min(1, {
            message: "required",
        }),
        partnerCode: z.string().min(1, {
            message: "required",
        }),
        date: z.date(),
        flightCode: z.string().min(1, {
            message: "required",
        }),
        allotmentCode: z.string().min(1, {
            message: "required",
        }),
        awbStatus: z.string().min(1, {
            message: "required",
        })

    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            allotmentCode: "",
            awbStatus: "",
            date: new Date(),
            destination: "",
            flightCode: "",
            origin: "",
            partnerCode: "",
            partnerType: "",
            route: ""
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

        <Tabs defaultValue="route1">
            <TabsList className="bg-transparent space-x-5">
                <TabsTrigger value="route1" className="text-sm border-t border-r border-l border-zinc-800 p-2 rounded-t rounded-r rounded-l rounded-lg">Route 1</TabsTrigger>
                <TabsTrigger value="route2">+</TabsTrigger>

            </TabsList>
            <TabsContent value="route1" className="">
                <div className="border-zinc-800  border-2 rounded-lg p-4 space-y-2 border-b border-r border-l">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="route"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select
                                            <TooltipWrapper description="Route">
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
                                                <SelectItem value="10001">Truck</SelectItem>
                                                <SelectItem value="10002">Cargo</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="origin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Origin *
                                            <TooltipWrapper description="Origin">
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
                                name="destination"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Destination *
                                            <TooltipWrapper description="destination">
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
                                name="partnerType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Partner Type
                                            <TooltipWrapper description="Route">
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
                                                <SelectItem value="10001">AIR</SelectItem>
                                                <SelectItem value="10002">SEA</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="partnerCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Partner Code
                                            <TooltipWrapper description="Partner Code">
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
                                                <SelectItem value="10001">SG</SelectItem>
                                                <SelectItem value="10002">DS</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col space-y-3 justify-end">
                                        <FormLabel>Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "pl-3 h-12 text-left font-normal bg-zinc-900 hover:bg-zinc-900 hover:text-white border-zinc-800",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 border-4 border-zinc-600" align="start">
                                                <Calendar
                                                    className="bg-zinc-900 text-white "
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="origin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Flight Code *

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
                                name="allotmentCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Allotment Code</FormLabel>
                                        <FormControl>

                                            <Input className="h-12 border border-zinc-800" placeholder="" {...field} />

                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="col-span-2">
                                <FormField
                                    control={form.control}
                                    name="awbStatus"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>AWB Status

                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-12 border border-zinc-800 ">
                                                        <SelectValue placeholder="" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-zinc-800 text-white  border-0" >
                                                    <SelectItem value="10001">SG</SelectItem>
                                                    <SelectItem value="10002">DS</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="col-span-2 flex space-x-4">
                                <Button size="lg" className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-md p-2 ">
                                    <PlusIcon className="h-5 mr-4" />
                                    New Route
                                </Button>
                                <Button size="lg" className="w-20 h-full bg-indigo-600 hover:bg-indigo-700 text-md p-2">
                                    <TrashIcon className="h-5" />

                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </TabsContent>

        </Tabs>

    )

}

export default ShipperForm