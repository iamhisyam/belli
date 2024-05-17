'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { ArrowPathIcon,MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { toast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TooltipWrapper from "../../wrapper/tooltips"
import { Checkbox } from  "@/components/ui/checkbox"


const BookingForm = () => {

    const formSchema = z.object({
        bookingTypeId: z.string().min(1, {
            message: "required",
        }),
        partnerPrefixId: z.string().min(1, {
            message: "required",
        }),
        awb: z.string().min(1, {
            message: "required",
        }),
        partnerCode: z.string().min(1, {
            message: "required",
        }),
        isPhysical: z.boolean().default(false),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bookingTypeId: "",
            partnerPrefixId: "",
            awb: "",
            partnerCode: "",
            isPhysical: false
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="bookingTypeId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Booking Type
                                <TooltipWrapper description="Booking Type">
                                    <span>&nbsp;ⓘ</span>
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
                    name="partnerPrefixId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Partner Prefix *
                                <TooltipWrapper description="Partner Prefix">
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
                    name="awb"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>AWB
                                <TooltipWrapper description="AWB">
                                    <span>&nbsp;ⓘ</span>
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
                    name="partnerCode"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Partner Code *
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
                                <SelectContent className="bg-zinc-800 text-white border-0">
                                    <SelectItem value="10001">10001</SelectItem>
                                    <SelectItem value="10002">10002</SelectItem>
                                    <SelectItem value="10003">10003</SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center space-x-4">
                    <FormField
                        control={form.control}
                        name="isPhysical"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0  py-4">
                                <FormControl>
                                    <Checkbox
                                        className="border-zinc-500 h-4 w-4"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-0 space-x-0 items-center">
                                    <FormLabel>
                                        Is Physical
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />

                    <Button type="button" className="h-10 bg-indigo-600 hover:bg-indigo-700 text-md"> 
                        <MagnifyingGlassIcon className="h-5 " />
                    </Button>

                    <Button type="button" className="h-10 bg-indigo-600 hover:bg-indigo-700 text-md"> 
                        <ArrowPathIcon className="h-5 " />
                    </Button>

                </div>

                
            </form>
        </Form>
        </div>
    )

}

export default BookingForm