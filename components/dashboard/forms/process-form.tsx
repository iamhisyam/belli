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


const ProcessForm = () => {

    const formSchema = z.object({
        volume: z.string().min(1, {
            message: "required",
        }),
        currency: z.string().min(1, {
            message: "required",
        }),
        rate: z.string().min(1, {
            message: "required",
        }),
        sRate: z.string().min(1, {
            message: "required",
        }),
        sFreight: z.string().min(1, {
            message: "required",
        }),
        spotId: z.string().min(1, {
            message: "required",
        }),
        gswt: z.string().min(1, {
            message: "required",
        }),
        chwt: z.string().min(1, {
            message: "required",
        }),
        consignee: z.string().min(1, {
            message: "required",
        }),
        amountDue: z.string().min(1, {
            message: "required",
        }),

    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amountDue: "",
            chwt: "",
            consignee: "",
            currency: "",
            gswt: "",
            rate: "",
            sFreight: "",
            spotId: "",
            sRate: "",
            volume: ""
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
                    name="volume"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vol (KG)
                                <TooltipWrapper description="Vol KG">
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
                    name="currency"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Currency
                                <TooltipWrapper description="Currency">
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
                    name="rate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rate
                                <TooltipWrapper description="Rate">
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
                    name="sRate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>S Rate
                                <TooltipWrapper description="S Rate">
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
                    name="sFreight"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>S Freight
                                <TooltipWrapper description="S Freight">
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
                    name="spotId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Spot ID
                                <TooltipWrapper description="Spot ID">
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
                    name="gswt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>GS Wt.KG
                                <TooltipWrapper description="GS Wt.KG">
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
                    name="chwt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CH Wt.KG
                                <TooltipWrapper description="CH Wt.KG">
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
                <div className="col-span-2">
                    <FormField
                        control={form.control}
                        name="amountDue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amt Due
                                    <TooltipWrapper description="Amount Due">
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
                </div>

            </form>
        </Form>
        </div>
    )

}

export default ProcessForm