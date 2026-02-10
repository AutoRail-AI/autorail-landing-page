"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "lib/utils"

export const Accordion = AccordionPrimitive.Root

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "border-b border-border-default last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

export type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-5 text-left",
          "text-lg font-medium text-cloud-white font-[family-name:var(--font-grotesk)]",
          "transition-all hover:text-electric-cyan",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-5 shrink-0 text-foreground-secondary transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-foreground-secondary",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-5 pt-0 text-base leading-relaxed">{children}</div>
    </AccordionPrimitive.Content>
  )
}
