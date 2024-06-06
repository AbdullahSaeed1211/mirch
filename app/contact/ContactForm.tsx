"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import separator2 from "@/public/contact/separator2.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First Name is required.",
  }),
  lastName: z.string().min(1, {
    message: "Last Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  companyName: z.string().min(1, {
    message: "Company Name is required.",
  }),
  role: z.literal("Business"),
  services: z
    .array(
      z.enum([
        "Influencer Marketing",
        "Investor Marketing",
        "Social Media",
        "Public Relations (PR)",
        "Community Management",
        "Paid Media",
        "Strategy",
        "Legal",
        "Events & Conferences",
        "Creatives (Video, Photo, Web Design, Branding)",
      ])
    )
    .min(1, {
      message: "At least one service must be selected.",
    }),
  website: z
    .string()
    .url({
      message: "Invalid URL.",
    })
    .optional(),
  industry: z.enum(["crypto & NFTs", "Other"]),
  otherIndustry: z.string().optional(),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      role: "Business",
      services: [],
      website: "",
      industry: "crypto & NFTs",
      otherIndustry: "",
      budget: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const servicesOptions: FormData["services"] = [
    "Influencer Marketing",
    "Investor Marketing",
    "Social Media",
    "Public Relations (PR)",
    "Community Management",
    "Paid Media",
    "Strategy",
    "Legal",
    "Events & Conferences",
    "Creatives (Video, Photo, Web Design, Branding)",
  ];

  return (
    <div className="bg-[#f2f2f1] w-full">
      <div className="flex flex-col justify-start w-full">
        <h1 className="font-open_sans font-extrabold text-[#006299] text-[18px] leading-6 lg:text-[46px] lg:leading-[63px]">
          Contact
        </h1>
        <Image src={separator2} alt="separator" className="h-3 w-[223px]" />
      </div>
      
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you a (an)?</FormLabel>
                <FormControl>
                  <Input placeholder="yo" readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="sm:col-span-2">
            <FormItem>
              <FormLabel>What services do you need?</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {servicesOptions.map((service) => (
                    <Controller
                      key={service}
                      name="services"
                      control={form.control}
                      render={({ field }) => {
                        const isChecked = field.value.includes(service);
                        return (
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={isChecked}
                              onChange={() => {
                                if (isChecked) {
                                  field.onChange(
                                    field.value.filter(
                                      (value: string) => value !== service
                                    )
                                  );
                                } else {
                                  field.onChange([...field.value, service]);
                                }
                              }}
                            />
                            <label
                              htmlFor={service}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              {service}
                            </label>
                          </div>
                        );
                      }}
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
          <div className="sm:col-span-2">
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-x-4">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormControl>
                        <Input placeholder="Your Website" {...field} />
                      </FormControl>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormControl>
                        <Input placeholder="Your Industry Field" {...field} />
                      </FormControl>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormControl>
                        <Textarea
                          placeholder="Your Marketing Budget"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
          <div className="sm:col-span-2">
          <Button
          variant="default"
          color="#006299"
          type="submit"
          className="text-[white] rounded-full px-4 bg-gradient-to-tr from-[#FD0478] to-[#D940FA] text-[16px] leading-5 mt-2 md:mt-5">
          Send Now
        </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
