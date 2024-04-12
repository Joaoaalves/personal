"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useTranslation } from "next-i18next";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const { t } = useTranslation();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data) {
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          toast({
            title: t("contact.success"),
            description: (
              <p className="mt-2 w-[340px] rounded-md dark:bg-slate-950 bg-white p-4">
                {t("contact.success-message")}
              </p>
            ),
          });
        }
      })
      .catch(() => {
        toast({
          title: t("contact.error"),
          description: (
            <p className="mt-2 w-[340px] rounded-md dark:bg-slate-950 bg-white p-4">
              {t("contact.error-message")}
            </p>
          ),
        });
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full xl:w-3/5 space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact.name")}{" "}
                <span className="text-neutral-800 dark:text-neutral-400">
                  *
                </span>
              </FormLabel>
              <FormControl>
                <Input placeholder={t("contact.name.placeholder")} {...field} />
              </FormControl>
              <FormMessage className="dark:text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact.email")}{" "}
                <span className="text-neutral-800 dark:text-neutral-400">
                  *
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t("contact.email.placeholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage className="dark:text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact.message")}{" "}
                <span className="text-neutral-800 dark:text-neutral-400">
                  *
                </span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contact.message.placeholder")}
                  className="resize-none h-80"
                  {...field}
                />
              </FormControl>
              <FormMessage className="dark:text-red-600" />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {t("contact.send")}
        </Button>
      </form>
    </Form>
  );
}
